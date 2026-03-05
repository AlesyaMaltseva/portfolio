import { useState, useCallback } from 'react';

const ProductButton = ({ productId, label, itemClassName, onSelectProduct }) => {
  const handleClick = () => {
    onSelectProduct(productId); // Передаем id выбранного товара
  };

  return (
    <button className={itemClassName} onClick={handleClick}>
      {label}
    </button>
  );
};

export default ProductButton;