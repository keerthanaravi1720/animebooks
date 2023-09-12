import React, { useState } from 'react';

const TodoForm = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== '') {
      addTask(task);
      setTask('');
    }
  };

  return (
    <div className="form-material">
      <div className="right-icon-control">
        <form className="form-material" onSubmit={handleSubmit}>
          <div className="form-group form-primary">
            <input
              type="text"
              name="task-insert"
              className="form-control fill"
              required
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <span className="form-bar"></span>
            <label className="float-label">Create your task list</label>
          </div>
        </form>
        <div className="form-icon" >
          <button 
            className="btn btn-success btn-icon waves-effect waves-light"
            id="create-task"
            onClick={handleSubmit}
          > Create Task 
            <i className="fa fa-plus"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoForm;

