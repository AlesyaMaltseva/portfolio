import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import {v1 as uuidv1} from 'uuid';
import fold from "../css/folders.module.css";

const ProductCard = ({ title, description, image, folders, isActive }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    if (!isActive || !cardRef.current) return;
    
    // Анимация появления карточки слева направо
    gsap.from(cardRef.current,  {
      duration: 0.8,
      x: '0%',
      ease: 'power2.out',
    });
  }, [isActive]);

  return (
    <div ref={cardRef} className={`product-card ${isActive ? '' : 'hidden'}`}>
      <h2>Коробка {title} мм</h2>
      <p>{description}</p>
      <p><img src={image} /></p>
          {folders.map(fold=>
              <div key={uuidv1()}>
                <div>x{fold.cont}</div>
                <div>Папки {fold.size} мм</div>
                <div><img src={fold.img} /></div>
              </div>
            )}       
     </div>
  );
};

export default ProductCard;