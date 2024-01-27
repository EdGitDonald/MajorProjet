import React, {useState} from 'react'
import './Homepage.css'
import Header from '../../Components/Header/Header'
import Tasktracker from '../../Components/Tasktracker/Tasktracker'
import Notifications from '../../Components/Notifications/Notifications'
import Calendar from '../../Components/Calendar/Calendar'
import Contacts from '../../Components/Contacts/Contacts'

function Homepage() {

  return (
    <div className='Homepage-container'>
    <Header />
    <div className='Homepage-display'>
        <Contacts />
        <Notifications />
        <Calendar />
        <Tasktracker />
    </div>
  </div>
  )
}

export default Homepage