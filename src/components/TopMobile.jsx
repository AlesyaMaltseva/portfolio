import { useState, useRef, useEffect, useLayoutEffect } from 'react'
import $ from 'jquery';
import headers from '../parts/headers.jsx';
//import arrow from '/src/assets/img/arrow.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsapTop from '../parts/gsapTop.js';
gsap.registerPlugin(useGSAP, ScrollTrigger);




function TopMobile() {
const topMenu = useRef(null);
const { contextSafe } = useGSAP({scope: topMenu}); 

// useGSAP(()=>{  
// const menuItems = document.querySelectorAll('#topMenu a span');
// const topLine = document.querySelector('.topLine');
// const toolTip = document.querySelector('.tooltip');
// const lineMenu = gsap.timeline();

// gsap.fromTo(menuItems,   
//     {x:-400,
//         opacity:0,
//         color:'#ccc',
//         rotate:30,
//     }, 
//     {x:0, 
//         //delay:2.5,
//         color:'inherit',
//         duration:0.8,
//         stagger:-0.2, 
//         ease: "back.out",
//         opacity:1,
//        rotate:0,
//       textDecoration:'underline',}
//     );

// lineMenu.to(topLine, 
//       {x:'0px',
//         delay:0.8,
//           opacity:0.5,
//           width:'80%',
//           duration:0.3,
//           ease: "power1.out",})   
// lineMenu.to(topLine,
//       {x:'-1000px',
//         delay:0.2,  
//          duration:1.2,
//          ease: "power1.out",
//          opacity:0,  
//          width:'30%',})

// gsap.to(toolTip, 
//   {display:'block',
//     opacity: 1,
//     duration: 0.2,
//     scrollTrigger: {
//       trigger: "#topMenu",
//       start: 0,
//       toggleActions: "play none none reset",
// }})

// })

    return <>    
      <div id="topMenu" ref={topMenu}>
        <div className="menuItems">
        <AnchorLink href={headers[0].url} data-tooltip={headers[0].name} className="tooltip" id="">
         <span><svg version="1.1" id="arrow" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" viewBox="0 0 50 30" enableBackground="new 0 0 50 25">
          <path d="M48.962,21.065c0,0.59-0.26,1.173-0.757,1.568c-0.866,0.687-2.124,0.541-2.81-0.324L25,7.578L4.48,22.243 c-0.687,0.865-1.944,1.011-2.81,0.324s-1.01-1.944-0.324-2.811l22.087-16.64C23.813,2.639,24.39,2.36,25,2.36 s1.188,0.278,1.567,0.757l21.961,16.706C48.82,20.191,48.962,20.63,48.962,21.065z"/>
        </svg>
         </span>
          </AnchorLink>
        {headers.map((item,i) => <AnchorLink key={i} href={item.url}><span>{item.name}</span></AnchorLink>)}  
       </div>   
    </div>
    {/* <hr className="topLine" /> */}
    </> 
    
}

export default TopMobile