import "./App.css";
import { Counter, Toggle, Form, Score, ColorPicker, ObjectExample, Product, ArrayExample, ExampleOne, ExampleTwo, ExampleThree,} from "./components/index";

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
  <div>
    <h2>UseEffect</h2>
    <ExampleOne/>
  </div>
  <div>
    <ExampleTwo/>
  </div>
  <div>
  <ExampleThree/>
  </div>
  </>;
};

export default App;
