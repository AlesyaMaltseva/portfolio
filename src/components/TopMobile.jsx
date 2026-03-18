import { useState, useRef, useEffect, useLayoutEffect } from 'react';
import * as ReactDOM from 'react-dom';
import { createElement } from 'react';
import $ from 'jquery';
import headers from '../parts/headers.jsx';
//import arrow from '/src/assets/img/arrow.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";
import gsapTop from '../parts/gsapTop.js';
gsap.registerPlugin(useGSAP, ScrollTrigger,MorphSVGPlugin,MotionPathPlugin,MotionPathHelper);


function TopMobile() {
const topMenuMobile = useRef(null);
const burgerImg = useRef(null);
const arrow = useRef(null);
const divGray = useRef(null);
const burgerContainer = useRef(null);
const burgerMobileMenu = useRef(null);
const menuMobileItems = useRef(null);
const arrowContainer = useRef(null);

//const { contextSafe } = useGSAP({scope: burgerMobileMenu}); 



useGSAP(()=>{  

const block2 = document.querySelector(".block2");

gsap.to(arrowContainer.current, 
  {visibility:'visible',
    opacity: 1,
    duration: 0.3,    
    scrollTrigger: {
      trigger: block2,
      start: '0 50px',
      toggleActions: "play none none reverse",
}})

const menuPlay = gsap.timeline().pause();

menuPlay.to("#one", {
  duration:.4,
  rotation:135,
  transformOrigin: "50% 50%",
   yPercent:230,
   delay:0.2,   
})

.to("#two", {
  duration:.2,
  rotation:90,
  transformOrigin: "50% 50%",
  yPercent:-230,  
}, '<')

.to("#two", {
  duration:.2,
  rotation:45,
},'<')

.to("#three", {
  duration:.1,
  rotation:90,
  opacity:0,
  transformOrigin: "50% 50%",  
},'<')
.to(".burgerDiv", {
  duration:.2,
  scale:1.5,
},)
.to(".burgerDiv", {
  duration:.4,
  scale:1,
  ease:'elastic.out',
},)
.to(".burgerDiv", {
  duration:.4,
  rotate:360,
  ease:'elastic.out',
},)

const menuMobileItemsLinks = document.querySelectorAll('.menuMobileItems a span');

function openMenu() {
      menuPlay.play();            
        gsap.to(divGray.current, {
            display:'block',
            opacity:0.6,
            duration:.6,
        }); 
        gsap.to(menuMobileItems.current, {
            display:'block',
            duration:0,
        });
        gsap.to(menuMobileItemsLinks, {
              display:'block',
              x:0,
              stagger:0.09,
              duration:0.6,
              ease:'back.out',
            });              
        playMenu = false;        
      }

function closeMenu() {
        menuPlay.reverse();       
        gsap.to(divGray.current, {          
            opacity:0,
            duration:.6,
            display:'none',
        }); 
        gsap.to(menuMobileItemsLinks, {
              x:250,
              stagger:-0.07,
              duration:0.6,
              ease:'expo', 
              display:'none', 
            }); 
            gsap.to(menuMobileItems.current, {
            duration:0,
            display:'none',
            delay:0.5,
        });  
        playMenu = true;                 
      }  
 
let playMenu = true;

function clickButton() {  
   playMenu ? openMenu() : closeMenu();
}

let event;
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
if (isMobileDevice()) {
    event = 'touchstart';    
} else {
    event = 'click';    
}

const targets = [burgerContainer.current, divGray.current, menuMobileItemsLinks];

targets.forEach((target) => {
  if(target.length!==undefined) {
    for (let link of target) {
        link.addEventListener(event, clickButton);        
      }
  } else {
      target.addEventListener(event, clickButton);  
  }
})

arrowContainer.current.addEventListener(event, closeMenu);

});

    return <>    
      <div id="topMenu" className="topMenuMobile" ref={topMenuMobile}>              
        <AnchorLink href={headers[0].url}>
         <div className="arrowContainer" ref={arrowContainer}>
            <svg ref={arrow} version="1.1" id="arrow" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" viewBox="0 0 50 30" enableBackground="new 0 0 50 25"  fill="#ffffff">
              <path d="M48.962,21.065c0,0.59-0.26,1.173-0.757,1.568c-0.866,0.687-2.124,0.541-2.81-0.324L25,7.578L4.48,22.243 c-0.687,0.865-1.944,1.011-2.81,0.324s-1.01-1.944-0.324-2.811l22.087-16.64C23.813,2.639,24.39,2.36,25,2.36 s1.188,0.278,1.567,0.757l21.961,16.706C48.82,20.191,48.962,20.63,48.962,21.065z"/>
            </svg>
         </div>
        </AnchorLink>  

        <div className="burgerMobileMenu" ref={burgerMobileMenu}>
            <div className="burgerContainer" ref={burgerContainer}>
              <div className="burgerDiv">
                  <svg id="burgerSVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" xmlSpace="preserve"> 
                    <g id="burgerGroup">
                      <path id="one" d="M-4.662,9H54.66C57.608,9,60,6.986,60,4.5C60,2.016,57.608,0,54.66,0H-4.662C-7.61,0-10,2.016-10,4.5 C-10,6.986-7.61,9-4.662,9z"/>
                      <path id="two" d="M54.66,41H-4.662C-7.61,41-10,43.016-10,45.501S-7.61,50-4.662,50H54.66c2.948,0,5.34-2.014,5.34-4.499S57.608,41,54.66,41z"/>
                      <path id="three" d="M54.66,20.5H-4.662C-7.61,20.5-10,22.514-10,25c0,2.484,2.39,4.5,5.338,4.5H54.66c2.948,0,5.34-2.016,5.34-4.5 C60,22.514,57.608,20.5,54.66,20.5z"/>
                    </g> 
                  </svg>
              </div> 
            </div>    
                   
            <div className="menuMobileItems" ref={menuMobileItems}> 
              {headers.map((item,i) => 
              <AnchorLink key={i} href={item.url}>
                <span>{item.name}</span>
              </AnchorLink>)}  
            </div> 
            <div className="divGray" ref={divGray}></div>         
       </div>     

      </div>
    </> 
    
}

export default TopMobile