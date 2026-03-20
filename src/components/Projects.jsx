import React from 'react';
import { useState, useRef } from 'react';
import projects from '../parts/projects.js';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//import useMobileWidthDetect from '../parts/useMobileWidthDetect.js';
import useDeviceMobileDetect from '../parts/useDeviceMobileDetect.js';
gsap.registerPlugin(useGSAP, ScrollTrigger);

function Projects() {

// const handleSectionClick = (sectionId) => {
//   localStorage.setItem('activeSection', sectionId);
// };

// useEffect(() => {
//   const projects = document.querySelectorAll('.projects');
//   const activeSection = localStorage.getItem('activeSection');
//   if (activeSection && document.querySelector(`#${activeSection}`)) {
//     document.querySelector(`#${activeSection}`).scrollIntoView({ behavior: 'smooth' });
//   }
// }, []);

useGSAP(()=>{
  const bigBlock = document.querySelector('#projects');
  const contacts = document.querySelector('#contacts');
  const projects = document.querySelectorAll('.project');
  
  gsap.fromTo(projects, {
    opacity:0,
  },{
    opacity:1,
    stagger:0.15,
    delay:0,
    //duration:0.2,
    ease:'power1.out',
      scrollTrigger: {
        trigger: bigBlock,
        start: 'top 200px',
        //end: '+=500',
        endTrigger: contacts,
        //pin: true,        
        //scrub: 1,
        toggleActions: "play none play",
}
})
})

//const { isMobileWidth } = useMobileWidthDetect();
const { isMobileDevice } = useDeviceMobileDetect();

  return  <>          
      {projects.map((item, i)=>
        <div className={`project ${isMobileDevice ? 'mobile' : ''}`} key={i}>
          <NavLink to={item[1]}>
            <img  className="projectImg" src={item[0]} />
            <div className="projectDesc">{item[2]}</div>
          </NavLink>
        </div>)}       
    </>  
}

export default Projects;
