import React from 'react';
import './NotificationCentre.css';

function NotificationCentre({ draftedMessages }) {
  return (
    <div className='NotificationCentre'>
      <div className='Table-container'>
        <table>
          <thead>
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
                    <div key={index}>{message.message}</div>
                  ))}
              </td>
              <td>
                {draftedMessages
                  .filter((message) => message.urgency === 'yellow')
                  .map((message, index) => (
                    <div key={index}>{message.message}</div>
                  ))}
              </td>
              <td>
                {draftedMessages
                  .filter((message) => message.urgency === 'green')
                  .map((message, index) => (
                    <div key={index}>{message.message}</div>
                  ))}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <p>Response centre</p>
      </div>
    </div>
  );
}

export default NotificationCentre;

