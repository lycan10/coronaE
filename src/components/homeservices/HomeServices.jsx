import React, { useEffect } from 'react';

import flare from "../../asset/flare.png";
import "./homeservices.css";

import w1 from "../../asset/w1.png";
import w2 from "../../asset/w2.png";
import w3 from "../../asset/w3.png";


import s1 from "../../asset/s1.png"
import s2 from "../../asset/s2.png"
import s3 from "../../asset/s3.png"
import s4 from "../../asset/s4.png"
import s5 from "../../asset/s5.png"
import s6 from "../../asset/s6.png"


import ServicesCard from '../servicescard/ServicesCard';

const HomeServices = () => {

    const servicesCardData = [
        {
            id: 0,
            img: s1,
            title: "Venue Selection and Booking",
            content: "Corona Int'l Events help clients choose the perfect venue for their event based on factors such as budget, capacity, location, and style. We negotiate contracts and handle all communication with the venue."
        },
        {
            id: 1,
            img: s2,
            title: "Event Design and Styling",
            content: "Corona Int'l Events work closely with industry standard decorators to deliver dream-like creative event design and styling. We provide ideas, themes, and décor options, as well as oversee the implementation of design elements prior to the event."
        },
        {
            id: 2,
            img: s3,
            title: "Budget Management",
            content: "Corona Int'l Events advise clients in creating and managing budgets for their events. We help prioritize expenses, source cost-effective options, and track expenditures to ensure the event stays within budget."
        },
        {
            id: 3,
            img: s4,
            title: "On-Site Event Coordination",
            content: "On the day of the event, we oversee all aspects of the event to ensure it runs smoothly. Our team of elite coordinators manage setup and breakdown, coordinate vendor arrivals and activities, handle any last-minute changes or emergencies, and ensure the overall success of the event."
        },
        {
            id: 4,
            img: s5,
            title: "Logistics Management",
            content: "At Corona Int'l Events, we handle all logistical aspects of an event, including transportation, lodging, and equipment rentals. We coordinate schedules, arrange for transportation for guests and attendees, and ensure that all necessary equipment and supplies are available on-site."
        },
        {
            id: 5,
            img: s6,
            title: "Marketing and Promotion",
            content: "Corona Int'l Events assist clients in promoting their events to reach their target audience effectively. This may involve developing marketing strategies, creating promotional materials such as flyers and advertisements, and managing social media campaigns to generate buzz and attract attendees."
        }
    
    ]
    return (
        <div>
            <div className="homeservices-container">
                <div className="homegallery-title-container">
                    <div className="homegallery-title">
                        <h1>Services</h1>
                    </div>
                    <div className="homegallery-sub-title">
                        <h3>WHAT WE OFFER</h3>
                        <h1>Our Services</h1>
                        <div className="homegallery-footer">
                            <div className="homegallery-footer-horizontal"></div>
                            <div className="homegallery-footer-image">
                                <img src={flare} alt="" />
                            </div>
                            <div className="homegallery-footer-horizontal"></div>
                        </div>
                    </div>
                </div>
                <div className="homeservice-services-container">
                {
                    servicesCardData.map((item)=> {
                        return(
                            <div key={item.id}>
                                <ServicesCard img={item.img} title={item.title} content={item.content} />
                            </div>
                        )
                    })
                }
                    
                </div>
            </div>
        </div>
    );
};

export default HomeServices;
