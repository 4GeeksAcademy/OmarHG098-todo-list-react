import React, { useState } from "react";

const TodoList = () => {
  const [tasksArray, setTasksArray] = useState([]);
  const [task, setTask] = useState("");

  function addTask(event) {
    // setTasksArray([...tasks, ]);
    if (event.key === "Enter") {
      setTask(event.target.value);
      setTasksArray([...tasksArray, task]);
    }
  }

  function deleteTask(id) {
    // const newArray = tasksArray.filter((task, index) => {
    //   if (index !== id) {
    //     return task;
    //   }
    // });
    const eraseTask = tasksArray.filter((task, index) => index !== id);
    setTasksArray(eraseTask);
  
    
  }

  return (
    <div className="container-flex align-items-center">
      <div className="pt-2 fs-1 text-secondary">todos</div>
      <div className="card mt-3 mx-auto p-1" style={{ width: "30rem" }}>
        <input
          className="form-control"
          type="text"
          placeholder="What's next?"
          onKeyDown={(event) => addTask(event)}
          onChange={(event) => setTask(event.target.value)}
          value={task}
        />
        <ul className="list-group d-flex justify-content-around my-1">
          {tasksArray.map((task, id) => {
            return (
              <li className="list-group-item d-flex justify-content-between px-3 tarea" key={`task-${id}`}>
                {task}
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-sm border-0 hide"
                  onClick={() => deleteTask(id)}
                >
                  x
                </button>
              </li>
            );
          })}
          <div className="my-1" key={"items-left"}>
            {tasksArray.length > 0 ? `${tasksArray.length} items left` : "No tasks left"} 
          </div>
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
