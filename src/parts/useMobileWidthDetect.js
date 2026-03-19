import React, { useState, useEffect } from 'react';

const useMobileWidthDetect = () => {
  const [isMobileWidth, setIsMobileWidth] = useState(window.innerWidth <= 800);

  useEffect(() => {    
    const handleResize = () => setIsMobileWidth(window.innerWidth <= 800);
    window.addEventListener('resize', handleResize);    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { isMobileWidth };
};

export default useMobileWidthDetect;