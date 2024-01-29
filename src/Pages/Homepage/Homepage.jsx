import React, {useState} from 'react'
import './Homepage.css'
import Header from '../../Components/Header/Header'
import Tasktracker from '../../Components/Tasktracker/Tasktracker'
import Notifications from '../../Components/Notifications/Notifications'
import Calendar from '../../Components/Calendar/Calendar'
import Contacts from '../../Components/Contacts/Contacts'

function Homepage() {
    const [draftedMessages, setDraftedMessages] = useState([]);

    const updateDraftedMessages = (message) => {
        console.log('Received drafted message:', message);
        setDraftedMessages((prevMessages) => [...prevMessages, message]);
      };

      const removeNotification = (index) => {
        // Implement logic to remove the notification at the specified index
        setDraftedMessages((prevMessages) => [
          ...prevMessages.slice(0, index),
          ...prevMessages.slice(index + 1),
        ]);
      };

  return (
    <div className='Homepage-container'>
    <Header />
    <div className='Homepage-display'>
        <Tasktracker />
        <Calendar  />
        <Contacts updateDraftedMessages={updateDraftedMessages}/> 
        <Notifications draftedMessages={draftedMessages} removeNotification={removeNotification} /> 
        
    </div>
  </div>
  )
}

export default Homepage