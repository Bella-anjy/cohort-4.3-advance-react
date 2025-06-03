import { useState } from "react";

/**
 * useState()
 * Returns a stateful value, and a function to update it.
 * in another word, it returns an array with two elements
 * (1). the current value
 * (2). and function to update the current value.
 * score = > default value or the current value.
 * setScore = > a function to update default value.
 * state update triggers a re-render
 * @returns
 */

const Score = () => {
  const [score, setScore] = useState(0);

  const addScore = () => {
    setScore((prevScore) => prevScore + 1);
  };

  const resetScore = () => {
    setScore(0);
  };

  const removeScore = () => {
    setScore((prevScore) => prevScore - 1);
  };

  return (
    <div>
      <h2>Score</h2>
      <p>{score} points</p>
      <button onClick={addScore}>Add Score</button>
      <button onClick={resetScore}>Reset Score</button>
      <button onClick={removeScore}>Remove Score</button>
    </div>
  );
};
export default Score;
