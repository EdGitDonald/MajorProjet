import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Homepage.css';
import Header from '../../Components/Header/Header';
import Tasktracker from '../../Components/Tasktracker/Tasktracker';
import Notifications from '../../Components/Notifications/Notifications';
import Calendar from '../../Components/Calendar/Calendar';
import Contacts from '../../Components/Contacts/Contacts';
import Emails from '../../Components/Emails/Emails';
import TeamChat from '../../Components/TeamChat/TeamChat';


function Homepage() {
  const [draftedMessages, setDraftedMessages] = useState([]);
  const [selectedDueDate, setSelectedDueDate] = useState('');
  const [currentTask, setCurrentTask] = useState(null);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [taskTitlesByDate, setTaskTitlesByDate] = useState({});
  const [urgencyFilter, setUrgencyFilter] = useState(null);

  // Function to handle urgency filter change
  const handleUrgencyFilterChange = (urgency) => {
    setUrgencyFilter(urgency);
  };

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

  const onDateSelect = (date, selectedDueDate, newTaskTitle, taskTitles) => {
    console.log('Selected date:', date);
    console.log('Selected due date:', selectedDueDate);
    console.log('New task title:', newTaskTitle);
    console.log('Task titles:', taskTitles);
    
    // Update taskTitlesByDate with the new task title
    const formattedDate = formatDate(date, 'yyyy-MM-dd');
    setTaskTitlesByDate((prevTitles) => ({
      ...prevTitles,
      [formattedDate]: [...(prevTitles[formattedDate] || []), newTaskTitle],
    }));
    
    // Update selectedDueDate and currentTask
    setSelectedDueDate(selectedDueDate);
    setCurrentTask(currentTask);
    setNewTaskTitle(newTaskTitle);
  };

  return (
    <div className='Homepage-container'>
       <div className='Homepage-display'>
        <div className='Homepage-left'>
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
        <Calendar
          selectedDueDate={selectedDueDate}
          onDateSelect={onDateSelect}
          newTaskTitle={newTaskTitle}
          taskTitlesByDate={taskTitlesByDate}
        />
        </div>
        <div className='Homepage-right'>
        <Notifications draftedMessages={draftedMessages} removeNotification={removeNotification} urgencyFilter={urgencyFilter} handleUrgencyFilterChange={handleUrgencyFilterChange} />
        <Contacts updateDraftedMessages={updateDraftedMessages} /> 
        <Emails/>
        <TeamChat />
        
        </div>
      </div>
    </div>
  );
}

export default Homepage;

