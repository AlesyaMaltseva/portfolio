import { useState, useRef } from 'react';
import uuid from 'react-uuid';
import Top from './components/Top.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Contacts from './components/Contacts.jsx';
// import 'bootstrap/dist/css/bootstrap.css'

function App() {

const importAll = (r) => {
    let images = {} // Declare an empty images object
    r.keys.map((item,index)=>{images[item.replace('./','')] = r(item).default;}) // Process all images to be placed in images obj with their file names!
    return images // Return the images
}

const names = ['top','experience', 'projects', 'contacts'];

  return  <>
        <Top /> 
      <div id="content">
        <div className="block block1"><About /></div>
        <a name={names[1]}></a><div className="block block2"><Experience /></div>
        <a name={names[2]}></a><div className="block block3"><Projects /></div>
        <a name={names[3]}></a><div className="block block4"><Contacts /></div>
      </div>
    </>  
}

export default App
