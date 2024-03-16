import React from 'react'

import "./homeabout.css"

import hb1 from "../../asset/hb1.jpg"
import hb2 from "../../asset/hb3.jpg"

const HomeAbout = () => {
  return (
    <div className='HomeAbout'>
      <div className="homeabout-container">
        <div className="homeabout-content">
          <h3>OUR HISTORY</h3>
          <h1>Elegance Through the Ages</h1>
          <p>Corona Events stands as the premier event management subsidiary of Corona International Concept Limited, distinguished for its commitment to providing bespoke solutions tailored precisely to your event needs. Whether it's orchestrating formal corporate gatherings or curating intimate personal affairs, our dedication to personalizing each occasion ensures that every aspect of your vision is brought to life. With a steadfast focus on alleviating the burdensome logistics associated with event planning, our team endeavors to deliver nothing short of excellence.</p>
            <p>At Corona Events, we go to great lengths, even traversing borders if necessary, to transform your dreams into tangible experiences. Our unwavering dedication to mastering the art of bringing our clients' visions to fruition with finesse and international flair ensures that every step of the journey is as enjoyable as the destination itself. We understand that each event is a unique reflection of our clients' aspirations and desires. Our expertise lies not only in executing flawless events but also in fostering meaningful connections and unforgettable experiences. With meticulous attention to detail and a passion for exceeding expectations, we are committed to crafting moments that leave a lasting impression. From concept to execution, we strive to create events that captivate, inspire, and endure in memory long after the final guest departs.</p>
        </div>
        <div className="homeabout-image-container">
          <div className="homeabout-image first-image">
            <img src={hb1} alt="" />
          </div>
          <div className="homeabout-image ">
            <img src={hb2} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeAbout