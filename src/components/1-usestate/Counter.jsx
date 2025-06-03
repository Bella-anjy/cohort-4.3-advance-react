import { useState } from "react";

//

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    // setCount(count + 1);
    setCount((prevCount) => prevCount + 1);
  };
  const decrement = () => {
    // setCount(count - 1);
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <>
      <div>
        <h2>Counter Illustaration with React Hook</h2>
        <p>Counter Component will be implemented here</p>
        <p>Use the useState hook to manage the counter State</p>
        <p>Implement Increment and Decrement functions</p>
        <p>Display the current count value</p>
        <p>Add buttons to trigger increment and decrement functions</p>
        <p>Ensure the counter updates correctly on button clicks</p>
      </div>

      <div>
        <button onClick={increment}>Increase Count</button>
        <p>{count}</p>
        <button onClick={decrement}>Decrease Count</button>
      </div>
    </>
  );
};
export default Counter;
