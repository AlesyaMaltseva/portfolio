import { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);


function gsapTop() {  

    const [topMenu, setTopMenu] = useState([]);

    useLayoutEffect(()=>{
        setTopMenu = document.querySelectorAll('#top-menu a');
        console.log(topMenu);
    }, []);

  
}; 
   



export default gsapTop();