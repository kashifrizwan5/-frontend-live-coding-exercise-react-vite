import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import QuestionList from "./components/questionlist/QuestionList";
import Result from "./components/result/Result";
import AverageScore from "./components/averageScore/AverageScore";

// import storage from "node-persist";

function App() {
  const [score, setScore] = useState(0);
  const [averageScore, setAverageScore] = useState(0);
  // storage.initSync();

  useEffect(() => {
    localStorage.setItem(`run-${Date.now()}`, score);
    // await storage.setItem(`run-${Date.now()}`, score);
  }, [score]);

  useEffect(() => {
    let validScore = Object.values(localStorage).filter((val) => val != 0);
    let sumScore = validScore.reduce((total, item) => {
      return total + parseInt(item);
    }, 0);

    setAverageScore(sumScore ? (sumScore / validScore.length).toFixed(2) : 0);

    // console.log(await storage.values());
  }, [score]);

  return (
    <>
      <div className="main-wrapper">
        <div className="question-wrapper">
          <QuestionList setScore={setScore} />
          <Result score={score} />
        </div>
        <div className="average-answer">
          <AverageScore averageScore={averageScore} />
        </div>
      </div>
    </>
  );
}

export default App;
