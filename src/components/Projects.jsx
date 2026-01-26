import React from 'react';
import { useState, useRef } from 'react';
import uuid from 'react-uuid';
import projects from '../parts/base.js';
import { Link } from 'react-router-dom'

function Projects() {

const projectLinks = projects.map(item=><div key={uuid()}><Link to={item[1]}><img src={item[0]} /><div>{item[2]}</div></Link></div>);

  return  <>  
    
    <div id="projects">      
      {projectLinks}      
    </div>
  </>  
}

export default Projects
