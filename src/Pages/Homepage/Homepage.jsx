import React from 'react'
import './Homepage.css'
import Header from '../../Components/Header/Header'

function Homepage() {
  return (
    <div className='Homepage-container'>
        <Header />
        <div className='Contacts'>
            <p>Contacts</p>
        </div>
        <div className='Notifications'>
            <p>Notifications</p>
        </div>
        <div className='Calendar'>
            <p>Calendar</p>
        </div>
        <div className='Task-tracker'>
            <p>Task Tracker</p>
        </div>


    </div>
  )
}

export default Homepage