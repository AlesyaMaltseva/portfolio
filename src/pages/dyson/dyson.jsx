import DysonTop from './parts/DysonTop.jsx';
import WashAndDry from './img/bottom/WashAndDry.png';
import Main01s from './img/main/Main-01-s.jpg';
import WDGrayS from './img/main/WDGray-s.png';
import kJ9 from './img/bottom/9kJ.png';
import kJGrayS9 from './img/main/9kJGray-s.jpg';
import bottomV from './img/bottom/V.png';
import VGrayS from './img/main/VGray-s.jpg';
import dB from './img/bottom/dB.png';
import dBGrayS from './img/main/dBGray-s.jpg';
import main02s from './img/main/Main-02-s.jpg';
import main021Sign from './img/main/Main-02-1-sign.png';

import Main06 from './img/main/Main-06.jpg';
import Main07 from './img/main/Main-07.jpg';
import Main08 from './img/main/Main-08.jpg';

import dyson from './css/dyson.module.css'
//import  './css/dyson.css'


function Dyson() {


return <>

<DysonTop />
<div className={dyson.content}>

	<div class={[dyson.dMain]+' '+ [dyson.black]}>		
		<div className={[dyson.topPicture]+' '+ [dyson.fw1025]}>
			<div className={[dyson.b01]+' '+ [dyson.dyson]}>dyson <span className={dyson.modelGray}>airblade</span> <span className={dyson.modelYellow}>9kJ</span></div>
			<div className={[dyson.b02]+' '+ [dyson.mont]}>Это самая быстрая и&nbsp;энергоэффективная сушилка для рук <nobr>с HEPA-фильтром<sup>1</sup></nobr></div>
			<img className={[dyson.maskTop]+' '+ [dyson.b03]} src={Main01s} />						
		</div>		
	</div>

	<div className={[dyson.dPict]+' '+[dyson.fw1025]}>
		<div>
			<img src={WashAndDry} />
			<img src={WDGrayS} />
			<p>Технология Airblade™, интегрированная в&nbsp;смеситель</p>
			<a href="#">Подробнее</a>
		</div>
	
		<div>
			<img src={kJ9} />
			<img src={kJGrayS9} />
			<p>Это самая быстрая и энергоэффективная сушилка для рук <nobr>с HEPA-фильтром<sup>1</sup></nobr></p>
			<a href="/dyson9kJ/l/">Подробнее</a>
		</div>
	
		<div>
			<img src={bottomV} />
			<img src={VGrayS} />
			<p>Самая гигиеничная <nobr>сушилка для рук</nobr> <nobr>теперь на 35% тише<sup>2</sup></nobr></p>
			<a href="/DysonAirbladeV/l/">Подробнее</a>
		</div>
	
		<div>
			<img src={dB} />
			<img src={dBGrayS} />
			<p>Самая быстрая, самая гигиеничная сушилка для&nbsp;рук</p>
			<a href="/DysonAirbladedB/l/">Подробнее</a>
		</div>
	</div>

	<div className={[dyson.author]+' '+[dyson.fw1025]}>
		<div className={dyson.pictP}>
			<img className={[dyson.maskBottom]+' '+[dyson.forMob]} src={main02s} />
		</div>
		<div className={dyson.pictT}>
			<div>«Наша миссия проста. Мы решаем проблемы, на которые другие, кажется, просто не обращают внимания».</div>
			<img className="" src={main021Sign} />
		</div>		
	</div>

	<div className={[dyson.videos]+' '+[dyson.fw1025]}>
		<div id="video1">
			 <video src="img/video/Keflavik.mp4" poster={Main06} controls width="100%" height="auto"></video>
			<div>Использование сушилок Dyson в аэропорту Кефлавик в Исландии</div>			
		</div>	

		<div id="video2">
			<video src="img/video/ObedBufet.mp4" poster={Main07} controls width="30%" height="192px"></video>
			<div>Преимущества технологии Dyson Airblade™ на примере рестомаркета ОБЕДБУФЕТ®</div>			
		</div>	

		<div id="video3">
			<video src="img/video/RosewoodLondon.mp4" poster={Main08} controls width="30%" height="192px"></video>
			<div>Узнайте, каким образом Dyson способствует повышению уровня комфорта и гигиены в отеле Rosewood London</div>
		</div>
	</div>

	<div className={[dyson.dNotes]+' '+[dyson.fw1025]}>
		<ol>
			<li>Время высушивания и расход энергии рассчитаны для режима «Максимум» Время высушивания измерялось с помощью метода испытания Dyson 769 на основе протокола NSF P335, используя измерение до 0,1 г остаточной влажности.</li>
			<li>Снижен уровень шума по сравнению с оригинальной моделью сушилки для рук Dyson Airblade V.</li>
		</ol>
	</div>
	</div>
    </>
}

export default Dyson