import { useState, useEffect, Fragment } from 'react';
import accordionItems from './parts/accordionItems.jsx';
import plus from './img/plus.png';
import minus from './img/minus.png';
import {v1 as uuidv1} from 'uuid';

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
         <div key={item[0]} className="FAQitem">
          {/* Заголовок пункта */}
          <div onClick={() => handleClick(i)} className="question">
            {item[1]}
            {' '}
            <span className="sign">{activeIndex === i ? <img src={minus} /> : <img src={plus} />}</span>
          </div>
          
          {/* Скрытый контент */}
          <div id={`accordion-item-${i}`}  className="answer" style={{ maxHeight: activeIndex === i ? `${document.querySelector(`#accordion-item-${i}`)?.scrollHeight ?? 0}px` : '0', overflow: 'hidden', transition: 'max-height 0.5s ease' }}>
            {item[2].map((p, e) => <Fragment key={e}>{p}</Fragment>)}
          </div>
        </div>
      ))}
    </>
  );
};

export default FAQ;