import { useState, useEffect, use } from "react";
// click on button show loading statw, then after some milli second
// show a message

const ConditionTwo = () => {
  let [loading, setLoading] = useState(true);

  const handleClick = () => {
    setLoading(true);
  };

  // timer
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 6000);
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Conditional renderig Two</h2>
      <button onClick={handleClick}>Click</button>
      {loading ? <p>Loading....</p> : <p>Money sent</p>}
    </div>
  );
};
export default ConditionTwo;
