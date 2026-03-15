import { useState, useRef, useEffect, useLayoutEffect } from 'react';
import TopMobile from './TopMobile.jsx';
import TopDesktop from './TopDesktop.jsx';


const Top = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  // Обработчик изменения размеров окна
  const handleResize = () => {
    if (window.innerWidth <= 800) {
      setIsMobileView(true); // Показывать мобильный компонент
    } else {
      setIsMobileView(false); // Показывать десктопный компонент
    }
  };

  // Устанавливаем обработчик события resize
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    
    // Выполняем проверку сразу при загрузке страницы
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {isMobileView ? <TopMobile /> : <TopDesktop />}
    </>
  );
};

export default Top;