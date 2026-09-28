import { gsap } from "gsap/dist/gsap";
import { useState, useRef,useEffect,useLayoutEffect } from 'react';
import { useGSAP } from "@gsap/react/dist";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useMobileWidthDetect from './useMobileWidthDetect.js';

function mainBlocksScrollGSAP() {
const { isMobileWidth } = useMobileWidthDetect();
useEffect(()=>{
  
if (isMobileWidth) {
      // Если мобильный — убиваем все ScrollTrigger, связанные с этим элементом
      //ScrollTrigger.getAll().forEach(t => t.kill());
      return;
    }
 const blocksConfig = [
    //{ id: '#portfolio', xFrom: 0, yFrom: 0 },
    { id: '#experience', xFrom: window.innerWidth+50, yFrom: -window.innerHeight, yTo:-window.innerHeight },
    { id: '#projects', xFrom: -window.innerWidth-50,  yFrom: -window.innerHeight*2, yTo:-window.innerHeight*2 },
    { id: '#contacts', xFrom: window.innerWidth+50,  yFrom: -window.innerHeight*2.8, yTo:-window.innerHeight*2.8 },
    // Добавь сюда другие блоки, если они есть
  ];

  blocksConfig.forEach(config => {
    const el = document.querySelector(config.id);
    if (!el) return;

    // Создаем анимацию появления для конкретного блока
    const blockTl = gsap.timeline({ paused: true })
      .fromTo(el, { x: config.xFrom, y: config.yFrom}, { x: 0, y: config.yTo});

    // Создаем ScrollTrigger для конкретного блока
    ScrollTrigger.create({
      trigger: el,
      start: '-=5px top', // Начало анимации, когда верх блока касается верха окна
      end: () => `+=${el.offsetHeight}`, // Конец анимации = высота блока (прокрутка до низа)
      animation: blockTl,
      scrub: true, // Плавная анимация при скролле (если нужно)
      snap: {
      snapTo: 1, // привязка к 50% прокрутки
      duration: 1, // скорость snap (чем меньше, тем быстрее)
      delay: 0
    },
      pin: true, // Фиксируем блок на экране
      anticipatePin: 0.5, // Сглаживание перехода в фиксированное положение
      pinSpacing: true, // Убираем лишние отступы (важно для лендингов)
      markers: true // Убери в продакшене
    });
  });

//   gsap.defaults({ease:'none', duration:0.3})  
//    const mainBlocks = gsap.timeline();
//    mainBlocks.fromTo('#experience',
//     {x:window.innerWidth,},
//     {x:'0px',}
// )
//     .fromTo('#projects',
//     {x:"-"+window.innerWidth,},
//     {x:'0px',}
// )
// .fromTo('#contacts',
//     {y:window.innerHeight,},
//     {y:'0px',}
// );

//   ScrollTrigger.create({
//       animation: mainBlocks,
//       trigger: blocks.current,
//       start: 'top top',
//       end: '+=6000px',
//       //ease:'none',
//       scrub: 0.1,
//     pin: true,
//      snap: 1/3,
//       anticipatePin: true,
//       markers: true,
//      });



 //ScrollTrigger.addEventListener("refresh", () => gsap.updateScroll());
//ScrollTrigger.refresh();

      return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };

}, [isMobileWidth]);
 
}

export default mainBlocksScrollGSAP;