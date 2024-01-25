import React, { useState } from 'react'
import './Taskcard.css'

function Taskcard({ steps, onCheckboxClick }) {
    const totalSteps = steps.length;
    const completedSteps = steps.filter(step => step.completed).length;
    const progress = totalSteps > 0 ? (completedSteps / totalSteps) * 100 : 0;

  const getColor = () => {
    if(progress < 40){
        return "#ff0000"
    } else if (progress < 70){
        return "#ffa500"
    } else {
        return "#2ecc71";
    }
  };

  const [formData, setFormData] = useState({
    title:"",
    step1: "",
    step2: "",
    step3: "",  
  })

  return (
    <form>
        <h2>Add Task</h2>
    <div className='task-container'>
      <div className='progress-bar'>
          <div className='progress-bar-fill' style={{ width: `${progress}%`, backgroundColor: getColor() }}></div>
      </div>
          <div className='progress-label'>{Math.round(progress)}%</div>

            {/* Render tasks and checkboxes */}
            {steps.map((step, index) => (
          <div key={index}>
            <input type="checkbox" checked={step.completed} onChange={() => onCheckboxClick(index)} />
            <span>{step.taskName}</span>
          </div>
          ))}
    </div>
    </form>
  );
}

export default Taskcard