import React from 'react'
import Header from '../../components/header/Header'
import HomeAbout from '../../components/homeabout/HomeAbout'
import { HomeGallery } from '../../components/homegallery/HomeGallery'
import HomeVideo from '../../components/homevideo/HomeVideo'
import HomeServices from '../../components/homeservices/HomeServices'
import HomeContact from '../../components/homecontact/HomeContact'
import HomeType from '../../components/hometype/HomeType'



const Home = () => {
  return (
    <div>
        <Header />
        <HomeAbout />
        <HomeVideo />
        <HomeGallery />
        <HomeType />
    
        <HomeServices />
        <HomeContact />
    </div>
  )
}

export default Home