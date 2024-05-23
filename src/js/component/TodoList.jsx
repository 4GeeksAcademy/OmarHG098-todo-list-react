import React, { useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  function addTask(event) {
    // setTasks([...tasks, ]);
    if (event.key === "Enter") { 
    console.log(event.target.value)
    setTasks([...tasks, task])
}
  }

  return (
    <div className="container">
      <div className="card" style={{width: "18rem"}}>
      <input type="text" placeholder="What's next?" onKeyDown={(event) => addTask(event)} onChange={(event) => setTask(event.target.value)}/>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{tasks}</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
