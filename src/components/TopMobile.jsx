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
const topMenuMobile = useRef(null);
const burgerImg = useRef(null);
const arrow = useRef(null);
const burgerMobileMenu = useRef(null);
const menuMobileItems = useRef(null);

const { contextSafe } = useGSAP({scope: topMenu}); 

useGSAP(()=>{  
const menuItems =  document.querySelectorAll('.topMenuMobile a span');

const lineMenu = gsap.timeline();

gsap.fromTo(menuItems,   
    {x:-400,
        opacity:0,
        color:'#ccc',
        rotate:30,
    }, 
    {x:0, 
        //delay:2.5,
        color:'inherit',
        duration:0.8,
        stagger:-0.2, 
        ease: "back.out",
        opacity:1,
       rotate:0,
      }
    );



gsap.to(arrow.current, 
  {display:'block',
    opacity: 1,
    duration: 0.2,
    scrollTrigger: {
      trigger: "#topMenu",
      start: 0,
      toggleActions: "play none none reset",
}})

})

    return <>    
      <div id="topMenu" className="topMenuMobile" ref={topMenuMobile}>              
        <AnchorLink href={headers[0].url}  data-tooltip={headers[0].name} className="tooltip" id="">
         <span>
            <svg ref={arrow} version="1.1" id="arrow" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" viewBox="0 0 50 30" enableBackground="new 0 0 50 25"  fill="#ffffff">
              <path d="M48.962,21.065c0,0.59-0.26,1.173-0.757,1.568c-0.866,0.687-2.124,0.541-2.81-0.324L25,7.578L4.48,22.243 c-0.687,0.865-1.944,1.011-2.81,0.324s-1.01-1.944-0.324-2.811l22.087-16.64C23.813,2.639,24.39,2.36,25,2.36 s1.188,0.278,1.567,0.757l21.961,16.706C48.82,20.191,48.962,20.63,48.962,21.065z"/>
            </svg>
         </span>
        </AnchorLink>  
          <div className="burgerMobileMenu" ref={burgerMobileMenu}>
            <svg id="burgerImg" ref={burgerImg} xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 100 60" fill="#ffffff">
            <path id="open" d="M-4.662,9H54.66C57.608,9,60,6.986,60,4.5C60,2.016,57.608,0,54.66,0H-4.662C-7.61,0-10,2.016-10,4.5 C-10,6.986-7.61,9-4.662,9z M54.66,41H-4.662C-7.61,41-10,43.016-10,45.501S-7.61,50-4.662,50H54.66c2.948,0,5.34-2.014,5.34-4.499S57.608,41,54.66,41z M54.66,20.5H-4.662C-7.61,20.5-10,22.514-10,25c0,2.484,2.39,4.5,5.338,4.5H54.66c2.948,0,5.34-2.016,5.34-4.5 C60,22.514,57.608,20.5,54.66,20.5z"/> 
            </svg> 
            <div className="menuMobileItems" ref={menuMobileItems}> 
              {headers.map((item,i) => 
              <AnchorLink key={i} href={item.url}>
                <span>{item.name}</span>
              </AnchorLink>)}  
            </div>
          </div>
       </div>     
    
    </> 
    
}

export default TopMobile