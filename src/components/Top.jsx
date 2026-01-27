import { useState } from 'react'
import $ from 'jquery';
import uuid from 'react-uuid';
import headers from '../parts/headers.jsx';
import arrow from '/src/assets/img/arrow.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
//import './App.css'
// import { useRef } from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

// import { CustomEase } from "gsap/CustomEase";
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

const listItems = headers.map(item => <AnchorLink key={uuid()} href={item.url}>{item.name}</AnchorLink>);    

    return <>
      <div id="top-menu">
        <AnchorLink href={headers[0].url} data-tooltip={headers[0].name} className="tooltip"><img src={arrow} /></AnchorLink>
        {listItems}    
    </div>
    </>
}

export default Top