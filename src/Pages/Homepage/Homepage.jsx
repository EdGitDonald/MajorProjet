// Homepage.jsx
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
  const [taskTitlesByDate, setTaskTitlesByDate] = useState({});

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

  const onDateSelect = (date, dueDate, taskTitle) => {
    console.log('Selected date:', date);
    console.log('Due date:', dueDate);
    console.log('Task title:', taskTitle);

    setTaskTitlesByDate((prevTitles) => ({
      ...prevTitles,
      [dueDate]: [...(prevTitles[dueDate] || []), taskTitle],
    }));
  };

  return (
    <div className='Homepage-container'>
    
      <div className='Homepage-display'>
        <Tasktracker
          onDueDateSelect={(date, title, task) => {
            setSelectedDueDate(date);
            setCurrentTask(task);
            setNewTaskTitle(title);
            setTaskTitlesByDate((prevTitles) => ({
              ...prevTitles,
              [date]: title,
            }));
          }}
        />
        <div className='Centre-container'>
        <Header />
        <Notifications draftedMessages={draftedMessages} removeNotification={removeNotification} />
        <Calendar
          selectedDueDate={selectedDueDate}
          onDateSelect={onDateSelect}
          task={currentTask}
          newTaskTitle={newTaskTitle}
          taskTitlesByDate={taskTitlesByDate}
        />
        
        </div>
        <Contacts updateDraftedMessages={updateDraftedMessages} />
        
      </div>
    </div>
  );
}

export default Homepage;



