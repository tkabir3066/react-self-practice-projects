import React, { useState } from "react";
import styles from "./calculator.module.css";
function BasicCalculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  const handleClick = (value) => {
    setInput(input + value);
  };
  const handleClear = () => {
    setInput("");
    setResult(0);
  };
  const handleCalculate = () => {
    try {
      setResult(eval(input));
    } catch (err) {
      setResult("Error");
    }
  };
  return (
    <div className={styles.box}>
      <h1>Basic Calculator</h1>
      <div className={styles.calculator}>
        <input className={styles.input} type="text" value={input} readOnly />
        <div className="result">Result: {result}</div>
        <div className={styles.buttons}>
          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("2")}>2</button>
          <button onClick={() => handleClick("3")}>3</button>
          <button onClick={() => handleClick("+")}>+</button>
          <button onClick={() => handleClick("4")}>4</button>
          <button onClick={() => handleClick("5")}>5</button>
          <button onClick={() => handleClick("6")}>6</button>
          <button onClick={() => handleClick("-")}>-</button>
          <button onClick={() => handleClick("7")}>7</button>
          <button onClick={() => handleClick("8")}>8</button>
          <button onClick={() => handleClick("9")}>9</button>
          <button onClick={() => handleClick("*")}>*</button>
          <button onClick={() => handleClick("0")}>0</button>
          <button onClick={() => handleClick(".")}>.</button>
          <button onClick={handleClear}>C</button>
          <button onClick={() => handleClick("/")}>/</button>
          <button onClick={handleCalculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default BasicCalculator;
