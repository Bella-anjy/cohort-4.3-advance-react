import { useEffect } from "react";
/**
 * useEffect(<cb function>, <dependency>)
 * useEffect is a hook in React that allows you to perform side effects
 * in function components. Some examples of side effects are: subscriptions,
 * fetching data, directly updating the DOM, event listeners, timers, etc.
 * Accepts a function that contains imperative, possibly effectful code.
 * @param effect — Imperative function that can return a cleanup function
 * @param deps — If present, effect will only activate if the values in
 * the list change.
 * Or
 * accepts two arguments
 * first argument - cb function
 * second argument - dependency array (optional)
 * by default runs on each render (initial and re-render)
 * if dependency array empty [] runs only on initial render
 */
const ExampleOne = () => {
  useEffect(() => {
    console.log("Hello UseEffect!");
  }, []);

  return <div>ExampleOne</div>;
};
export default ExampleOne;
