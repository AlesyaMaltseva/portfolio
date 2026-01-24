import { useState, useRef } from 'react';
import uuid from 'react-uuid';
// import 'bootstrap/dist/css/bootstrap.css'

function Experience() {

const items1 = ['Это первый пункт списка', 'Второй пункт', 'Третий пункт', 'Пункт четвертый', 'Пятый пункт списка'];   

  return  <>    
    <ul className="list-group">
        {items1.map((item) => (
            <li key={item} className="list-group-item" onClick={() => console.log(item)}>{item}</li>
         ))}  
    </ul>

    <div>В CSS3 были добавлены новые относительные единицы измерения, такие как vh, vw, vmin, vmax. Эти единицы вычисляются относительно размеров окна браузера.</div>              
    </>  
}

export default Experience
