import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='top-navbar'>
        <div className='top-navbar-left'>
          Royal Thai Government
        </div>
        <div className='top-navbar-right'>
          <ul>
            <li><a href="#">Sign Up</a></li>
            <li><a href="#">Sign In</a></li>
          </ul>
        </div>
      </div>
      <div className='bottom-navbar'>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Vote</a></li>
          <li><a href="#">Info</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
