import React, { useState } from 'react';
import { IoPeopleCircleOutline, IoMoon, IoPersonCircleOutline, IoMegaphoneOutline, IoBookmarkOutline, IoCallOutline, IoSettingsOutline } from "react-icons/io5";
import { MdWbSunny } from "react-icons/md";

function SideBar({ isOpen, toggleTheme }) {
    const [toggleLight, setToggleLight] = useState(null);
    function onSunClick() {
        setToggleLight(false);
        toggleTheme();
    }
    function onMoonClick() {
        setToggleLight(true);
        toggleTheme();
    }
    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <div className='user-profile'>
                <div className='user-profile-inner'>
                    <div className='sidebar-profile'>M</div>
                    <div>{toggleLight ? <MdWbSunny onClick={onSunClick} /> : <IoMoon onClick={onMoonClick} />}</div>
                </div>
                <div className='profile-name'>Murtaza Bilwaniwala</div>
                <div className='profile-extras'>Set Emoji Status</div>
            </div>
            <hr />
            <div className='profile-navigation'>
                <div><IoPeopleCircleOutline />New Group</div>
                <div><IoMegaphoneOutline />New Channel</div>
                <div><IoPersonCircleOutline />Contacts</div>
                <div><IoBookmarkOutline />Saved Messages</div>
                <div><IoCallOutline />Calls</div>
                <div><IoSettingsOutline />Settings</div>
            </div>
        </div>
    );
}

export default SideBar;
