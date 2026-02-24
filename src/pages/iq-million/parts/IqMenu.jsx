import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {useEffect, useLayoutEffect, useRef, useState} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import '../css/IqMenu.scss';
import BurgerIq from './BurgerIq.jsx'
import logo from "../img/iq-logo.png";
import iq from '../css/iq.module.css';
gsap.registerPlugin(useGSAP,ScrollTrigger);

function IqMenu() {
// Скролл 

const topBlockIqMenu = useRef();
const iQheaderMenu = useRef();
const burgerMenu = useRef();
const logoIq = useRef();
const { contextSafe } = useGSAP({scope: topBlockIqMenu}); 

const getLogoWidth = () => {
  let width; 
  if (window.innerWidth > 800) {
    width = 250;
  } else  {
    width = 170;
  }
  return width;
}

useGSAP(() => {
  
  gsap.to(".logoIq", {
  width:getLogoWidth()*0.56,
  duration: 1,
  ease: "elastic",
  scrollTrigger: {
    trigger: ".logoIq",
    start: 0, 
    isTouch: 2,
    toggleActions: "play none none reset",         
    onEnterBack: () => {      
      gsap.to(".logoIq", {
      width: getLogoWidth(),     
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".logoIq",
        isTouch: 2,
        toggleActions: "play none none reset",        
      }})} 

    }}) 
  
  gsap.to(".topBlockIqMenu", {
  boxShadow: '0 -3em 3em rgba(0, 0, 0, 0.1), 0.3em 0.3em 1em rgba(85, 85, 85, 0.3',
  ease: "expo.out",
   scrollTrigger: {    
    trigger: ".topBlockIqMenu",
    start: 0,
    toggleActions: "play none none reset",
    onEnterBack: () => {
      gsap.to(".topBlockIqMenu", {          
      ease: "expo.out",
      boxShadow: '0 -3em 3em rgba(0, 0, 0, 0.1), 0.3em 0.3em 1em rgba(85, 85, 85, 0',
      scrollTrigger: {
        trigger: ".topBlockIqMenu",
        isTouch: 2,
        toggleActions: "play none none reset"
      }
    })  
  }
    }}) 

  gsap.to('.deskMenuIqItems', {
    y:-100,
    duration:1,  
    scrollTrigger: {
      trigger: ".topBlockIqMenu",
      start: 0,
      toggleActions: "play none none reset",
      onEnterBack: () => {
        gsap.to(".deskMenuIqItems", {
           y:0,
           scrollTrigger: {
          trigger: ".topBlockIqMenu",
          toggleActions: "play none none reset",
      }})
  }}})

  gsap.fromTo('.deskMenuIqItems div', 
    {y:-200, rotate:66,color:'#a80e8f'}, 
    {y:0, delay:0.3, duration:0.7,stagger:0.12, ease:'back', rotate:0, color:'#000'}
    )

  gsap.to('#burgerMenu', {
    display:'block',
    opacity:1,
    y:-70,
    duration:0.2,  
    scrollTrigger: {
      trigger: ".topBlockIqMenu",
      start: 0,
      toggleActions: "play none none reset",
      onEnterBack: () => {
        gsap.to("#burgerMenu", {
           display:'none',
           opacity:0,
           y:0,
          duration:0.2,
           scrollTrigger: {
          trigger: ".topBlockIqMenu",
          toggleActions: "play none none reset",
      }})
  }}})




})

const [logoWidth, setlogoWidth] = useState();

useLayoutEffect(() => {

const getmenuPos = () => {
  const rect = iQheaderMenu.current.getBoundingClientRect();
  const menuPos = rect.x+rect.width;
  burgerMenu.current.style.left = menuPos+'px'; 
} 
getmenuPos();

  if (logoIq.current) {
     setlogoWidth(logoIq.current.getBoundingClientRect().width);
  }  
  const handleResize = () => {            
            setlogoWidth(logoIq.current.getBoundingClientRect().width);
          };
          window.addEventListener("resize", () => {handleResize(), getLogoWidth(), getmenuPos()}); 
                   
          return () => {
          window.removeEventListener("resize", () => {handleResize(), getLogoWidth(), getmenuPos()});        
        }
}, [])


return <>

<label id="homeIq"></label>
<div id='burgerMenu' ref={burgerMenu}><BurgerIq /></div>
<div className='topBlockIqMenu' ref={topBlockIqMenu}>

  <div className='iQheaderMenu' ref={iQheaderMenu}>     			
        <div className="logoIq"  ref={logoIq}>
             <AnchorLink href="#homeIq"><img src={logo} /></AnchorLink>
        </div>     
      <div className="deskMenuIqItems">
          <div><AnchorLink href="#rules" offset='120'>Правила акции</AnchorLink></div>
          <div><AnchorLink href="#gifts" offset='-20'>Розыгрыши призов</AnchorLink></div>
      </div>
     </div>   
</div>
	

</>

};

export default IqMenu;