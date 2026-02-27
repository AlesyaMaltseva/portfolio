import $ from 'jquery'
window.jquery = window.$ = $
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {useEffect, useLayoutEffect, useRef, useState} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import '../css/IqMenu.scss';
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(useGSAP,ScrollTrigger,MorphSVGPlugin);

function BurgerIq() {

const burgerIq = useRef();
const burger = useRef();

const { contextSafe } = useGSAP({scope: burgerIq}); 

useGSAP(() =>{
  gsap.set('.burgerIq', {
  xPercent:-100,
  });
})

 useLayoutEffect(()=>{
  const burgerCur = burger.current;

  function resizeViewBox() {
    if(window.innerWidth<620) {
    burgerCur.setAttribute('viewBox', "-40 -20 120 120")
  } else if(window.innerWidth>=630 && window.innerWidth<=800) {
    burgerCur.setAttribute('viewBox', "-40 -27 110 110")
  } else {
    burgerCur.setAttribute('viewBox', "-40 -30 100 100")
    }
  }
   resizeViewBox();

    window.addEventListener('resize', () => {
      resizeViewBox();
    })
    return window.removeEventListener('resize', () => {
      resizeViewBox();
    })

 },[])

const onClickShowMenu = contextSafe(() => {

  gsap.set('.menuItemsIqMenu', { 
  display:'block'
  })

	gsap.to('.grayIqMenu', {
  opacity:0.5,
  duration: 0.5,
  ease: 'power2.out',
  display:'block'
  })

  gsap.to('.yellowIqMenu', {
  duration: 0.5, 
  delay:0.1,
  scale:450,  
  opacity:1,
  ease: 'back'
})
  
  gsap.to('.redIqMenu', {
  duration: 0.3, 
  scale:600,  
  opacity:1,
  ease: 'power2.out'
})
  gsap.to('.menuItemsIqMenu div', {
  display:'block',
  opacity:1,
  x:-140,
  stagger: 0.2,    
  ease: 'power2.out'
})  
gsap.to("#open", {
  morphSVG: "M44.651,49.308c-1.151,0-2.304-0.439-3.182-1.318L2.162,8.682c-1.758-1.757-1.758-4.607,0-6.364,	c1.756-1.757,4.607-1.757,6.363,0l39.308,39.308c1.758,1.757,1.758,4.606,0,6.363C46.955,48.868,45.803,49.308,44.651,49.308z M5.036,49.308c-1.151,0-2.304-0.439-3.182-1.318c-1.758-1.757-1.758-4.606,0-6.363L41.162,2.318,	c1.756-1.757,4.607-1.757,6.363,0c1.758,1.757,1.758,4.607,0,6.364L8.218,47.989C7.34,48.868,6.188,49.308,5.036,49.308z",
  duration: 0.2,
  ease: "none",
  fill: '#a80e8f',  
});
});

const onClickHideMenu = contextSafe(() => { 

gsap.to("#open", {
  morphSVG: "M-4.662,9H54.66C57.608,9,60,6.986,60,4.5C60,2.016,57.608,0,54.66,0H-4.662C-7.61,0-10,2.016-10,4.5 C-10,6.986-7.61,9-4.662,9z M54.66,41H-4.662C-7.61,41-10,43.016-10,45.501S-7.61,50-4.662,50H54.66c2.948,0,5.34-2.014,5.34-4.499S57.608,41,54.66,41 z M54.66,20.5H-4.662C-7.61,20.5-10,22.514-10,25c0,2.484,2.39,4.5,5.338,4.5H54.66c2.948,0,5.34-2.016,5.34-4.5 C60,22.514,57.608,20.5,54.66,20.5z",
  duration: 0.2,
  ease: "none",
  fill: '#000',  
});


  gsap.to('.menuItemsIqMenu div', { 
   opacity:0,
  x:-70,
  duration: 0.3,
  stagger: -0.1,  
  delay:0.1,
  ease: 'power2.out',
  display:'none',
})   

gsap.to('.yellowIqMenu', {
  duration: 0.3, 
  scale:0,  
  opacity:0,
  delay:0.2,
  ease: 'back',
})

  gsap.to('.redIqMenu', {
  duration: 0.3, 
  scale:0,  
  opacity:0,
  delay:0.3,
  ease: 'power2.out'
})
  gsap.to('.grayIqMenu', {
  opacity:0,
  duration: 0.5,
  ease: 'power2.out',
  delay:0.2,
  display:"none"
  })
});

const [istrue, setIstrue] = useState('true');

return <>
    <div className="burgerIq" ref={burgerIq}>
        <div className='menuItemsIqMenu' onClick={()=>{onClickHideMenu(); setIstrue(true)}}>
              <div><AnchorLink href="#rules" offset='120'>Правила акции</AnchorLink></div>
              <div><AnchorLink href="#gifts" offset='-20'>Розыгрыши призов</AnchorLink></div>        
          </div>
        <div className='yellowIqMenu'></div>
        <div className='redIqMenu'></div>
        <div className='grayIqMenu' onClick={()=>{onClickHideMenu(); setIstrue(true)}}></div>
        
        <div className='menuIqMenu' onClick={()=>{
          if(istrue){onClickShowMenu(); setIstrue(false)}
          else {onClickHideMenu(); setIstrue(true)}
          
          }}>

<svg id="burger" ref={burger} xmlns="http://www.w3.org/2000/svg" viewBox="-40 -30 100 100" fill="#000">  
		
    <path id="open" d="M-4.662,9H54.66C57.608,9,60,6.986,60,4.5C60,2.016,57.608,0,54.66,0H-4.662C-7.61,0-10,2.016-10,4.5 C-10,6.986-7.61,9-4.662,9z M54.66,41H-4.662C-7.61,41-10,43.016-10,45.501S-7.61,50-4.662,50H54.66c2.948,0,5.34-2.014,5.34-4.499S57.608,41,54.66,41
		z M54.66,20.5H-4.662C-7.61,20.5-10,22.514-10,25c0,2.484,2.39,4.5,5.338,4.5H54.66c2.948,0,5.34-2.016,5.34-4.5
		C60,22.514,57.608,20.5,54.66,20.5z"/>   

    {/* <path id="close" d="M44.651,49.308c-1.151,0-2.304-0.439-3.182-1.318L2.162,8.682c-1.758-1.757-1.758-4.607,0-6.364
	c1.756-1.757,4.607-1.757,6.363,0l39.308,39.308c1.758,1.757,1.758,4.606,0,6.363C46.955,48.868,45.803,49.308,44.651,49.308z M5.036,49.308c-1.151,0-2.304-0.439-3.182-1.318c-1.758-1.757-1.758-4.606,0-6.363L41.162,2.318
	c1.756-1.757,4.607-1.757,6.363,0c1.758,1.757,1.758,4.607,0,6.364L8.218,47.989C7.34,48.868,6.188,49.308,5.036,49.308z"/> */}
</svg>

        </div>
    </div> 
 </>

};

export default BurgerIq;