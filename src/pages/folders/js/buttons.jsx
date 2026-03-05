import React, { useState } from 'react';
import './App.css'; // Подключаем стили

const categories = [
  {
    name: 'Категория 1',
    items: ['Товар 1', 'Товар 2', 'Товар 3']
  },
  {
    name: 'Категория 2',
    items: ['Товар A', 'Товар B', 'Товар C']
  },
  {
    name: 'Категория 3',
    items: ['Продукт X', 'Продукт Y', 'Продукт Z']
  }
];

const App = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [activeItemIndex, setActiveItemIndex] = useState(0); // По умолчанию активен первый элемент выбранной категории

  return (
    <div className="container">
      {/* Кнопки категорий */}
      <ul className="categories">
        {categories.map((category, index) => (
          <li key={index}>
            <button
              onClick={() => {
                setActiveCategoryIndex(index);
                setActiveItemIndex(0); // При смене категории делаем активным первый товар
              }}
              className={`btn ${index === activeCategoryIndex ? 'active' : ''}`}
            >
              {category.name}
            </button>
          </li>
        ))}
      </ul>
      
      {/* Товарные кнопки текущей активной категории */}
      <ul className="items">
        {categories[activeCategoryIndex].items.map((item, itemIndex) => (
          <li key={itemIndex}>
            <button
              onClick={() => setActiveItemIndex(itemIndex)}
              className={`btn-item ${itemIndex === activeItemIndex ? 'active' : ''}`}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;