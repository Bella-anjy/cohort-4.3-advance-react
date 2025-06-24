import "./App.css";
import {
  Counter,
  Toggle,
  Form,
  Score,
  ColorPicker,
  ObjectExample,
  Product,
  ArrayExample,
  ExampleOne,
  ExampleTwo,
  ExampleThree,
  TODOLIST,
  CART,
  ImageGallery,
  ClassPractice,
  ConditionOne,
  ConditionTwo,
  Calculator,
  Weather,
  GetPosts,
  ToDo,
  ShortCircuitOne,
  ShortCircut,
  TogglePassword,
  Auth,
  ControlledInput,
  MultipleInput,
  Task,
  OtherInput,
} from "./components/index";

const App = () => {
  return (
    <>
      <div>
        <Counter />
      </div>
      <div style={{ marginTop: "20px" }}>
        <h2
          style={{
            color: "blue",
          }}
        >
          Toggle Classwork
        </h2>
        <Toggle />
      </div>
      <div>
        <Form />
      </div>
      <div>
        <Score />
      </div>
      <div>
        <ColorPicker />
      </div>
      <div>
        <ObjectExample />
      </div>
      <div>
        <Product />
      </div>
      <div>
        <ArrayExample />
      </div>
      <div>
        <h2>UseEffect</h2>
        <ExampleOne />
      </div>
      <div>
        <ExampleTwo />
      </div>
      <div>
        <ExampleThree />
      </div>
      <div>
        <TODOLIST />
      </div>
      <div>
        <CART />
      </div>
      <div>
        <ImageGallery />
      </div>
      <div>
        <ClassPractice />
      </div>
      <div>
        <Calculator />
      </div>
      <div>
        <Weather />
      </div>
      <div>
        <h2>Conditional Rendering</h2>
        <ConditionOne />
      </div>
      <div>
        <ConditionTwo />
      </div>
      <div>
        <h2>Get Posts</h2>
        <GetPosts />
      </div>
      <div style={{ marginTop: "60px" }}>
        <h2 style={{ color: "dodgerblue" }}>To Do</h2>
        <ToDo />
      </div>
      <div>
        <ShortCircuitOne />
      </div>
      <div>
        <ShortCircut />
      </div>
      <div>
        <h1>Toggle Password</h1>
        <TogglePassword />
      </div>
      <div>
        <h1>User Challenge</h1>
        <Auth />
      </div>
      <div>
        <h1>Controlled Inputs</h1>
        <ControlledInput />
      </div>
      <div>
        <h1>Multiple Inputs</h1>
        <MultipleInput />
        </div>
        <div>
        <h1>Task</h1>
        <Task />
        </div>
        <div>
          <h2>Other Input Examples: checkbox and select</h2>
          <OtherInput />
        </div>
    </>
  );
};

export default App;
