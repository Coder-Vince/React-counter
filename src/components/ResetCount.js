import React from "react";

const ResetCount = ({ counter, setCounter }) => {
  return (
    <button
      onClick={() => {
        setCounter(0);
      }}
      className="resetButton"
    >
      Reset
    </button>
  );
};
export default ResetCount;
