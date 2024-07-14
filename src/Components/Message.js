import React, { useEffect, useRef, useState } from 'react';
import MessageHeader from './MessageHeader';
import MessageFooter from './MessageFooter';

function Message({ inboxToggle, chatHeadData, chatBodyData, chatHeadColor, returnMobileSwitch }) {
  const [chatHovering, setChatHovering] = useState(false);

  // end of chat scroll
  const scrollRef = useRef(null);
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [chatBodyData]);

  const renderer = chatBodyData.map((vals, index) => {
    // chat time 
    const createdAt = new Date(vals.created_at);
    const time = createdAt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // chat logo
    const nameParts = vals.sender.name ? vals.sender.name.split(' ') : [];
    const firstLetter = nameParts[0] ? nameParts[0].charAt(0).toUpperCase() : 'T';
    const secondLetter = nameParts[1] ? nameParts[1].charAt(0).toUpperCase() : 'U';
    const thumbNail = firstLetter + secondLetter;

    return (
      <div className='chat-message' key={index}>
        <div style={{ backgroundColor: chatHeadColor }} className='chat-thumbnail'>{thumbNail}</div>
        <div className='chat-main'>
          <div style={{ color: chatHeadColor }} className='chat-user'>{vals.sender.name ? vals.sender.name : "Telegram User"}</div>
          <div className='user-text'>{vals.message}</div>
          <div className='chat-time'>{time}</div>
        </div>
      </div>
    );
  });

  return (
    <div className='chat-container' ref={scrollRef} onMouseEnter={() => setChatHovering(true)}
      onMouseLeave={() => setChatHovering(!chatHovering)} >
      <MessageHeader
        inboxToggle={inboxToggle}
        chatHeadData={chatHeadData}
        chatHeadColor={chatHeadColor}
        returnMobileSwitch={returnMobileSwitch}
      />
      <div className='hover-date'><div className={chatHovering ? 'date-wrapper' : 'date-wrapper-hidden'}>july 4</div></div>
      <div className='inbox-main'>{renderer}</div>
      <MessageFooter />
    </div>
  );
}

export default Message;
