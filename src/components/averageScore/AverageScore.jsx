import React from "react";

const AverageScore = ({ averageScore }) => {
  return (
    <div>
      <b>Your average score : </b>
      <i>{averageScore}%</i>
    </div>
  );
};

export default AverageScore;
