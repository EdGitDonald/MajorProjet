import React, { useState, useRef } from 'react';
import { TiDelete } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';
import './Notifications.css';

function Notifications({ draftedMessages, removeNotification, urgencyFilter, handleUrgencyFilterChange }) {
  const notificationsRef = useRef(null);
  
  const navigate = useNavigate()
  

  const handleFlagClick = (urgency) => {
    setSelectedUrgency(urgency);
  };

  const handleShowAll = () => {
    setSelectedUrgency(null);
  };

  const handleRemoveNotification = (index) => {
    // Call the removeNotification function from the parent component
    removeNotification(index);
  };

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case 'red':
        return '#b21f1a';
      case 'yellow':
        return '#ecd100';
      case 'green':
        return '#008f00';
      default:
        return '#000'; // Default color
    }
  };

  const handleMouseDown = (event) => {
    setIsDragging(true);
    const notificationsRect = notificationsRef.current.getBoundingClientRect();
    setDragOffset({
      x: event.clientX - notificationsRect.left,
      y: event.clientY - notificationsRect.top
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  

  return (
    <div className='Notifications'>
      <div className='Notifications-container'>
        <h2>Notifications</h2>
        <p onClick={() => {navigate('/NotificationCentre')}}>Expand</p>
        
        <nav className='Flag-container'>
         {/* <p onClick={() => handleUrgencyFilterChange(null)}>ALL</p> */}
          
          <p onClick={() => handleUrgencyFilterChange('red')}>RED</p>
          <div className='urgency-red'></div>
          
          <p onClick={() => handleUrgencyFilterChange('yellow')}>YELLOW</p>
          <div className='urgency-yellow'></div>
          
          <p onClick={() => handleUrgencyFilterChange('green')}>GREEN</p>
          <div className='urgency-green'></div>
        </nav>
      </div>

      {/* Display the drafted messages */}
      <div className='Drafted-messages'>
      
        <ul>
          {draftedMessages
            .filter((message) => !urgencyFilter || message.urgency === urgencyFilter)
            .map((message, index) => (
              <li key={index} className={`urgent-${message.urgency}`}>
                <div className='message-header'>
                  <div className="urgency-box" style={{ backgroundColor: getUrgencyColor(message.urgency) }}></div>
                  <button onClick={() => handleRemoveNotification(index)}>
                    <TiDelete />
                  </button>
                </div>
                <div className="message-content">
                  <p>From: {message.contact.name} : {message.message}</p>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Notifications;

