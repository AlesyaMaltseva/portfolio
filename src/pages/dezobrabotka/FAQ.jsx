import { useState, useEffect } from 'react';
import uuid from 'react-uuid';
import accordionItems from './parts/accordionItems.jsx'

function FAQ() {

const [activeIndex, setActiveIndex] = useState(null);

  // Эффект анимации открытия и закрытия элемента
  useEffect(() => {
    if (activeIndex !== null && activeIndex >= 0) {
      const elementToAnimate = document.querySelector(`#accordion-item-${activeIndex}`);
      
      if (!elementToAnimate.style.maxHeight || elementToAnimate.style.maxHeight === '0px') {
        elementToAnimate.style.maxHeight = `${elementToAnimate.scrollHeight}px`;
      }
    }
    
    return () => {
      if (activeIndex !== null && activeIndex >= 0) {
        const elementToClose = document.querySelector(`#accordion-item-${activeIndex}`);
        
        if (elementToClose.style.maxHeight) {
          elementToClose.style.maxHeight = '0px';
        }
      }
    };
  }, [activeIndex]);

  const handleClick = index => {
    setActiveIndex(index === activeIndex ? null : index); // Переключаем состояние активного индекса
  };

  return (
    <>
      {accordionItems.map((item, i) => (
        <div key={i}>
          {/* Заголовок пункта */}
          <div onClick={() => handleClick(i)} className="cursor-pointer">
            {item[0]}
            {' '}
            <span>{activeIndex === i ? '-' : '+'}</span>
          </div>
          
          {/* Скрытый контент */}
          <div id={`accordion-item-${i}`} style={{ maxHeight: activeIndex === i ? `${document.querySelector(`#accordion-item-${i}`)?.scrollHeight ?? 0}px` : '0', overflow: 'hidden', transition: 'max-height 0.5s ease' }}>
            {item[1]}
          </div>
        </div>
      ))}
    </>
  );
};

export default FAQ;