import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react"; 

import event from "../../asset/event.png"

import './hometype.css';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const HomeType = () => {

    const sectionRef = useRef()
    const colorRef = useRef()
    const containerRef = useRef()
    const color2Ref = useRef()
    const color3Ref = useRef()
    const color4Ref = useRef()
    const color5Ref = useRef()


    // useLayoutEffect(() => {
    //     let ctx = gsap.context(() => {
    //       ScrollTrigger.create({
    //         trigger: sectionRef.current,
    //         start: "top+=100 10%",
    //         end: "bottom-=100 40%",
    //         pin: ".hometype-title",
    //         markers: true
    //       });
    //     });
    //     return () => ctx.revert();
    //   }, []);

    //   useLayoutEffect(() => {
    //     let ctx = gsap.context(() => {
    //       ScrollTrigger.create({
    //         trigger: colorRef .current,
    //         start: "top+=100 79%",
    //         end: "bottom-=100 80%",
    //         onToggle: self => {
    //             if (self.isActive) {
                  
    //               gsap.to(colorRef.current, { backgroundColor: 'grey', color: "white" });
    //               gsap.to(sectionRef.current, { backgroundColor: 'yellow', color: "white" });
    //             } else {
    //               // Change body color back to default when out of view
    //               gsap.to(colorRef.current, { backgroundColor: 'white' });
    //               gsap.to(sectionRef.current, { backgroundColor: 'black' });
    //             }
    //           },

    //         markers: true
    //       });
    //     });
    //     return () => ctx.revert();
    //   }, []);

    //   useLayoutEffect(() => {
    //     let ctx = gsap.context(() => {
    //       ScrollTrigger.create({
    //         trigger: colorRef .current,
    //         start: "top+=100 80%",
    //         onToggle: self => {
    //             if (self.isActive) {
                  
    //               gsap.to(color2Ref.current, { backgroundColor: 'pink', color: "white" });
    //               gsap.to(sectionRef.current, { backgroundColor: 'green', color: "white" });
    //               gsap.to(containerRef.current, { backgroundColor: 'white', color: "white" });
    //             } 
    //           },

    //         markers: true
    //       });
    //     });
    //     return () => ctx.revert();
    //   }, []);
    //   useLayoutEffect(() => {
    //     let ctx = gsap.context(() => {
    //       ScrollTrigger.create({
    //         trigger: colorRef .current,
    //         start: "top+=100 81%",
    //         onToggle: self => {
    //             if (self.isActive) {
                  
    //               gsap.to(color3Ref.current, { backgroundColor: 'brown', color: "white" });
    //               gsap.to(sectionRef.current, { backgroundColor: 'red', color: "white" });
    //             } 
    //           },

    //         markers: true
    //       });
    //     });
    //     return () => ctx.revert();
    //   }, []);
    //   useLayoutEffect(() => {
    //     let ctx = gsap.context(() => {
    //       ScrollTrigger.create({
    //         trigger: colorRef .current,
    //         start: "top+=100 82%",
    //         end: "bottom-=100 40%",
    //         onToggle: self => {
    //             if (self.isActive) {
                  
    //               gsap.to(color4Ref.current, { backgroundColor: 'blue', color: "white" });
    //               gsap.to(sectionRef.current, { backgroundColor: 'orange', color: "white" });
    //               gsap.to(containerRef.current, { backgroundColor: 'white', color: "white" });
    //             } 
    //           },

    //         markers: true
    //       });
    //     });
    //     return () => ctx.revert();
    //   }, []);


    useGSAP(() => {
        // Define the toggleColors function
        const toggleColors = (isActive, backgroundColor, target ) => {
            if (isActive) {
                gsap.to( sectionRef.current, { backgroundColor});
                gsap.to(target, { backgroundColor: "white" });
                gsap.to(containerRef.current, { backgroundColor: "white"});
            } else {
                gsap.to(target, { backgroundColor: "white" });
                gsap.to(sectionRef.current, { backgroundColor});
            }
        };
    
        // ScrollTrigger for the main section pinning
        ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "top+=100 10%",
            end: "bottom-=100 96%",
            pin: ".hometype-title",
            markers: true
        });
    
        // ScrollTrigger for the first color container
        ScrollTrigger.create({
            trigger: colorRef.current,
            start: "top+=100 80%",
            end: "bottom-=100 60%",
            // toggleActions: 'play reverse play reverse',
            onToggle: ({ isActive }) => toggleColors(isActive, 'white', colorRef.current),
            markers: true
        });
    
        // ScrollTrigger for the second color container
        ScrollTrigger.create({
            trigger: color2Ref.current,
            start: "top+=100 80%",
            end: "bottom-=100 60%",
            // toggleActions: 'play reverse play reverse',
            onToggle: ({ isActive }) => toggleColors(isActive, 'indigo', color2Ref.current),
            markers: true
        });
    
        // ScrollTrigger for the third color container
        ScrollTrigger.create({
            trigger: color3Ref.current,
            start: "top+=100 80%",
            end: "bottom-=100 60%",
            // toggleActions: 'play reverse play reverse',
            onToggle: ({ isActive }) => toggleColors(isActive, 'pink', color3Ref.current),
            markers: true
        });
    
        // ScrollTrigger for the fourth color container
        ScrollTrigger.create({
            trigger: color4Ref.current,
            start: "top+=100 80%",
            end: "bottom-=100 60%",
            // toggleActions: 'play reverse play reverse',
            onToggle: ({ isActive }) => toggleColors(isActive, 'orange', color4Ref.current), 
            markers: true
        });

          // ScrollTrigger for the fourth color container
          ScrollTrigger.create({
            trigger: color5Ref.current,
            start: "top+=100 80%",
            end: "bottom-=100 60%",
  
            onToggle: ({ isActive }) => toggleColors(isActive, 'yellow', color5Ref.current),
            markers: true
        });
    
        // Return cleanup function
        return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    }, []);
    

    return (
        <div className="hometype" ref={sectionRef}>
            <div className="hometype-container">
                <div className="hometype-title">
                <div className="hometype-sub-title" ref={containerRef}>
                        <h3>WHAT WE DO</h3>
                        <h1>Our Events</h1>
                        <div className="hometype-footer">
                            <div className="hometype-footer-horizontal"></div>
                            <div className="homegallery-footer-image">
                                <img src={event} alt="" />
                            </div>
                            <div className="hometype-footer-horizontal"></div>
                        </div>
                    </div>
                </div>
                <div className="hometype-content-container" >
                    <div className="hometype-content" ref={colorRef}>
                        <h1>Corporate Events</h1>
                        <ul>
                            <li>Conferences and seminars</li>
                            <li>Trade shows and expos</li>
                            <li>Corporate meetings and retreats</li>
                            <li>Product launches</li>
                            <li>Team-building events</li>
                            <li>Corporate dinners and galas</li>
                        </ul>
                    </div>
                    <div className="hometype-content" ref={color2Ref}>
                        <h1> Social Events</h1>
                        <ul>
                            <li>Weddings</li>
                            <li>Birthday parties</li>
                            <li>Anniversaries</li>
                            <li>Graduation parties</li>
                            <li>Family reunions</li>
                            <li>Holiday celebrations</li>
                        </ul>
                    </div>
                    <div className="hometype-content" ref={color3Ref}>
                        <h1>Educational Events</h1>
                        <ul>
                            <li>Workshops and training sessions</li>
                            <li>Continuing education classes</li>
                            <li>Educational seminars</li>
                            <li>Academic conferences</li>
                        </ul>
                    </div>
                    <div className="hometype-content" ref={color4Ref}>
                        <h1>Charity and Fundraising Events</h1>
                        <ul>
                            <li>Charity galas and auctions</li>
                            <li>Fundraising dinners</li>
                            <li>Benefit concerts</li>
                            <li>Community service projects</li>
                            <li>Charity walks and runs</li>
                        </ul>
                    </div>
                    <div className="hometype-content" ref={color5Ref}>
                        <h1> Government and Political Events</h1>
                        <ul>
                            <li>Political rallies and campaigns</li>
                            <li>Government meetings and summits</li>
                            <li>Inaugurations and swearing-in ceremonies</li>
                            <li>Town hall meetings</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeType;
