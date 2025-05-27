import  { useState } from "react";

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn((prev) => !prev);
  };

  return (
    <div>
      <button onClick={toggleSwitch} style={{backgroundColor: "red", border:"none", padding:"5px", borderRadius:"5px"}}>{isOn ? "ON" : "OFF"}</button>
      <p>Current state: {isOn ? "ON" : "OFF"}</p>
    </div>
  );
};

export default Toggle;
