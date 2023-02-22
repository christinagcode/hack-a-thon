import React from 'react'
import '../App.css';
import logo from '../assets/hack-logo.png';
import icon from '../assets/icon-setting.png';
import { SearchBox } from 'react-instantsearch-dom';

function Navbar() {
  return (
    
    <div className="header">
      <div className="innerHeader">
        <div className="logo">
          <img className="logoimg" src={logo} />
        </div>
        <div className="title1">
          Search
        </div>
        <div className="title2">
          Hacker News
        </div>
        <div className="searchbar"></div>
        <div className="icon">
          <img className="settingIcon" src={icon} />
        </div>
        <div className="settingWord">
          Settings
        </div>
        
        
      </div>
    </div>
  )
}

export default Navbar;
