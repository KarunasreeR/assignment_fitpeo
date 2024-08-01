import React from 'react';
import Searchbar from './Searchbar';
import { LuMail } from 'react-icons/lu';
import { IoSettingsOutline,IoNotificationsOutline } from "react-icons/io5";
import pic from '../profile.png';

export default function Header() {
  return (
    <div className='header-container'>
      <div className='header-items header-searchbar'><Searchbar /></div>
      {/* <div className='header-items search-header'>
        <Searchbar />
      </div>
      <div className="icons header-items">
            
      
      </div> */}
      <div className='header-items header-icons'>
        <LuMail className="header-icon" />
        <IoSettingsOutline className="header-icon" />
        <div className="notification-wrapper">
            <IoNotificationsOutline className="header-icon notification-icon" />
            <span className="notification-dot"></span>
        </div>
        <img src={pic} className='header-icon profile-pic' alt='Profile'/>
      </div>
    </div>
  );
}
