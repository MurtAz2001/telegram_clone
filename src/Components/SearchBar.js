import React from 'react';
import { FiMenu } from "react-icons/fi";

function ChatListHeader({ hamToggle }) {
  function onMenuClick() {
    hamToggle(true);
  }

  return (
    <div className='chat-list-header'>
      <div onClick={onMenuClick} className='icon-ham'><FiMenu /></div>
      <input className="input" id='search-input' type="text" placeholder="Search" />
    </div>
  );
}

export default ChatListHeader;
