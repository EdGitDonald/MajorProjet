import React from 'react'
import './Tasktracker.css'
import Taskcard from '../TaskCard/Taskcard'

function Tasktracker() {
  return (
    <div className='Tasktracker'>
        <div className='Tasktracker-container'>
          <h2>Tasktracker</h2>
          <button>Add Task</button>
        </div>
        <div>
            <Taskcard/>
        </div>
    </div>
  )
}

export default Tasktracker