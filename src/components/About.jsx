import { useState, useRef } from 'react';
import uuid from 'react-uuid';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(useGSAP,SplitText,ScrollTrigger);

import avatar from '/src/assets/img/avatar.jpg'; 


function About() {

// const importAll = (r) => {
//     let images = {} // Declare an empty images object
//     r.keys.map((item,index)=>{images[item.replace('./','')] = r(item).default;}) // Process all images to be placed in images obj with their file names!
//     return images // Return the images
// }

useGSAP(() => { 
const about = gsap.timeline();

let splitHi = SplitText.create(".hi", { type: "words, chars" });  //НАЧАЛО
gsap.from(splitHi.chars, {
   x: 250,
    opacity: 0,
    duration: 0.4, 
    ease: "power4",
    delay:0.7,
    stagger: 0.05    
});

let splitNameIs = SplitText.create(".nameis", { type: "words, chars" });
gsap.from(splitNameIs.chars, {
   x: 250,
    opacity: 0,
    duration: 0.4, 
    ease: "power4",
    delay:1.3,
    stagger: 0.05    
});

gsap.fromTo(".name .firstname", {     
    y: 20, 
    opacity:0,     
  },
  {
    ease: "back.out(1,0.3)", 
    y:0, 
    opacity:1,
    delay:1.8, 
  }
);

  gsap.fromTo(".name .surname", {      
    y: -20, 
    opacity:0,     
  },
  {
    ease: "back.out(1,0.3)",
    y:0,
     opacity:1, 
     delay:1.8,
  }
);   

gsap.fromTo(".name .avatar", {
  opacity:0,
  y:-150,  
}, {
  opacity:1,
  duration:0.8,
  y:0,
  ease:"back.out",
   delay:1.7,
}
)


let splitText = SplitText.create(".text", { type: "words, chars, lines" });
gsap.from(splitText.words, {
   y: -100,
    opacity: 0,
    rotation: "random(-100, 80)",
    duration: 0.8, 
    ease: "back.out",
    stagger: 0.05,    
    transformOrigin: "50% 50% -180px",
    rotationX: -50,
    delay:2,
});

gsap.fromTo(splitText.lines, {
  y:-200,
    
}, {
  y:-40,
  transformOrigin: "100% 100% 0px",    
    duration: 1, 
    ease: "back.out",
    stagger: 0.03,
    delay:2.1,
}

);

});	

  return  <>
         <div className="first">
            <div className="hi button">Привет!</div>
            <div className="nameis" title="Знаю, что со строчной неправильно, но мне так нравится.">меня зовут</div>
            <div className="name">
              <div className='namePhoto'>
                  <div className="firstname">Алеся</div>
                  <div className="avatar"><img src={avatar}  /></div>
              </div> 
              <div className="surname">Мальцева</div>
            </div>
          <div className="text">Я HTML-верстальщик и контент-менеджер. Это мой сайт-портфолио, где есть информация об&nbsp; опыте работы, образованиях, а&nbsp;также некоторые выполненные проекты. Благодарю вас за&nbsp;посещение и&nbsp;проявленный интерес.</div>
        </div>        
    </>  
}

export default About;
