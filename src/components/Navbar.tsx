import React from "react";
import { Link } from 'react-router-dom'
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="top-navbar">
        <div className="top-navbar-left">
          <div className="top-navbar-logo">
            <img src="../src/assets/images/gov-logo.png" />
          </div>
          <div className="top-navbar-text">
            <div className="top-navbar-text1">รัฐบาลไทย</div>
            <div className="top-navbar-text2">Royal Thai Government</div>
          </div>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Vote</a>
            </li>
            <li>
              <a href="#">Info</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </div>
        <div className="top-navbar-right">
          <ul>
            <li>
              <Link to='/register'>Sign Up</Link>
            </li>
            <li>
              <a href="#">Sign In</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
