import React, { useState } from "react";
import { QUESTIONS } from "../../questions";
import Question from "../question/Question";
import "./QuestionList.css";

let questionlist = Object.values(QUESTIONS);

const QuestionList = ({ setScore }) => {
  const [answers, setAnswers] = useState(Array(questionlist.length).fill(null));
  const [disableSubmit, setDisableSubmit] = useState();
  const [reset, setReset] = useState(false);

  const resetRadio = () => {
    const radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach((radio) => {
      radio.checked = false;
    });

    setDisableSubmit(true);
  };

  const submitTest = () => {
    event.preventDefault();
    const totalScore = answers.filter((answer) => answer === "yes").length;
    setScore((totalScore / questionlist.length) * 100);
    resetRadio();
  };

  return (
    <div className="questionarre">
      <ul class="list-group">
        {questionlist.map((que, index) => {
          return (
            <Question
              que={que}
              id={index}
              setAnswers={setAnswers}
              answers={answers}
            />
          );
        })}
      </ul>
      <button
        className="btn btn-primary"
        onClick={submitTest}
        disabled={disableSubmit}
      >
        Submit
      </button>
      {/* <button onClick={submitAgain}>Submit Again</button> */}
    </div>
  );
};

export default QuestionList;
