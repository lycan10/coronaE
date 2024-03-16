import React from 'react'

import "./homegallery.css"

import arch from "../../asset/cheers.png"
import GalleryCard from '../gallerycard/GalleryCard'

export const HomeGallery = () => {
  return (
    <div className='homegallery'>
        <div className='homegallery-container'>
            <div className="homegallery-title-container">
                <div className="homegallery-title">
                    <h1>Events</h1>
                </div>
                <div className="homegallery-sub-title">
                    <h3>VIEW OUR</h3>
                    <h1>Latest Events</h1>
                <div className="homegallery-footer">
                <div className="homegallery-footer-horizontal"></div>
                <div className="homegallery-footer-image">
                    <img src={arch} alt="" />
                </div>
                <div className="homegallery-footer-horizontal"></div>
                </div>
                </div>
            </div>
            <div className="homegallery-gallery-container">
                <GalleryCard />
                <GalleryCard />
                <GalleryCard />
                <GalleryCard />
            </div>
           <div className="homegallery-cta-container">
           <div className="homegallery-cta">
                <p>VIEW PORTFOLIO</p>
            </div>
           </div>
        </div>
    </div>
  )
}
