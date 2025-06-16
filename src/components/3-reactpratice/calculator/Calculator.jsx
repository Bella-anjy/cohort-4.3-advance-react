import React, { useState } from "react";
import styles from "./calculator.module.css";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleEqual = () => {
    try {
      // eslint-disable-next-line no-eval
      const res = eval(input);
      setResult(res);
    } catch {
      setResult("Error");
    }
  };

  const buttons = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
  ];

  return (
    <div className={styles.calculator}>
      <h2>Calculator</h2>
      <div className={styles.display}>
        <input
          type="text"
          value={input}
          readOnly
          placeholder="0"
          className={styles.input}
        />
        <div className={styles.result}>{result !== "" && `= ${result}`}</div>
      </div>

      <div className={styles.buttons}>
        <button className={styles.clear} onClick={handleClear}>
          C
        </button>
        {buttons.map((btn, index) => (
          <button
            key={index}
            className={styles.button}
            onClick={() =>
              btn === "=" ? handleEqual() : handleButtonClick(btn)
            }
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
