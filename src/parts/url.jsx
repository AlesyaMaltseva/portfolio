import React from 'react';
import {useEffect} from 'react';
import { HashRouter } from 'react-router-dom'
import { useLocation } from 'react-router-dom';



function CurrentURLComponent()  {
    
    let location = useLocation();
const refresh = () => window.location.reload(true)
    
function cssImport() {
        if (window.location.href.includes('tork')) {  
            import ('../example.css');
           console.log('содержит Tork')
        } 
        else 
            { 
                //useEffect(() => {window.location.reload(); },);
                console.log('НЕ содержит Tork')
        }
           
}

    return <>
        
         {cssImport()}
          
        <p>Current Pathname: {location.pathname}</p>  
        <p>Current Search: {location.search}</p>  
        <p>Current Hash: {location.hash}</p>
        
    </>;
}
export default CurrentURLComponent;
