import React from 'react'
import './Notifications.css'

function Notifications() {
  return (
    <div className='Notifications'>
        <div className='Notifications-container'>
            <h2>Notifications</h2>
            <button>Add Flag</button>
            <nav className='Flag-container'>
                <p>RED</p>
                <p>YELLOW</p>
                <p>GREEN</p>

            </nav>

        </div>
        
    </div>
  )
}

export default Notifications