import React, {useState} from 'react'
import './Homepage.css'
import Header from '../../Components/Header/Header'
import Tasktracker from '../../Components/Tasktracker/Tasktracker'
import Notifications from '../../Components/Notifications/Notifications'
import Calendar from '../../Components/Calendar/Calendar'
import Contacts from '../../Components/Contacts/Contacts'

function Homepage() {

  return (
    <>
    <Header />
    <div className='Homepage-container'>
       <Contacts />
       <Notifications />
       <Calendar />
       <Tasktracker/>
    </div>
    </>
  )
}

export default Homepage