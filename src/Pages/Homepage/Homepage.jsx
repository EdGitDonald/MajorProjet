import React, { useState } from 'react';
import './Homepage.css';
import Header from '../../Components/Header/Header';
import Tasktracker from '../../Components/Tasktracker/Tasktracker';
import Notifications from '../../Components/Notifications/Notifications';
import Calendar from '../../Components/Calendar/Calendar';
import Contacts from '../../Components/Contacts/Contacts';

function Homepage() {
  const [draftedMessages, setDraftedMessages] = useState([]);
  const [selectedDueDate, setSelectedDueDate] = useState('');
  const [currentTask, setCurrentTask] = useState(null);
  const [newTaskTitle, setNewTaskTitle] = useState(''); 

  const updateDraftedMessages = (message) => {
    console.log('Received drafted message:', message);
    setDraftedMessages((prevMessages) => [...prevMessages, message]);
  };

  const removeNotification = (index) => {
    setDraftedMessages((prevMessages) => [
      ...prevMessages.slice(0, index),
      ...prevMessages.slice(index + 1),
    ]);
  };

    // Define onDateSelect function
    const onDateSelect = (date, dueDate, title) => {
        // Handle the date selection logic
        console.log('Selected date:', date);
        console.log('Due date:', dueDate);
        console.log('Task title:', newTaskTitle);
        // Add your logic here
      };

      return (
        <div className='Homepage-container'>
          <Header />
          <div className='Homepage-display'>
            <Tasktracker onDueDateSelect={(date, title, task) => {
              setSelectedDueDate(date);
              setCurrentTask(task);
              setNewTaskTitle(newTaskTitle); // Pass the title to newTaskTitle
            }} />
            <Calendar 
            selectedDueDate={selectedDueDate} 
            onDateSelect={onDateSelect} 
            task={currentTask} 
            newTaskTitle={newTaskTitle} 
            />
            <Contacts updateDraftedMessages={updateDraftedMessages} />
            <Notifications draftedMessages={draftedMessages} removeNotification={removeNotification} />
          </div>
        </div>
      );
    }

export default Homepage;
