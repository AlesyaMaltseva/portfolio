import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {useEffect, useLayoutEffect, useRef, useState} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import '../css/IqMenu.scss';
import logo from "../img/iq-logo.png";
import iq from '../css/iq.module.css';
gsap.registerPlugin(useGSAP,ScrollTrigger);


function IqMenu() {


// Скролл 

useGSAP(() => {

gsap.to(".logoIq", {
  width:140,
  duration: 1,
  ease: "elastic",
  scrollTrigger: {
    trigger: ".logoIq",
    start: 50,    
    isTouch: 2,
    toggleActions: "play none none reset",  //"play none reverse"
    onEnterBack: () => {
      gsap.to(".logoIq", {
      width: 250,     
      duration: 0.3,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".logoIq",
        isTouch: 2,
        toggleActions: "play none none reset"
      }
    })  
  }}
});

gsap.to(".topBlockIqMenu", {
  duration: 0.4,
  boxShadow: '0 -3em 3em rgba(0, 0, 0, 0.1), 0.3em 0.3em 1em rgba(85, 85, 85, 0.3',
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".topBlockIqMenu",
    start: "50px",
    toggleActions: "play none none reset",
 }
});
});

// Кнопки меню Показать/Скрыть
const topBlockIqMenu = useRef();

const { contextSafe } = useGSAP({scope: topBlockIqMenu});  

const onClickShowMenu = contextSafe(() => {
	gsap.to('.grayIqMenu', {
  opacity:0.5,
  duration: 0.5,
  ease: 'power2.out'
  })
  gsap.to('.redIqMenu', {
  duration: 0.3, 
  scale:18,  
  opacity:1,
  ease: 'power2.out'
})
  gsap.to('.menuItemsIqMenu div', {
  opacity:1,
  x:-120,
  duration: 0.2,
  stagger: 0.2, 
  delay:0.25, 
  ease: 'power2.out'
  })  
});

const onClickHideMenu = contextSafe(() => {  
  gsap.to('.menuItemsIqMenu div', { 
   opacity:0,
  x:70,
  duration: 0.3,
  stagger: -0.1,  
  delay:0.1,
  ease: 'power2.out'
})   
  gsap.to('.redIqMenu', {
  duration: 0.3, 
  scale:0,  
  opacity:0,
  delay:0.4,
  ease: 'power2.out'
})
  gsap.to('.grayIqMenu', {
  opacity:0,
  duration: 1,
  ease: 'power2.out',
  delay:0.3
  })
});

const logoIq = useRef(null);
  
 const [width, setWidth] = useState(0);

 useEffect(() => {
    setWidth(logoIq.current.offsetWidth);
    }, []);

  const [logoWidth, setLogoWidth] = useState(250);

return <>
<label id="homeIq"></label>
<div className='topBlockIqMenu' ref={topBlockIqMenu}>
  <div className='iQheaderMenu'>      			
      <div className="logoIq" ref={logoIq}>{width}
      <AnchorLink href="#homeIq"><img src={logo} /></AnchorLink></div>
      <div className="deskMenuIqItems">
          <div><AnchorLink href="#rules" offset='120'>Правила акции</AnchorLink></div>
          <div><AnchorLink href="#gifts" offset='-20'>Розыгрыши призов</AnchorLink></div>
      </div>
      <div className="burgerIq">
          <div onClick={onClickHideMenu}>
          <div className='menuItemsIqMenu'>
              <div><AnchorLink href="#rules" offset='120'>Правила акции</AnchorLink></div>
              <div><AnchorLink href="#gifts" offset='-20'>Розыгрыши призов</AnchorLink></div>        
          </div>
            <div className='redIqMenu'></div>
            <div className='grayIqMenu'></div>
          </div>
        <div className='menuIqMenu'  onClick={onClickShowMenu}>MENU</div>
      </div>    
  </div>
</div>	
</>

};

export default IqMenu;