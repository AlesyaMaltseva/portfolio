import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import {React} from 'react';
import {useState,useEffect} from 'react';
import iq from '../css/iq.module.css';

gsap.registerPlugin(useGSAP);

function IqTop() {

useGSAP(() => {  

gsap.set('#'+iq.red, {width:30, height:30, borderRadius:50, opacity:0});
gsap.set('#'+iq.menuItems, {display:'none'});
gsap.set('#'+iq.gray, {display:'none'});


let timeL = gsap.timeline();
timeL.to('#'+iq.red, {
  duration: 0.2, 
  scale:18,  
  opacity:1,
  ease: 'power2.out',
  overflow:'hidden'
})
.to('#'+iq.menuItems, {
  display:"block",
  duration: 0,  
})
.to('#'+iq.menuItems > 'div', {
  opacity:1,
  x:-70,
  duration: 0.15,
  stagger: 0.1,  
  ease: 'power2.out'
});

let gray  = gsap.timeline();
gray.to('#'+iq.gray, {
  display:"block",
  opacity:0.3,
  ease: 'power2.out',
  duration: 0.5 
});

timeL.pause();
gray.pause();

//  let menuItems = document.querySelector("#menuItems");
//  let red = document.querySelector("#red");
//  let grayB = document.querySelector("#gray");

//  function hide(a, b) {
//     a.reverse(); b.reverse()
//  }

// document.querySelector("#menu").addEventListener("onClick", () => {timeL.play(); gray.play()});
// red.addEventListener("click", () => hide(timeL,gray));
// menuItems.addEventListener("click", () => hide(timeL,gray));
// grayB.addEventListener("click", () => hide(timeL,gray));
})

return <>
<div id={iq.topBlock}>
    <div id={iq.menuItems} onClick={() => {timeL.resume(); gray.resume()}}>
        <div>Правила</div>
        <div>Розыгрыши призов</div>        
    </div>
    <div id={iq.red} onClick={() => {timeL.resume(); gray.resume()}}></div>
    <div id={iq.gray} onClick={() => {timeL.resume(); gray.resume()}}></div>
    <div id={iq.menu} onClick={() => {timeL.play(); gray.play()}}>MENU</div> 
</div>
</>

};

export default IqTop;