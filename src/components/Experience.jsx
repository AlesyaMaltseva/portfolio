import { useState, useRef } from 'react';
import experience from '../parts/experience.js';

// import 'bootstrap/dist/css/bootstrap.css'

function Experience() {

const experienceList = experience.map((item,i)=>
    <div key={i}>
      <div>{item.company}</div>
      <div>{item.year}</div>
      <div>{item.position}</div>
      <div>{item.text}</div>
    </div>
)   

  return  <>    
    {experienceList}       
    </>  
}

export default Experience
