import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <header className="Header">
      <FontAwesomeIcon icon="calculator" style={{ color: "#5C48D3" }} />
      <span>React Counter</span>
    </header>
  );
};

export default Header;
