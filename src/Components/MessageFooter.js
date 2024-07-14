import React, { useState } from 'react';
import { FiPaperclip } from "react-icons/fi";
import { BsEmojiSmile, BsMic } from "react-icons/bs";
import { RiSendPlane2Fill } from "react-icons/ri";

function MessageFooter() {
  const [showSend, setShowSend] = useState(false);
  const [inboxInput, setInboxInput] = useState("");

  function onInboxInp(e) {
    const value = e.target.value;
    setInboxInput(value);
    if (value.trim() !== "") {
      setShowSend(true);
    } else {
      setShowSend(false);
    }
  }

  return (
    <div className='chat-footer'>
      <div className='footer-attach'><FiPaperclip /></div>
      <div className='footer-type'>
        <input
          onChange={onInboxInp}
          className="footer-input"
          id="inp1"
          value={inboxInput}
          type="text"
          placeholder="Write a message..."
          autoFocus
        />
      </div>
      <div className='footer-icons'>
        <div><BsEmojiSmile /></div>
        {showSend ? <div className='send-icon'><RiSendPlane2Fill /></div> : <div><BsMic /></div>}
      </div>
    </div>
  );
}

export default MessageFooter;
