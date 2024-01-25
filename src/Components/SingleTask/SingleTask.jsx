import React, { useState, useEffect } from 'react';
import './SingleTask.css'; // Import the CSS file for styling

function SingleTask({ task, onRemove, onCheckboxClick }) {
    // Access progress from the task object
    const [progress, setProgress] = useState(task.progress || 0);
  
    useEffect(() => {
      const totalSteps = task.steps.length;
      const completedSteps = task.steps.filter((step) => step.completed).length;
      const updatedProgress = totalSteps > 0 ? (completedSteps / totalSteps) * 100 : 0;
  
      setProgress(updatedProgress);
    }, [task]);
  
    const handleRemoveClick = () => {
      // Notify the parent (Tasktracker) to remove this task
      onRemove(task);
    };
  
    const handleCheckboxClick = (index) => {
      setProgress((prevProgress) => {
        const updatedSteps = [...task.steps];
        updatedSteps[index] = { ...updatedSteps[index], completed: !updatedSteps[index].completed };
  
        // Update progress based on completed steps
        const completedSteps = updatedSteps.filter((step) => step.completed).length;
        const totalSteps = updatedSteps.length;
        const updatedProgress = totalSteps > 0 ? (completedSteps / totalSteps) * 100 : 0;
  
        // Update the task object with the modified steps
        const updatedTask = { ...task, steps: updatedSteps };
  
        // Notify the parent (Tasktracker) to update the task in the tasks array
        onCheckboxClick(updatedTask);
  
        return updatedProgress;
      });
    };
  
    const getColor = (progress) => {
      if (progress < 40) {
        return "#ff0000";
      } else if (progress < 70) {
        return "#ffa500";
      } else {
        return "#2ecc71";
      }
    };
  
    return (
        <div className="single-task">
          <h3>{task.title}</h3>
          {/* Progress bar */}
          <div className="progress-bar">
            <div className="progress-bar-fill" style={{ width: `${progress}%`, backgroundColor: getColor(progress) }}></div>
          </div>
          {/* Steps */}
          {task.steps.map((step, index) => (
            <div className="step" key={index}>
              <input type="checkbox" checked={step.completed} onChange={() => handleCheckboxClick(index)} />
              <span>{step.taskName}</span>
            </div>
          ))}
          <button onClick={handleRemoveClick}>Remove Task</button>
        </div>
      );
    }

export default SingleTask;