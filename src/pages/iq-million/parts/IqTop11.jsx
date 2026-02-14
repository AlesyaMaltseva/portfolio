import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from 'react';
import {React} from 'react';
import {ReactDOM} from 'react-dom'
import {useState,useEffect} from 'react';
import iq from '../css/iq.module.css';
import '../css/iqTop.css';
gsap.registerPlugin(useGSAP);


function IqTop() {

const topBlockIqTop = useRef();
const menuItemsIqTop = useRef();
const redIqTop = useRef();
const grayIqTop = useRef();
const menuIqTop = useRef();


const { contextSafe } = useGSAP(() => {  

gsap.set('.redIqTop', {width:30, height:30, borderRadius:50, opacity:0});
gsap.set('.menuItemsIqTop', {display:'none'});
gsap.set('.grayIqTop', {display:'none'});


let timeL = gsap.timeline();
timeL.to('.redIqTop', {
  duration: 0.2, 
  scale:18,  
  opacity:1,
  ease: 'power2.out',
  overflow:'hidden'
})

.to('.menuItemsIqTop', {
  display:"block",
  duration: 0,  
})

.to('.menuItemsIqTop', {
  opacity:1,
  x:-70,
  duration: 0.15,
  stagger: 0.1,  
  ease: 'power2.out'
});

let gray  = gsap.timeline();
gray.to('.grayIqTop', {
  display:"block",
  opacity:0.3,
  ease: 'power2.out',
  duration: 0.5 
});


timeL.pause();
gray.pause();

function hide() {
  timeL.reverse(); 
  gray.reverse();      
 }
function show() {
    timeL.play(); 
    gray.play();    
 }

 function hide() {
  timeL.reverse(); 
  gray.reverse();    
 }
function show() {
    timeL.play(); 
    gray.play();    
 }


}, { scope: topBlockIqTop })



return <>
<div className='topBlockIqTop' ref={topBlockIqTop}>
    <div className='menuItemsIqTop' ref={menuItemsIqTop}>
        <div>Правила</div>
        <div>Розыгрыши призов</div>        
    </div>
    <div className='redIqTop' ref={redIqTop} onClick={hide}></div>
    <div className='grayIqTop' ref={grayIqTop} onClick={hide}></div>
    <div className='menuIqTop' ref={menuIqTop} onClick={show}>MENU</div>    
</div>
</>

};

export default IqTop;