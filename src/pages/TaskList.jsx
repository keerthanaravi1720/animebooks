
import React from 'react';

const TaskList = ({ tasks, clearAllTasks, toggleTask }) => {
  return (
    <section id="task-container">
      <ul id="task-list" >
        {tasks.map((task, index) => (
          <li
            key={index}
            className={task.completed ? 'complete' : ''}
            onClick={() => toggleTask(index)}
          >
            <p style={{color: 'black'}}>{task.text}</p>
          </li>
        ))}
      </ul>
      <div className="text-center">
        <button
          id="clear-all-tasks"
          className="btn btn-danger m-b-0"
          type="button"
          onClick={clearAllTasks}
        >
          Clear All Tasks
        </button>
      </div>
    </section>
  );
};

export default TaskList;

