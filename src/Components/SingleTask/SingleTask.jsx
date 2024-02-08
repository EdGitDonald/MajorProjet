import React, { useState } from 'react';
import './SingleTask.css'; // Import the CSS file
import { MdDelete } from "react-icons/md";
import { MdAdd } from "react-icons/md";

function SingleTask({ task, onRemove, onCheckboxClick }) {
  const [progress, setProgress] = useState(task.progress || 0);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleRemoveClick = () => {
    onRemove(task);
  };

  const handleCheckboxClick = (index) => {
    setProgress((prevProgress) => {
      const updatedSteps = [...task.steps];
      updatedSteps[index] = { ...updatedSteps[index], completed: !updatedSteps[index].completed };
  
      const completedSteps = updatedSteps.filter((step) => step.completed).length;
      const totalSteps = updatedSteps.length;
      const updatedProgress = totalSteps > 0 ? (completedSteps / totalSteps) * 100 : 0;
  
      const updatedTask = { ...task, steps: updatedSteps, progress: updatedProgress };
      
      // Notify the parent (Tasktracker) to update the task in the tasks array
      onCheckboxClick(updatedTask);
  
      return updatedProgress;
    });
  };

  const toggleCollapse = () => {
    setIsCollapsed((prevIsCollapsed) => !prevIsCollapsed);
  };

  const getColor = (progress) => {
    if (progress < 100) {
      return "#3498db";
    } 
  };

  return (
    <div className="single-task">
      <div className='task-title'>
        {/* Display Assigned By */}
        <p><strong>Due:</strong> {task.dueDate}</p>
        <p><strong>Assigned:</strong> {task.assignedBy}</p>
        <h3>{task.title}</h3>
      </div>

      {/* Progress bar */}
      <div className="progress-bar">
        <div className="progress-bar-fill" style={{ width: `${progress}%`, backgroundColor: getColor(progress) }}></div>
      </div>

      {/* Toggle button for collapsing/expanding steps */}
      <button className="toggle-button" onClick={toggleCollapse}>{isCollapsed ? 'Expand' : 'Collapse'}</button>

      {/* Steps - render only if not collapsed */}
      {!isCollapsed && (
        <div>
          {task.steps.map((step, index) => (
            <div className="step" key={index}>
              <label className="checkbox-container">
                <input type="checkbox" checked={step.completed} onChange={() => handleCheckboxClick(index)} />
                <span className="custom-checkbox"></span>
              </label>
              <span>{step.taskName}</span>
            </div>
          ))}
        </div>
      )}

      <button onClick={handleRemoveClick}><MdDelete /></button>
    </div>
  );
}

export default SingleTask;







