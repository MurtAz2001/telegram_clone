import React from 'react';
import { FiArrowLeft, FiSearch, FiPhone, FiMoreVertical } from "react-icons/fi";

function MessageHeader({ inboxToggle, chatHeadData, chatHeadColor, returnMobileSwitch }) {
    const nameParts = chatHeadData.creator.name ? chatHeadData.creator.name.split(' ') : [];
    const firstLetter = nameParts[0] ? nameParts[0].charAt(0).toUpperCase() : 'T';
    const secondLetter = nameParts[1] ? nameParts[1].charAt(0).toUpperCase() : 'U';
    const inboxThumbNail = firstLetter + secondLetter;

    function onBackClick() {
        returnMobileSwitch();
        inboxToggle(false);
    }

    return (
        <div className='chat-header'>
            <div className='header-left'>
                <div className='header-left-back' onClick={onBackClick}><FiArrowLeft /></div>
                <div style={{ backgroundColor: chatHeadColor }} className='chat-thumbnail'>{inboxThumbNail}</div>
                <div className='user-details'>
                    <div className='user-name'>{chatHeadData.creator.name ? chatHeadData.creator.name : "Telegram User"}</div>
                    <div className='last-seen'>Last seen recently</div>
                </div>
            </div>
            <div className='header-right'>
                <div><FiSearch /></div>
                <div><FiPhone /></div>
                <div><FiMoreVertical /></div>
            </div>
        </div>
    );
}

export default MessageHeader;
