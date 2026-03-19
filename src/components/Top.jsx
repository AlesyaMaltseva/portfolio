import { useState, useRef, useEffect, useLayoutEffect } from 'react';
import TopMobile from './TopMobile.jsx';
import TopDesktop from './TopDesktop.jsx';
import useMobileWidthDetect from '../parts/useMobileWidthDetect.js'


const Top = () => {
  const {isMobileWidth} = useMobileWidthDetect();
  
  return (
    <>
      {isMobileWidth ? <TopMobile /> : <TopDesktop />}
    </>
  );
};

export default Top;