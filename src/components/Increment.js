import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Increment = ({ counter, setCounter }) => {
  return (
    <button
      onClick={() => {
        setCounter(counter + 1);
      }}
    >
      <FontAwesomeIcon icon="plus" size="4x" />
    </button>
  );
};

export default Increment;
