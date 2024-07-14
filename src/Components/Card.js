import axios from 'axios';

function Card({ values, color, inboxToggle, getChatHead, getChatBody, mobileSwitch }) {

  // contact thumbnails 
  const nameParts = values.creator.name ? values.creator.name.split(' ') : [];
  const firstLetter = nameParts[0] ? nameParts[0].charAt(0).toUpperCase() : 'T';
  const secondLetter = nameParts[1] ? nameParts[1].charAt(0).toUpperCase() : 'U';
  const thumbNail = firstLetter + secondLetter;

  // date/time 
  const createdAt = new Date(values.created_at);
  const time = createdAt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  //  send over chat body 
  async function onDivClick() {
    try {
      inboxToggle(true);
      getChatHead(values, color);
      const res = await axios.get(`https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${values.id}`);
      getChatBody(res.data.data);
      mobileSwitch(true, false);
    } catch (error) {
      console.error('Error fetching chat messages:', error);
    }
  }

  return (
    <div onClick={onDivClick} className='chat-card'>
      <div className='chat-icon'>
        <div className='chat-thumbnail' style={{ backgroundColor: color }}>{thumbNail}</div>
      </div>
      <div className='chat-content'>
        <p>
          <strong className='chat-sender'>{values.creator.name ? values.creator.name : "Telegram User"}</strong>
          <br />
          <span className='chat-message'>New Messages</span>
        </p>
      </div>
      <div className='chat-extras'>
        <div className='chat-time'><p>{time}</p></div>
        <div className='chat-unread-count'><p className='message-count'>{values.msg_count}</p></div>
      </div>
    </div>
  )
}

export default Card;
