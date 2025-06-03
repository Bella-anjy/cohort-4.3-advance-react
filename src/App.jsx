import "./App.css";
import { Counter, Toggle, Form, Score, ColorPicker, ObjectExample, Product, ArrayExample } from "./components";

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
  <div>
    <Score/>
  </div>
  <div>
    <ColorPicker/>
  </div>
  <div>
    <ObjectExample/>
  </div>
  <div>
    <Product/>
  </div>
  <div>
    <ArrayExample/>
  </div>
  </>;
};

export default App;
