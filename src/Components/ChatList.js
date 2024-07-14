import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Chats from './Chats';

function ChatList({ chats, inboxToggle, getChatHead, getChatBody, hamToggle, mobileSwitch }) {
  const [hovering, setHovering] = useState(false);
  return (
    <div className={hovering ? 'chat-list' : 'chat-list-hidden'}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(!hovering)}
    >
      <SearchBar hamToggle={hamToggle} />
      <div className="chat-list-content">
        <Chats
          chats={chats}
          inboxToggle={inboxToggle}
          getChatHead={getChatHead}
          getChatBody={getChatBody}
          mobileSwitch={mobileSwitch}
        />
      </div>
    </div>
  );
}

export default ChatList;
