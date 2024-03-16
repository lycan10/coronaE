import React from 'react'
import "./footer.css"

import logo from "../../asset/logo.png"
import f1 from "../../asset/facebook.png"
import f2 from "../../asset/twitter.png"
import f3 from "../../asset/instagram.png"

const date = new Date();



const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="" />
        </div>
        <div className="footer-socials-container">
          <div className="footer-socials"> 
            <img src={f1} alt="" />
          </div>
          <div className="footer-socials"> 
            <img src={f2} alt="" />
          </div>
          <div className="footer-socials"> 
            <img src={f3} alt="" />
          </div>
         
        </div>
        <div className="footer-copyright">
        <p>&#169; {date.getFullYear()} Corona Int'l Events</p>
        </div>

      </div>
    </div>
  )
}

export default Footer