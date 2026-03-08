import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import {v1 as uuidv1} from 'uuid';
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

const ProductCard = ({ title, description, image, folders, isActive }) => {
  const cardRef = useRef(null);

 useEffect(() => {
    if (cardRef.current) {
      if (isActive) {
        cardRef.current.classList.add('active-product');
      } else {
        cardRef.current.classList.remove('active-product');
      }
    }
  }, [isActive]);
  

  return (
    <div ref={cardRef} className={`foldProductCard ${isActive ? '' : 'hidden'}`}>
        <div className="line">  
          <div className="foldMainImg"><img src={image} /></div>        
            <div className="foldDescription">              
                <h2>Коробка {title} мм</h2>
                <p>{description}</p>
                <h3>Вмещает:</h3>
            </div>
        </div>
        <div className="foldProductsBlock"> 
            <div className="foldFoldersBlock">                      
              {folders.map(fold=>
                <div className="foldProducts" key={uuidv1()}>
                  <div className="foldCont">x{fold.cont}</div>
                  <div className="foldSize">Папки {fold.size} мм</div>
                  <div className="foldImg"><img src={fold.img} /></div>
                </div>
              )}
            </div>
        </div>
      </div>    
  );
};

export default ProductCard;