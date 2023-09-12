
import React, { useState } from 'react';
import TaskList from './TaskList';
import TodoForm from './TodoForm';
import '../App.css';





function Task() {
    const [tasks, setTasks] = useState([]);
  
    const addTask = (text) => {
      setTasks([...tasks, { text, completed: false }]);
    };
  
    const clearAllTasks = () => {
      setTasks([]);
    };
  
    const toggleTask = (index) => {
      const updatedTasks = tasks.map((task, i) => {
        if (i === index) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });
      setTasks(updatedTasks);
    };
  
    return (
      <div className="card-block">
       
   
      
        <TodoForm addTask={addTask} />
        <TaskList tasks={tasks} clearAllTasks={clearAllTasks} toggleTask={toggleTask} />
        

        
    </div>
  );
}

export default Task;
