import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from 'react';
import '../css/iqTop.css';
gsap.registerPlugin(useGSAP);


function IqTop() {

const topBlockIqTop = useRef();

const { contextSafe } = useGSAP({scope: topBlockIqTop});  

const onClickShowMenu = contextSafe(() => {
	gsap.to('.grayIqTop', {
  opacity:0.2,
  duration: 0.5,
  ease: 'power2.out'
  })
  gsap.to('.redIqTop', {
  duration: 0.3, 
  scale:18,  
  opacity:1,
  ease: 'power2.out'
})
  gsap.to('.menuItemsIqTop div', {
  opacity:1,
  x:-120,
  duration: 0.2,
  stagger: 0.2, 
  delay:0.25, 
  ease: 'power2.out'
  })  
});

const onClickHideMenu = contextSafe(() => {  
  gsap.to('.menuItemsIqTop div', { 
   opacity:0,
  x:70,
  duration: 0.3,
  stagger: -0.1,  
  delay:0.1,
  ease: 'power2.out'
})   
  gsap.to('.redIqTop', {
  duration: 0.3, 
  scale:0,  
  opacity:0,
  delay:0.4,
  ease: 'power2.out'
})
  gsap.to('.grayIqTop', {
  opacity:0,
  duration: 0.5,
  ease: 'power2.out'
  })
});

return <>
<div className='topBlockIqTop' ref={topBlockIqTop}>
    <div onClick={onClickHideMenu}>
      <div className='menuItemsIqTop'>
          <div>Правила</div>
          <div>Розыгрыши призов</div>        
      </div>
      <div className='redIqTop'></div>
      <div className='grayIqTop'></div>
    </div>
    <div className='menuIqTop'  onClick={onClickShowMenu}>MENU</div>    
</div>
</>

};

export default IqTop;