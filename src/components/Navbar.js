import React from 'react'
import '../App.css';
import logo from '../assets/hack-logo.png';

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
      </div>
    </div>
  )
}

export default Navbar;
