import React, {useState, } from 'react'

import e1 from "../../asset/hb3.jpg"

import "./gallerycard.css"

import { motion} from "framer-motion"

const GalleryCard = () => {

    const [isHovered, setIsHovered] = useState(false); 


  return (
    <motion.div 
      className='gallerycard' 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
         <motion.div className={`gallerycard-image ${isHovered ? 'hovered' : ''}`}>
            <motion.img src={e1} alt="" />
        </motion.div>
        <motion.div 
            className="gallery-details"  
            initial={{ opacity: 0, y: 120}}
            whileInView={{ opacity: 1, y: 0}}
            transition={{duration: 0.2}}
            >
            <div className="gallery-details-content">
            <h1>Lois & John</h1>
            <p >lorem gdjggdf hsghdgdhd hhxdvvdhv gdghudhd jdhgdfgdf.</p>
            <h3 >#L&S forever</h3>
            </div>
        </motion.div>
    </motion.div>
  )
}

export default GalleryCard