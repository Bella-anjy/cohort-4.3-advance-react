import { useState, useEffect } from "react";
import styles from "./todo.module.css";

const ToDoUrl = "https://jsonplaceholder.typicode.com/todos";


const ToDo = () => {
  const [todos, setTodos] = useState([]);
  // console.log("Todos:", todos);
  const slicedTodos = todos.slice(0, 30); // Slicing the first 30 todos for display


  // Fetching todos from the API
  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch(ToDoUrl);
      const data = await response.json();
      setTodos(data);
    };
    fetchTodos();
  }, []);
  if (todos.length === 0) {
    return <div className={styles.loading}>Loading...</div>;
  }
  return (
    <div className={styles.todosContainer}>
      {slicedTodos.map((todo) => (
        <div key={todo.id} className={styles.todo}>
          <h2>{todo.title}</h2>
          <p>Status: {todo.completed ? "Completed" : "Not Completed"}</p>
        </div>
      ))}
    </div>
  );
};
export default ToDo;
