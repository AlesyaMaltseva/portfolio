import React from 'react';
import { useState, useRef } from 'react';
import uuid from 'react-uuid';
import projects from '../parts/base.js';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom'



function Projects() {

const projectLinks = projects.map(item=><div key={uuid()}><a href={item[1]}><img src={item[0]} /><div>{item[2]}</div></a></div>);

  return  <>  
    
    <div id="projects">      
      {projectLinks}      
    </div>
  </>  
}

export default Projects
