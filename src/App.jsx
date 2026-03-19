import { useState, useRef,useEffect,useLayoutEffect } from 'react';
import debounce from 'lodash.debounce';
import Top from './components/Top.jsx';
import headers from './parts/headers.jsx';
import useMobileWidthDetect from './parts/useMobileWidthDetect.js';
import useDeviceMobileDetect from './parts/useDeviceMobileDetect.js';
import './styles/styles.scss';

// import 'bootstrap/dist/css/bootstrap.css'

function App() {

// const importAll = (r) => {
//     let images = {} // Declare an empty images object
//     r.keys.map((item,index)=>{images[item.replace('./','')] = r(item).default;}) // Process all images to be placed in images obj with their file names!
//     return images // Return the images
// }


const { isMobileWidth } = useMobileWidthDetect();

return  <>
    <Top /> 
      <div id="content">        
          {headers.map((item,i) => 
            <div key={i} id={item.id} className={item.className}>             
              <div className="contentBlock">
                <h1>{item.name}</h1>
                <div className={`${item.id} ${isMobileWidth ? 'mobile' : ''}`}>{item.block}</div>
              </div>
          </div>    
          )}
      </div>
    </>  
}

export default App
