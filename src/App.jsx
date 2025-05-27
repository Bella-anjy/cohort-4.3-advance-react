import "./App.css";
import { Counter, Toggle, Form } from "./components";

const App = () => {
  return <>
  <div>
    <Counter />
  </div>
  <div style={{ marginTop: "20px" }}>
    <h2 style={{
      color: "blue",
    }}>Toggle Classwork</h2>
    <Toggle />
  </div>
  <div>
    <Form />
  </div>
  </>;
};

export default App;
