import { useState, useRef } from 'react';
import uuid from 'react-uuid';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(useGSAP,SplitText,ScrollTrigger);

import avatar from '/src/assets/img/avatar.jpg'; 


function About() {

const importAll = (r) => {
    let images = {} // Declare an empty images object
    r.keys.map((item,index)=>{images[item.replace('./','')] = r(item).default;}) // Process all images to be placed in images obj with their file names!
    return images // Return the images
}

useGSAP(() => { 
  
let splitHi = SplitText.create(".hi", { type: "words, chars" });  //НАЧАЛО
gsap.from(splitHi.chars, {
   x: 250,
    opacity: 0,
    duration: 0.5, 
    ease: "power4",
    delay:0.3,
    stagger: 0.05    
});

let splitNameIs = SplitText.create(".nameis", { type: "words, chars" });
gsap.from(splitNameIs.chars, {
   x: 250,
    opacity: 0,
    duration: 0.5, 
    ease: "power4",
    delay:0.8,
    stagger: 0.05    
});

let splitText = SplitText.create(".text", { type: "words, chars, lines" });
gsap.from(splitText.words, {
   y: -100,
    opacity: 0,
    rotation: "random(-100, 80)",
    duration: 0.5, 
    ease: "back",
    stagger: 0.08,
     delay:1.3
});

gsap.to(".name .first", { 
    ease: "elastic.out(1,0.3)", 
    x: 100, 
    duration: 1 });

gsap.from(splitText.lines, {
   rotationX: -50,
    transformOrigin: "50% 50% -160px",    
    duration: 0.8, 
    ease: "power3",
    stagger: 0.05,
    delay:1
});

});	

  return  <>
         <div className="first">
            <div className="hi button">Привет!</div>
            <div className="nameis" title="Знаю, что со строчной неправильно, но мне так нравится.">меня зовут</div>
            <div className="name">
              <div className="first">Алеся <img src={avatar}  /></div>
              <div className="surname">Мальцева</div>
            </div>
          <div className="text">Этот инструмент помогает легко<br />и быстро создать различные текстовые<br />документы и многое другое.</div>
        </div>        
    </>  
}

export default About;
