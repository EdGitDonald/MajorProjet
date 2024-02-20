import React, { useState } from 'react'
import './TaskManager.css'
import SingleTask from '../../Components/SingleTask/SingleTask'


function TaskManager({ tasks }) {
    return (
      <div>
        <div className='Taskmanager-list'>
          <h2>Stored Tasks</h2>
          {tasks.map((task, index) => (
            <SingleTask key={index} task={task} />
          ))}
        </div>
      </div>
    );
  }

export default TaskManager