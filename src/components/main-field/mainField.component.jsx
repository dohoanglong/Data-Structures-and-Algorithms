import React, { useState, useContext } from "react";
//import CustomButton from "../custom-button/CustomButton.component";

import AlgorithmContext from "../../provider/algorithm.provider";
import "./mainField.styles.css";



const MainField = () => {
  const input = React.createRef();
  const [arr, changeArr] = useState([]);
  const { currentAlgorithm } = useContext(AlgorithmContext);
  const [arrAfterSort, changeArrAfterSort] = useState([]);
  const addElementToArray = (input) => {
    if(input.value!=='') {
      changeArr([...arr, +input.value]);
      input.value = "";
      input.focus();
    }
  }
  return (
    <div className="main-field">
      <h1 id="sorting-method">{currentAlgorithm.name} Sort</h1>
      <div className="input-center">
        <p>Array input</p>
        <input
          autoFocus
          type="number"
          id="number"
          ref={input}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addElementToArray(input.current)
            }
          }}
        />
        <button
          onClick={() => {
            addElementToArray(input.current)
          }}
        >
          Add
        </button>
        <button
          onClick={() => {
            changeArr([]);
            changeArrAfterSort([])
          }}
        >
          Delete
        </button>
        <button
          onClick={() => {
            console.log(arr);
            const sortedArr = currentAlgorithm([...arr]);
            changeArrAfterSort(sortedArr);
            console.log(sortedArr);
          }}
        >
          Sort
        </button>
      </div>
      <div className="output-center">
        <h5>Array before sorting</h5>
        <p>{arr.length ? arr.toString() : "N/A"}</p>
        <h5>Array after sorting</h5>
        <p>{arrAfterSort.length ? arrAfterSort.toString() : "N/A"}</p>
      </div>
    </div>
  );
};

export default MainField;
