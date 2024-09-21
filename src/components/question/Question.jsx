import React, { useState } from "react";
import "./Question.css";

const Question = ({ que, answers, setAnswers, id, reset }) => {
  const onAnswer = (id, answer) => {
    const newAnswers = [...answers];
    newAnswers[id] = answer;
    setAnswers(newAnswers);
  };
  return (
    <li class="list-group-item">
      <div>
        <h3>{que}</h3>
        <div className="radio">
          <div className="radio-group">
            <input
              type="radio"
              value="yes"
              name={`${id}-answer`}
              onClick={() => onAnswer(id, "yes")}
            />
            <label class="form-check-label">Yes</label>
          </div>
          <div className="radio-group">
            <input
              type="radio"
              value="no"
              name={`${id}-answer`}
              onClick={() => onAnswer(id, "no")}
            />
            <label class="form-check-label"> No</label>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Question;
