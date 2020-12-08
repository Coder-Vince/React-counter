import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Decrement = ({ counter, setCounter }) => {
  return (
    <button
      onClick={() => {
        setCounter(counter - 1);
      }}
    >
      <FontAwesomeIcon icon="minus" size="4x" />
    </button>
  );
};

export default Decrement;
