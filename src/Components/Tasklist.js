import React, { useState } from "react";
import "./Tasklist.css";

function Tasklist() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingText, setEditingText] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const Complete = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const startEditing = (index) => {
    setEditingIndex(index);
    setEditingText(tasks[index].text);
  };

  const saveEdit = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, text: editingText } : task
      )
    );
    setEditingIndex(null);
    setEditingText("");
  };

  const filteredTasks = tasks.filter((task) =>
    filter === "completed" ? task.completed : filter === "incomplete" ? !task.completed : true
  );

  return (
    <div className="task-container">
      <h1>Task List</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter a new task"
        className="task-input"
      />
      <button onClick={addTask} className="add-task-btn">Add Task</button>

      <div className="filter-buttons">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
        <button onClick={() => setFilter("incomplete")}>Incomplete</button>
      </div>

      <ul className="task-list">
        {filteredTasks.map((task, index) => (
          <li key={index} className={`task-item ${task.completed ? "completed" : ""}`}>
            {editingIndex === index ? (
              <>
                <input
                  type="text"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                  className="edit-input"
                />
                <button onClick={() => saveEdit(index)} className="save-btn">Save</button>
                <button onClick={() => setEditingIndex(null)} className="cancel-btn">Cancel</button>
              </>
            ) : (
              <>
                <span onClick={() => startEditing(index)} className="task-text">
                  {task.text}
                </span>
                <button onClick={() => Complete(index)} className="complete-btn">
                  {task.completed ? "Undo" : "Complete"}
                </button>
                <button onClick={() => deleteTask(index)} className="delete-btn">Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasklist;
