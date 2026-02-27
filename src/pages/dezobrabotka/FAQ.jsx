import { useState, useEffect } from 'react';
import accordionItems from './parts/accordionItems.jsx';
import plus from './img/plus.png';
import minus from './img/minus.png';

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
        <div key={i} className="FAQitem">
          {/* Заголовок пункта */}
          <div onClick={() => handleClick(i)} className="question">
            {item[0]}
            {' '}
            <span className="sign">{activeIndex === i ? <img src={minus} /> : <img src={plus} />}</span>
          </div>
          
          {/* Скрытый контент */}
          <div id={`accordion-item-${i}`} className="answer" style={{ maxHeight: activeIndex === i ? `${document.querySelector(`#accordion-item-${i}`)?.scrollHeight ?? 0}px` : '0', overflow: 'hidden', transition: 'max-height 0.5s ease' }}>
            {item[1]}
          </div>
        </div>
      ))}
    </>
  );
};

export default FAQ;