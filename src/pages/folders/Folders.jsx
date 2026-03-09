import ScrollToTop from '../../parts/ScrollToTop.js';
import { useState, useRef, useEffect, Fragment } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from "@gsap/react";
import CategoryButton from './js/CategoryButton';
import ProductButton from './js/ProductButton';
import ProductCard from './js/ProductCard';
import "./css/folders.scss";
import productsData from './js/productsData.js';
//import fold from "./css/folders.module.css";



gsap.registerPlugin(useGSAP);

function Folders() {

  const [selectedCategory, setSelectedCategory] = useState('Папки-регистраторы');
  const [selectedProduct, setSelectedProduct] = useState(1);

  // Функция перехода на новую категорию
  const selectCategory = category => {
    setSelectedCategory(category);
    setSelectedProduct(productsData.find(cat => cat.category === category)?.items[0]?.id);        
  };

  // Выбор нового товара
  const selectProduct = productId => {
    setSelectedProduct(productId);
  };

  //Отображение списка товаров для выбранной категории
  const currentProducts = productsData.find(cat => cat.category === selectedCategory)?.items || [];
 
useEffect(() => { 
  document.body.style.backgroundColor = '#D5E9FA';
        return () => {
            document.body.style.backgroundColor = null;
        };
      });

useEffect(() => {  
  const activeCardElement = document.querySelector('.active-product');

  if (activeCardElement) {
    // Запускаем анимацию выхода только если меняется текущий продукт
    gsap.fromTo(activeCardElement, 
      {x: '100%',
        opacity:0,
      },
      {
      duration: 1,
      ease: 'back.out',
      opacity:1,
      x: '0%',
      onComplete: () => {
        activeCardElement.classList.remove('active-product');             
      }
    });
  }
}, [selectedProduct]);

  return (
    <>
    <ScrollToTop />
<div className='foldBg'>
    <div className="foldPapki">        
        <div className="foldWhat">
          <h2>Что храним?</h2>    
      
      {/* Верхний уровень — выбор категории */}
      <div className="foldTabs">
        {productsData.map(cat => (
           <CategoryButton
              key={cat.category} 
              categoryName={cat.category} 
              catClassName={`foldCatButton ${cat.category === selectedCategory ? 'foldActive' : ''}`} 
              onClick={selectCategory} />
         ))}
      </div>
      </div>
      {/* Блок активных товаров */
      currentProducts.length > 0 &&
        <div className="foldProductsContainer"><h2>Размер коробки</h2>
          <div className="foldProductList">            
            {currentProducts.map(item => (
              <Fragment key={item.id}>
                <ProductButton                
                  productId={item.id}
                  label={item.name}
                  itemClassName={`foldItemButton ${item.id === selectedProduct ? 'foldActive' : ''}`}
                  onSelectProduct={selectProduct}
                />
              </Fragment>
            ))}
          </div>
          
          {/* Показываем активный продукт */
          currentProducts.find(item => item.id === selectedProduct) && (
             <ProductCard
              title={currentProducts.find(item => item.id === selectedProduct).name}
              description={currentProducts.find(item => item.id === selectedProduct).desc}
              image={currentProducts.find(item => item.id === selectedProduct).img}
              folders={currentProducts.find(item => item.id === selectedProduct).folders}              
              isActive={currentProducts.find(item => item.id === selectedProduct)}              
            />
          )}
        </div>}
        </div>      
     </div>   
    </>
  );
};


export default Folders;