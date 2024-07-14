import { useEffect, useState } from "react";
import axios from "axios";
import ChatList from "./Components/ChatList";
import Home from "./Components/Home"; // Changed from Main to Home
import SideBar from "./Components/SideBar";
import "./App.css"
function App() {
  const [chats, setChats] = useState([]);
  const [showInbox, setShowInbox] = useState(false);
  const [selectedChatHeads, setSelectedChatHeads] = useState(null);
  const [selectedChatHeadsColors, setSelectedChatHeadColors] = useState(null);
  const [selectedMessages, setSelectedMessages] = useState([]);
  const [showMenu, setShowMenu] = useState(false);
  const [showList, setShowList] = useState(true);
  const [showHome, setShowHome] = useState(true); // Updated variable name
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [theme, setTheme] = useState('dark');

  // chat heads retrieval 
  useEffect(() => {
    async function retriever() {
      try {
        const page1Response = await axios.get("https://devapi.beyondchats.com/api/get_all_chats?page=1");
        const page1Chats = page1Response.data.data.data;

        const page2Response = await axios.get("https://devapi.beyondchats.com/api/get_all_chats?page=2");
        const page2Chats = page2Response.data.data.data;

        const combinedChats = [...page1Chats, ...page2Chats];
        setChats(combinedChats);
      } catch (error) {
        console.error('Error fetching chats:', error);
      }
    }
    retriever();
  }, []);

  // Mobile Resize 
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth <= 768) {
      setShowHome(false);
      setShowList(true);
    } else {
      setShowHome(true);
      setShowList(true);
    }
  }, [windowWidth]);

  function mobileSwitch() {
    if (windowWidth <= 768) {
      setShowList(false);
      setShowHome(true);
    } else {
      setShowList(true);
    }
  }
  
  function returnMobileSwitch() {
    if (windowWidth <= 768) {
      setShowList(true);
      setShowHome(false);
    } else {
      setShowList(true);
    }
  }

  // theme toggler 
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  // display chatInbox 
  function inboxToggler(val) {
    setShowInbox(val);
  };

  // retrieve chat head data and colors 
  function retrieveSelectedChat(chatHead, color) {
    setSelectedChatHeads(chatHead);
    setSelectedChatHeadColors(color);
  };

  // retrieve chat bodies 
  function retrieveSelectedMessages(chatBody) {
    console.log(chatBody);
    setSelectedMessages(chatBody);
  };

  // menu toggle 
  function hamToggle(val) {
    setShowMenu(val);
  };

  return (
    <div className="appDiv">
      <SideBar isOpen={showMenu} toggleTheme={toggleTheme} />
      {showMenu && <div className={`overlay ${showMenu ? 'visible' : ''}`} onClick={() => setShowMenu(false)} />}

      {showList ?
        <ChatList
          chats={chats}
          inboxToggle={inboxToggler}
          getChatHead={retrieveSelectedChat}
          getChatBody={retrieveSelectedMessages}
          hamToggle={hamToggle}
          mobileSwitch={mobileSwitch} // Fixed spelling
        /> : null}

      {showHome ? // Updated from showMain to showHome
        <Home // Changed from Main to Home
          showInbox={showInbox}
          inboxToggle={inboxToggler}
          chatHeadData={selectedChatHeads}
          chatHeadColor={selectedChatHeadsColors}
          chatBodyData={selectedMessages}
          hamToggle={hamToggle}
          returnMobileSwitch={returnMobileSwitch}
        /> : null}
    </div>
  );
}

export default App;
