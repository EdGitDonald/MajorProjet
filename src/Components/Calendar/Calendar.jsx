import React from 'react'
import './Calendar.css'

function Calendar() {
  return (
    <div className='Calendar'>
        <h2>Calendar</h2>
      <div className='Week-container'>
         <div className='Day'>
            <p>Monday</p>
         </div>
         <div className='Day'>
            <p>Tuesday</p>
         </div>
         <div className='Day'>
            <p>Wednesday</p>
         </div>
         <div className='Day'>
            <p>Thursday</p>
         </div>
         <div className='Day'>
            <p>Friday</p>
         </div>
      </div>
    </div>
  )
}

export default Calendar