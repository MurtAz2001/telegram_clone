import React from 'react';
import Card from './Card';

function Chats({ chats, inboxToggle, getChatHead, getChatBody, mobileSwitch }) {
    const colorsArray = [
        '#FF6F61', // Coral
        '#6B5B93', // Lavender
        '#88B04B', // Green
        '#F7CAC9', // Pink
        '#92A8D1', // Blue
        '#955251', // Burgundy
        '#E6B33D', // Gold
        '#B1B1B1', // Grey
        '#6D9DC5', // Light Blue
        '#D9BF77'  // Beige
      ];
      

  return (
    <div className='chats-container'>
      {chats.map((val, index) => (
        <Card
          key={index}
          values={val}
          color={colorsArray[index % colorsArray.length]}
          inboxToggle={inboxToggle}
          getChatHead={getChatHead}
          getChatBody={getChatBody}
          mobileSwitch={mobileSwitch}
        />
      ))}
    </div>
  );
}

export default Chats;
