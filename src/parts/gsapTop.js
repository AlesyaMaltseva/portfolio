import { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP,ScrollTrigger,SplitText);

const gsapTop = ()=>{  

const menuItems = document.querySelectorAll('#top-menu a span');
const topMenu = document.querySelector('top-menu');


 gsap.fromTo(menuItems, 
    {x:-400,
        opacity:0,
        color:'#ccc',
    }, 
    {x:0, 
        delay:2,
        color:'inherit',
        duration:0.8,
        stagger:-0.2, 
        ease: "back.out",
        opacity:1}
    )

    gsap.fromTo(topMenu, 
        {},
        {}
    )

}


export default gsapTop;