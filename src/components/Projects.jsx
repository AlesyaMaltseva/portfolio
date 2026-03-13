import React from 'react';
import { useState, useRef } from 'react';
import projects from '../parts/base.js';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom'



function Projects() {

const projectLinks = projects.map((item, i)=><div className="project" key={i}><NavLink to={item[1]}><img  className="projectImg" src={item[0]} /><div className="projectDesc">{item[2]}</div></NavLink></div>);

  return  <>  
    
    <div id="projects">
      <div className="projects">      
          {projectLinks} 
       </div>    
    </div>
  </>  
}

export default Projects
