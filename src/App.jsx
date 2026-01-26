import { useState, useRef } from 'react';
import uuid from 'react-uuid';
import Top from './components/Top.jsx';
import headers from './parts/headers.jsx';
import './styles.scss';
// import 'bootstrap/dist/css/bootstrap.css'



function App() {

const importAll = (r) => {
    let images = {} // Declare an empty images object
    r.keys.map((item,index)=>{images[item.replace('./','')] = r(item).default;}) // Process all images to be placed in images obj with their file names!
    return images // Return the images
}

const structure = headers.map(item => 
<div key={uuid()}>
  <a name={item.nameLink}></a>
    <div  key={uuid()}className={item.className}>
      <h1>{item.name}</h1>
      <div>{item.block}</div>
      </div>    
</div>);

  return  <>
      <Top /> 
      <div id="content">        
          {structure}
      </div>
    </>  
}

export default App
