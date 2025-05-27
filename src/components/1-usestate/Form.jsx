import { useState } from "react";

const Form = (name) => {
  const [form, setForm] = useState("Hello Liya");

  const handleSubmit = (e) => {
    e.preventDefault();
    //  return `Hello ${name}`;
    setForm(form ? `Hello ${form}` : "Please enter a message");
    setForm(``);
  };
  const handleChange = (e) => {
    setForm(e.target.value);
  };

  return (
    <>
      <h2>Display Message</h2>
      <form>
      <input onChange={handleChange} type="text" placeholder="Enter Message" />
      <button onClick={handleSubmit} type="submit">
        Check Message
      </button>
      {""}
      <br />
      {form ?<p>{form}</p> : ""}
    </form>
    </>
  );
};
export default Form;
