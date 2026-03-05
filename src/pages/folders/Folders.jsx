import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from "@gsap/react";
import CategoryButton from './js/CategoryButton';
import ProductButton from './js/ProductButton';
import ProductCard from './js/ProductCard';
import "./css/folders.css";
import productsData from './js/productsData.js';
import fold from "./css/folders.module.css";

gsap.registerPlugin(useGSAP);

function Folders() {

  const [selectedCategory, setSelectedCategory] = useState('Папки-регистраторы');
  const [selectedProduct, setSelectedProduct] = useState(1);

  // Функция перехода на новую категорию
  const selectCategory = category => {
    setSelectedCategory(category);
    setSelectedProduct(productsData.find(cat => cat.category === category)?.items[0].id);
        
  };

  // Выбор нового товара
  const selectProduct = productId => {
    setSelectedProduct(productId);
  };

  //Отображение списка товаров для выбранной категории
  const currentProducts = productsData.find(cat => cat.category === selectedCategory)?.items || [];
 

  useEffect(() => {
    const prevCardElement = document.querySelector('.active-product');
    if (prevCardElement && !currentProducts.some(p => p.id === selectedProduct)) {
      gsap.to(prevCardElement, {
        duration: 0.8,
        x: '0%', 
        opacity: 0,
        onComplete() {
          prevCardElement.classList.remove('active-product');
        }
      });
    }
  }, [selectedProduct]);

  return (
    <>
<div className={fold.bG}>
    <div className={fold.papki}>
        <div className={fold.headbox}>
            <div className={fold.what}>
                <p>Что храним?</p>
      {/* Верхний уровень — выбор категории */}
      
      
      <div className={fold.tabs}>
        {productsData.map(cat => (
           <CategoryButton
              key={cat.category} 
              categoryName={cat.category} 
              catClassName={`catButton ${cat.category === selectedCategory ? 'active' : ''}`} 
              onClick={selectCategory} />
         ))}
      </div>
      </div>
      {/* Блок активных товаров */
      currentProducts.length > 0 &&
        <div className="products-container">
          <ul className="product-list">
            {currentProducts.map(item => (
              <li key={item.id}>
                <ProductButton
                  productId={item.id}
                  label={item.name}
                  itemClassName={`itemButton ${item.id === selectedProduct ? 'active' : ''}`}
                  onSelectProduct={selectProduct}
                />
              </li>
            ))}
          </ul>
          
          {/* Показываем активный продукт */
          currentProducts.find(item => item.id === selectedProduct) && (
            <ProductCard
              title={currentProducts.find(item => item.id === selectedProduct).name}
              description={currentProducts.find(item => item.id === selectedProduct).desc}
              image={currentProducts.find(item => item.id === selectedProduct).img}
              folders={currentProducts.find(item => item.id === selectedProduct).folders}              
              isActive={true}
            />
          )}
        </div>}
        </div>
      </div>
     </div>   
    </>
  );
};


export default Folders;