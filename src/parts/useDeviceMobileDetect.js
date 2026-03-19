import React, { useState, useEffect, useLayoutEffect } from 'react';


const useDeviceMobileDetect =  () => {

function isMobileDeviceList() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        };

const [isMobileDevice, setIsMobileDevice] = useState(isMobileDeviceList());

useEffect(() => {    
    const handleResize = () => setIsMobileDevice(isMobileDeviceList());    
    window.addEventListener('resize', handleResize);    
    return () => window.removeEventListener('resize', handleResize);
}, []);

        return { isMobileDevice };  

}

export default useDeviceMobileDetect;

