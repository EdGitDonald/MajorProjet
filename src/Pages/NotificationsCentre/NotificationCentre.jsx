import React, { useState } from 'react';
import './NotificationCentre.css';

function NotificationCentre({ draftedMessages }) {
  const [clickedMessage, setClickedMessage] = useState(null);

  // Function to handle message click event
  const handleMessageClick = (message) => {
    setClickedMessage(message);
  };

  return (
    <div className='NotificationCentre'>
      <div className='Table-container'>
        <table>
          <thead>
            <tr>
              <th>Urgency</th>
            </tr>
            <tr>
              <th>Red</th>
              <th>Yellow</th>
              <th>Green</th>
            </tr>  
          </thead>
          <tbody>
            <tr>
              <td>
                {draftedMessages
                  .filter((message) => message.urgency === 'red')
                  .map((message, index) => (
                    <div key={index} className='message-widget' onClick={() => handleMessageClick(message.message)}>
                      <p>{message.contact.name} : {message.message} </p>
                    </div>
                  ))}
              </td>
              <td>
                {draftedMessages
                  .filter((message) => message.urgency === 'yellow')
                  .map((message, index) => (
                    <div key={index} className='message-widget' onClick={() => handleMessageClick(message.message)}>
                      <p>{message.contact.name} : {message.message} </p>
                    </div>
                  ))}
              </td>
              <td>
                {draftedMessages
                  .filter((message) => message.urgency === 'green')
                  .map((message, index) => (
                    <div key={index} className='message-widget' onClick={() => handleMessageClick(message.message)}>
                      <p>{message.contact.name} : {message.message} </p>
                    </div>
                  ))}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <p>Response centre</p>
        <div className="clicked-message">
          {/* Render the clicked message */}
          {clickedMessage && <div>{clickedMessage}</div>}
        </div>
      </div>
    </div>
  );
}

export default NotificationCentre;


