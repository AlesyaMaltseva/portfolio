import { useState, useCallback, useRef } from 'react';
import { gsap } from 'gsap';

const CategoryButton = ({ categoryName, catClassName, onClick }) => {

  const handleClick = () => {
    // Переход на выбранную категорию
    onClick(categoryName);    
  };

  return (
    <button className={catClassName} onClick={handleClick}>
      {categoryName}
    </button>
  );
};

export default CategoryButton;