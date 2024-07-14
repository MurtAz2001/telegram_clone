import React from 'react'
import Message from './Message'

function Home({ showInbox, inboxToggle, chatHeadData, chatBodyData, chatHeadColor, returnMobileSwitch }) {
  return (
    <div className="homeDiv">
      {showInbox ?
        <Message
          inboxToggle={inboxToggle}
          chatHeadData={chatHeadData}
          chatHeadColor={chatHeadColor}
          chatBodyData={chatBodyData}
          returnMobileSwitch={returnMobileSwitch}
        />
        : <div className='homeMessage'>Select a chat to start messaging</div>}
    </div>
  )
}
export default Home
