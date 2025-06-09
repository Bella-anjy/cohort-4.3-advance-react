import { useState } from "react";
import styles from "./todolist.module.css"
const TODOLIST = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTask = () => {
    if (inputValue.trim() !== "") {
      setTasks([...tasks, { text: inputValue, completed: false }]);
      setInputValue("");
    }
  };

  const toggleCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };


  return (
    <div className={styles.todoContainer}>
      <h2>To-Do List</h2>
      <div className={styles.inputGroup}>
        <input
          type="text"
          placeholder="Enter a new task..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul className={styles.taskList}>
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? "completed" : ""}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleCompletion(index)}
            />
            <span>{task.text}</span>
            <button className={styles.deleteBtn} onClick={() => removeTask(index)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TODOLIST