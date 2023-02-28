import { Input } from '@mui/material';
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
          Search<br/>Hacker News
        </div>
        {/* <div className="title2">
          Hacker News
        </div> */}
        <input type="search" placeholder="Search stories by title, url or author" id="search" name="fname"/>
      </div>
    </div>
  )
}

export default Navbar;
