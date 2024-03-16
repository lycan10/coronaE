import React from 'react'

import "./navbar.css"
import logo from "../../asset/logo.png"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbar-container">
            <div className="navbar-logo">
              <img src={logo} alt="" />
            </div>
            <div className="navbar-menu">
                <p>Home</p>
                <p>Portfolio</p>
                <p>Services</p>
                <p>About</p>
              <div className="navbar-contact">
                <p>Contact</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar