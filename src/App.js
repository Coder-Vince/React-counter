import React, { useState } from "react";
import "./reset.css";
import "./App.css";
import Header from "./components/Header";
import Increment from "./components/Increment";
import Decrement from "./components/Decrement";
import ResetCount from "./components/ResetCount";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPlus,
  faMinus,
  faCalculator,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "./components/Footer";
library.add(faPlus, faMinus, faCalculator);

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <Header />
      <div className="container">
        <span>
          <Decrement counter={counter} setCounter={setCounter} />
        </span>
        <span className="counter">{counter}</span>
        <span>
          <Increment counter={counter} setCounter={setCounter} />
        </span>
      </div>
      <div className="container2">
        <ResetCount counter={counter} setCounter={setCounter} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
