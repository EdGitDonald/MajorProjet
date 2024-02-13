import React, { useState, useRef } from 'react';
import { TiDelete } from "react-icons/ti";
import './Notifications.css';

function Notifications({ draftedMessages, removeNotification, urgencyFilter, handleUrgencyFilterChange }) {
  const [selectedUrgency, setSelectedUrgency] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const notificationsRef = useRef(null);

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

  const handleMouseMove = (event) => {
    if (isDragging) {
      const newX = event.clientX - dragOffset.x;
      const newY = event.clientY - dragOffset.y;
      notificationsRef.current.style.left = `${newX}px`;
      notificationsRef.current.style.top = `${newY}px`;
    }
  };

  return (
    <div
      ref={notificationsRef}
      className='Notifications'
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <div className='Notifications-container'>
        <h2>Notifications</h2>
        
        <nav className='Flag-container'>
          <p onClick={() => handleUrgencyFilterChange(null)}>ALL</p>
          <p onClick={() => handleUrgencyFilterChange('red')}>RED</p>
          <p onClick={() => handleUrgencyFilterChange('yellow')}>YELLOW</p>
          <p onClick={() => handleUrgencyFilterChange('green')}>GREEN</p>
        </nav>
      </div>

      {/* Display the drafted messages */}
      <div className='Drafted-messages'>
        <h3>Drafted Messages</h3>
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


