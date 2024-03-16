import React from 'react'

import hv from "../../asset/hv1.jpg"
import play from "../../asset/play.png"

import "./homevideo.css"

const HomeVideo = () => {
  return (
    <div>
        <div className="homevideo-container">
            <div className="homevideo-image">
                <img src={hv} alt="" />
            </div>
            <div className="homevideo-opacity"></div>
            <div className="homevideo-title">
                <h3>ELEGANT SOLUTIONS</h3>
                <h1>See For Yourself</h1>
                <div className="homevideo-button">
                    <img src={play} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeVideo