import { useState, useRef, useEffect, useLayoutEffect } from 'react'
import $ from 'jquery';
import headers from '../parts/headers.jsx';
//import arrow from '/src/assets/img/arrow.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import gsapTop from '../parts/gsapTop.js'
gsap.registerPlugin(useGSAP);


// // CustomBounce requires CustomEase
// import { CustomBounce } from "gsap/CustomBounce";
// // CustomWiggle requires CustomEase
// import { CustomWiggle } from "gsap/CustomWiggle";
// import { RoughEase, ExpoScaleEase, SlowMo } from "gsap/EasePack";
    
// import { Draggable } from "gsap/Draggable";
// import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
// import { EaselPlugin } from "gsap/EaselPlugin";
// import { Flip } from "gsap/Flip";
// import { GSDevTools } from "gsap/GSDevTools";
// import { InertiaPlugin } from "gsap/InertiaPlugin";
// import { MotionPathHelper } from "gsap/MotionPathHelper";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin";
// import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
// import { Observer } from "gsap/Observer";
// import { Physics2DPlugin } from "gsap/Physics2DPlugin";
// import { PhysicsPropsPlugin } from "gsap/PhysicsPropsPlugin";
// import { PixiPlugin } from "gsap/PixiPlugin";
// import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// // ScrollSmoother requires ScrollTrigger
// import { ScrollSmoother } from "gsap/ScrollSmoother";
// import { ScrollToPlugin } from "gsap/ScrollToPlugin";
// import { SplitText } from "gsap/SplitText";
// import { TextPlugin } from "gsap/TextPlugin";
// gsap.registerPlugin(useGSAP,Draggable,DrawSVGPlugin,EaselPlugin,Flip,GSDevTools,InertiaPlugin,MotionPathHelper,MotionPathPlugin,MorphSVGPlugin,Observer,Physics2DPlugin,PhysicsPropsPlugin,PixiPlugin,ScrambleTextPlugin,ScrollTrigger,ScrollSmoother,ScrollToPlugin,SplitText,TextPlugin,RoughEase,ExpoScaleEase,SlowMo,CustomEase,CustomBounce,CustomWiggle);

// gsap.to(".mybox", {
// y: 100,
// duration:.5, 
// delay:0.3, 
// opacity:1,
// ease: "power1.inOut",
//   stagger: {
//     grid: [7,15],
//     from: "left",
//     amount: 1.5
//   }
// });
// useGSAP(() => {   
// gsap.from("#top-menu a", {
// duration:2, 
// delay:0.3, 
// stagger: 0.1,
// ease: CustomBounce.create("myBounce", {
// strength:0.7,
// endAtStart:false,
// squash:1,
// squashID: "myBounce-squash"}),
// y: -100
// });

// gsap.to("#top-menu a", 
//   {opacity:1, duration:2}  
// );
// });

function Top() {
const topMenu = useRef(null);
const { contextSafe } = useGSAP({scope: topMenu}); 

useGSAP(()=>{  
const menuItems = document.querySelectorAll('#topMenu a span');
const topLine = document.querySelector('.topLine');


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
      textDecoration:'underline',}
    );

lineMenu.to(topLine, 
      {x:'0px',
        delay:0.8,
          opacity:0.5,
          width:'80%',
          duration:0.3,
          ease: "power1.out",})   
  lineMenu.to(topLine,
      {x:'-1000px',
        delay:0.2,  
         duration:1.2,
         ease: "power1.out",
         opacity:0,  
         width:'30%',})

})

const listItems = headers.map((item,i) => <AnchorLink key={i} href={item.url}><span>{item.name}</span></AnchorLink>);    

    return <>    
      <div id="topMenu" ref={topMenu}>
        <div className="contentBlock">
        <AnchorLink href={headers[0].url} data-tooltip={headers[0].name} className="tooltip" id="">
         <span><svg version="1.1" id="arrow" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" viewBox="0 0 50 30" enableBackground="new 0 0 50 25">
          <path d="M48.962,21.065c0,0.59-0.26,1.173-0.757,1.568c-0.866,0.687-2.124,0.541-2.81-0.324L25,7.578L4.48,22.243 c-0.687,0.865-1.944,1.011-2.81,0.324s-1.01-1.944-0.324-2.811l22.087-16.64C23.813,2.639,24.39,2.36,25,2.36 s1.188,0.278,1.567,0.757l21.961,16.706C48.82,20.191,48.962,20.63,48.962,21.065z"/>
        </svg>
         </span>
          </AnchorLink>
        {listItems}  
       </div>   
    </div>
    <hr className="topLine" />
    </> 
    {/* <img src={arrow} /> */}
}

export default Top