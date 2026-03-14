import { useState, useRef } from 'react';
import experience from '../parts/experience.jsx';

// import 'bootstrap/dist/css/bootstrap.css'

function Experience() {


  return  <>    
    {experience.map((item,i)=>
    <div key={i} className='expList'>
      <div className='company'>{item.company}</div>
      <div className='year'>{item.year}</div>
      <div className='position'>{item.position}</div>
      <div className='description'>{item.text}</div>
    </div>
)}       
  </>  
}

export default Experience
