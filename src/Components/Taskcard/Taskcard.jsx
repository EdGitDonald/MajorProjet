import React, { useState } from 'react'
import './Taskcard.css'

function Taskcard() {
    // progress and setprogress state max progress at 100 and when progress increases by number 
  const [progress, setProgress] = useState(0);
  const handleButtonClick = () => {
    if (progress < 100){
        setProgress(progress + 10);
        // change number for progression increase
    }
  }

  const handleButtonReset = () => {
    setProgress(0);
  };

  const getColor = () => {
    if(progress < 40){
        return "#ff0000"
    } else if (progress < 70){
        return "#ffa500"
    } else {
        return "#2ecc71";
    }
  };

  return (
   <div className='task-container'>
    <div className='progress-bar'>
        <div className='progress-bar-fill' style={{ width : `${progress}%`, backgroundColor: getColor()}}>
        {" "}
        </div>
    </div>
    <div className='progress-label'>{progress}%</div>
    <button onClick={handleButtonClick} className='progress-button'>Progress</button>
    {/*Progresses bar in 20% stages till 100% use button below to reset, Handle is located above the return*/}
    <button onClick={handleButtonReset} className='progress-button'>Reset</button>
    

   </div>
  )
}

export default Taskcard