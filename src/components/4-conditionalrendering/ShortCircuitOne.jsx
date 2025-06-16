import { useState } from "react";

const ShortCircuitOne = () => {
  const [text, setText] = useState("");
  const [name, setName] = useState("Marusoft Academy");

  return (
    <div>
      <h1>ShortCircuitOne</h1>
      <div>
        <h4>Falsy OR: {text || "Hello World"}</h4>
        <h4>Falsy AND: {text && "Hello World"}</h4>
        <h4>Truthy OR: {name || "Hello World"}</h4>
        <h4>Truthy AND: {name && "Hello World"}</h4>
      </div>
    </div>
  );
};
export default ShortCircuitOne;
