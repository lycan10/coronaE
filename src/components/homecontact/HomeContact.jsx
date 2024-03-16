import React from 'react'

import "./homecontact.css"

import call from "../../asset/call.png"
import mail from "../../asset/mail.png"
import locate from "../../asset/location.png"

const HomeContact = () => {
  return (
    <div className='homecontact'>
      <div className="homecontact-container">
        <div className="homecontact-text">
          <p>★★★★★</p>
          <h1>Get in touch with us to start planning your dream event today! </h1>
          <div className="homecontact-tel-container">
            <img src={call} alt="" />
            <div className="homecontact-tel">
              <p>CALL US TODAY</p>
              <h1>0809-234-5678</h1>
            </div>
          </div>
          <div className="homecontact-tel-container">
            <img src={mail} alt="" />
            <div className="homecontact-tel">
              <p>EMAIL US TODAY</p>
              <h1>coronaintlconcepts@gmail.com</h1>
            </div>
          </div>
          <div className="homecontact-tel-container">
            <img src={locate} alt="" />
            <div className="homecontact-tel">
              <p>VISIT US TODAY</p>
              <h1>46 Haile Selassie St, Asokoro, Aso 900103, Federal Capital Territory, Nigeria</h1>
            </div>
          </div>
        </div>
        <div className="homecontact-map">
        <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.1959284333084!2d7.5257782758802385!3d9.04588508872268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e095e2a949927%3A0xd1014d463fc41f60!2sHaile%20Selassie%20St%2C%20Asokoro%2C%20Aso%20900103%2C%20Federal%20Capital%20Territory%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1710016793015!5m2!1sen!2sus" 
        width="100%" 
        height="100%" 
        style={{border: "none"}}
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">

        </iframe>
        </div>
      </div>
    </div>
  )
}

export default HomeContact