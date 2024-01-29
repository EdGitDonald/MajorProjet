import React, { useState } from 'react';
import './Notifications.css';

function Notifications({ draftedMessages, removeNotification }) {
  const handleRemoveNotification = (index) => {
    // Call the removeNotification function from the parent component
    removeNotification(index);
  };

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

      {/* Display the drafted messages */}
      <div className='Drafted-messages'>
        <h3>Drafted Messages</h3>
        <ul>
          {draftedMessages.map((message, index) => (
            <li key={index}>
              <p>Contact: {message.contact.name}</p>
              <p>Message: {message.message}</p>
              <button onClick={() => handleRemoveNotification(index)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Notifications;
