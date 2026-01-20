import { useState } from 'react'
import { useRef } from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { CustomEase } from "gsap/CustomEase";
// CustomBounce requires CustomEase
import { CustomBounce } from "gsap/CustomBounce";
// CustomWiggle requires CustomEase
import { CustomWiggle } from "gsap/CustomWiggle";
import { RoughEase, ExpoScaleEase, SlowMo } from "gsap/EasePack";
    
import { Draggable } from "gsap/Draggable";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { EaselPlugin } from "gsap/EaselPlugin";
import { Flip } from "gsap/Flip";
import { GSDevTools } from "gsap/GSDevTools";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { Observer } from "gsap/Observer";
import { Physics2DPlugin } from "gsap/Physics2DPlugin";
import { PhysicsPropsPlugin } from "gsap/PhysicsPropsPlugin";
import { PixiPlugin } from "gsap/PixiPlugin";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// ScrollSmoother requires ScrollTrigger
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { SplitText } from "gsap/SplitText";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(useGSAP,Draggable,DrawSVGPlugin,EaselPlugin,Flip,GSDevTools,InertiaPlugin,MotionPathHelper,MotionPathPlugin,MorphSVGPlugin,Observer,Physics2DPlugin,PhysicsPropsPlugin,PixiPlugin,ScrambleTextPlugin,ScrollTrigger,ScrollSmoother,ScrollToPlugin,SplitText,TextPlugin,RoughEase,ExpoScaleEase,SlowMo,CustomEase,CustomBounce,CustomWiggle);
//grapheme

function App() {
useGSAP(() => { 
  
// //Word split
// const segmenterW = new Intl.Segmenter("zh", { granularity: "word" });
// const segmenterL = new Intl.Segmenter("qw", { granularity: "grapheme" });

// document.fonts.ready.then(() => {
//   gsap.set(".text", { opacity: 1 });

//   const split1 = SplitText.create(".text", {
//     type: "words",
//     wordsClass: "word",
//     prepareText: (text, el) => {
//       return [...segmenterW.segment(text)].map(s => s.segment).join(String.fromCharCode(8204))
//     },
//     wordDelimiter: { delimiter: /\u200c/, replaceWith: "" },
//     autoSplit: true,
//     onSplit: (self) => {
//       return gsap.from(self.words, {
//         y: 50,
//         opacity: 0,
//         stagger: 0.1,
//         ease: "back",
//         delay:2
//       });
//     }
//   });

//   const split2 = SplitText.create(".hi", {
//     type: "words",
//     wordsClass: "word",
//     prepareText: (text, el) => {
//       return [...segmenterL.segment(text)].map(s => s.segment).join(String.fromCharCode(8204))
//     },
//     wordDelimiter: { delimiter: /\u200c/, replaceWith: "" },
//     autoSplit: true,
//     onSplit: (self) => {
//       return gsap.from(self.words, {
//         y: -120,
//         opacity: 0,
//         stagger: 0.08,
//         ease: "back",
//         delay:0.1
//       });
//     }
//   });
// });

let splitHi = SplitText.create(".hi", { type: "words, chars" });
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
     delay:3
});

gsap.to(".name .first", { 
    ease: "elastic.out(1,0.3)", 
    x: 100, 
    duration: 1 });


gsap.to('.box1', {
	scrollTrigger: '.box1', // start the animation when ".box" enters the viewport (once)
	x: 500
});

// gsap.from(splitText.lines, {
//    rotationX: -50,
//     transformOrigin: "50% 50% -160px",    
//     duration: 0.8, 
//     ease: "power3",
//     stagger: 0.05,
//     delay:1
// });

});	


  return  <>
      <div id="content">
        <div className="block block1">
          <div className="first">
            <div className="hi button">Привет!</div>
            <div className="nameis" title="Знаю, что со строчной неправильно, но мне так нравится.">меня зовут</div>
            <div className="name">
              <div className="first">Алеся <img src="src/assets/img/beach.jpg" /></div>
              <div className="surname">Мальцева</div>
            </div>
          <div className="text">Этот инструмент помогает легко<br />и быстро создать различные текстовые<br />документы и многое другое.</div>
        </div>
        </div>
        <div className="block block2">
          <div>В CSS3 были добавлены новые относительные единицы измерения, такие как vh, vw, vmin, vmax. Эти единицы вычисляются относительно размеров окна браузера.</div>
        </div>
        <div className="block block3">
          <div>Одно правило для body — height: 100vh — задает высоту вашему приложению равной высоте области просмотра.</div>
        </div>
      </div>
    </>  
}

export default App
