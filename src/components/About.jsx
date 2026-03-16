import { useState, useRef } from 'react';
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

document.fonts.ready.then(() => {

const about = gsap.timeline();

gsap.to(".hi", {
  opacity:1,
  duration: 1,
  delay:0.3,
}) 

let splitHi = SplitText.create(".hi", { type: "words, chars" });  //НАЧАЛО
gsap.from(splitHi.chars, {
   x: 250,
    opacity: 1,
    duration: 0.7, 
    ease: "power4.out",
    //delay:0.5,
    stagger: 0.07    
});

gsap.to(".nameis", {
  opacity:1,
  duration: 0.6,
  delay:0.8,
}) 

let splitNameIs = SplitText.create(".nameis", { type: "words, chars" });
gsap.from(splitNameIs.chars, {
   x: 250,
    duration: 0.6, 
    ease: "power4",
    delay:0.6,
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
    delay:1.4, 
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
     delay:1.4,
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
   delay:1.35,
}
)

gsap.to('.text', {
  opacity:1,
  duration: 0.5, 
  delay:1.3,
})

let splitText = SplitText.create(".text", { type: "words, lines" });
gsap.from(splitText.words, {
   y: -100,
    opacity: 0,
    rotation: "random(-120, 80)",
    duration: 0.8, 
    ease: "back.out",
    stagger: 0.05,    
    transformOrigin: "50% 50% -180px",
    rotationX: -50,
    delay:1.3,
});

gsap.to(splitText.lines, {
  y:-30,
  // /transformOrigin: "100% 100% 0px",    
    duration: 1.5, 
    ease: "back.out",
    stagger: 0.1,
    delay:1.3,
    
});
 });
});	

  return  <>
         <div className="first">
            <div className="hi button">Привет!</div>
            <div className="nameis" title="Знаю, что со строчной неправильно, но мне так нравится.">меня зовут</div>
            <div className="name">
              <div className='namePhoto'>
                  <div className="firstname">Алеся</div>
                  <div className="avatar"><img src={avatar} /></div>
              </div> 
              <div className="surname">Мальцева</div>
            </div>
          <div className="text">Я HTML-верстальщик и контент-менеджер. Это мой сайт-портфолио, где есть информация об опыте работы, образованиях, а также некоторые выполненные проекты. Благодарю вас за посещение и проявленный интерес.</div>
        </div>        
    </>  
}

export default About;
