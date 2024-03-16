import React from 'react'

import "./servicescard.css"

const ServicesCard = ({img, title, content}) => {
  return (
    <div className='servicescard'>
        <div className="servicecard-img">
            <img src={img} alt="" />
        </div>
        <div className="servicecard-content">
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    </div>
  )
}

export default ServicesCard