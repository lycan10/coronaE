import React from 'react'
import Slider from "react-slick";

import h1 from "../../asset/h1.jpg"
import h2 from "../../asset/h2.jpg"
import h3 from "../../asset/h3.jpg"

import "./header.css"

const Header = () => {
  var settings = {
    dots: false,
    fade: true,
    infinite: true,
    autoplay: true,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    speed: 2000,
    autoplaySpeed: 6000,
  };
  return (
    <div className='header'>
      <div className="header-container">
          <Slider {...settings}>
          <div className='header-images'>
            <img src={h1} alt="" />
          </div>
          <div className='header-images'>
            <img src={h2} alt="" />
          </div>
          <div className='header-images'>
            <img src={h3} alt="" />
          </div>
        </Slider>
      </div>
      <div className="header-opacity"></div>
      <div className="header-text">
        <h1>Welcome to Corona Events</h1>
        <p>Transforming Ideas into Unforgettable Memories</p>
        <div className="header-vertical"></div>
        <div className="header-button">
          <p>OUR PORTFOLIO</p>
        </div>
      </div>
    </div>
  )
}

export default Header