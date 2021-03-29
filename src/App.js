import React, { useState } from "react";

import Selection from "./Sort/selection-sort";
import AlgorithmContext from "./provider/algorithm.provider";

import MainField from "./components/main-field/mainField.component";
import Options from "./components/options/options.component";

import "./App.css";

const App = () => {
  const [currentAlgorithm, setCurrent] = useState(() => Selection);
  const changeAlgorithm = (newAlgorithm) => setCurrent(newAlgorithm);
  return (
    <div className="container">
      <AlgorithmContext.Provider value={{ currentAlgorithm, changeAlgorithm }}>
        <Options />
        <MainField />
      </AlgorithmContext.Provider>
    </div>
  );
};

export default App;
