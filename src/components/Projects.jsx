import React from 'react';
import { useState, useRef } from 'react';
import projects from '../parts/projects.js';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom'
import useMobileWidthDetect from '../parts/useMobileWidthDetect.js';


function Projects() {

const { isMobileWidth } = useMobileWidthDetect();

  return  <>          
      {projects.map((item, i)=>
        <div className={`project ${isMobileWidth ? 'mobile' : ''}`} key={i}>
          <NavLink to={item[1]}>
            <img  className="projectImg" src={item[0]} />
            <div className="projectDesc">{item[2]}</div>
          </NavLink>
        </div>)}       
    </>  
}

export default Projects;
