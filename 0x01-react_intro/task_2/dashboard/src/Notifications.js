import React from 'react';
import './Notifications.css';
import icon from './close-icon.png';
import { getLatestNotification } from './utils';

function Notifications() {
  return (
    <div className='Notifications'>
      <button
        style={{
          position: 'relative',
          width: '100%',
          border: 'none',
          background: 'none',
          textAlign: 'right',
          padding: '0',
        }}
        aria-label='Close'
        onClick={console.log('Close button has been clicked')}
      >
        <img
          src={icon}
          alt='Close'
          styles={{
            width: '2em',
            height: '0.1rem',
          }}
        />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data='default'>New course available</li>
        <li data='urgent'>New resume available</li>
        <li
          data='urgent'
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        ></li>
      </ul>
    </div>
  );
}

export default Notifications;
