import React from "react";

const Result = ({ score }) => {
  return (
    <div>
      <b>Your score : </b>
      <i style={{ color: "green" }}>{score}%</i>
    </div>
  );
};

export default Result;
