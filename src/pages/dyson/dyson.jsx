import DysonTop from './parts/DysonTop.jsx'
import WashAndDry from './img/bottom/WashAndDry.png'
import Main01s from './img/main/Main-01-s.jpg'
import WDGrayS from './img/main/WDGray-s.png'
import kJ9 from './img/bottom/9kJ.png'
import kJGrayS9 from './img/main/9kJGray-s.jpg'
import bottomV from './img/bottom/V.png'
import VGrayS from './img/main/VGray-s.jpg'
import dB from './img/bottom/dB.png'
import dBGrayS from './img/main/dBGray-s.jpg'
import main02s from './img/main/Main-02-s.jpg'
import main021Sign from './img/main/Main-02-1-sign.png'


function Dyson() {


return <>

<DysonTop />
<div className="content">

	<div className="d-main black">
		<div className="top-picture f-w-1025">
			<div className="b-01 dyson">dyson <span className="model-gray">airblade</span> <span className="model-yellow">9kJ</span></div>
			<div className="b-02 mont">Это самая быстрая и&nbsp;энергоэффективная сушилка для рук <nobr>с HEPA-фильтром<sup>1</sup></nobr></div>
			<img className="mask-top b-03" src={Main01s} />						
		</div>		
	</div>

	<div className="d-pict f-w-1025">
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

	<div className="author f-w-1025">
		<div className="pict-p">
			<img className="mask-bottom for-mob" src={main02s} />
		</div>
		<div className="pict-t">
			<div>«Наша миссия проста. Мы решаем проблемы, на которые другие, кажется, просто не обращают внимания».</div>
			<img className="" src={main021Sign} />
		</div>		
	</div>

	<div className="videos f-w-1025">
		<div id="video1">
			 <video src="img/video/Keflavik.mp4" poster="pics/main/Main-06.jpg" controls width="100%" height="auto"></video>
			<div>Использование сушилок Dyson в аэропорту Кефлавик в Исландии</div>			
		</div>	

		<div id="video2">
			<video src="img/video/ObedBufet.mp4" poster="pics/main/Main-07.jpg" controls width="30%" height="192px"></video>
			<div>Преимущества технологии Dyson Airblade™ на примере рестомаркета ОБЕДБУФЕТ®</div>			
		</div>	

		<div id="video3">
			<video src="img/video/RosewoodLondon.mp4" poster="pics/main/Main-08.jpg" controls width="30%" height="192px"></video>
			<div>Узнайте, каким образом Dyson способствует повышению уровня комфорта и гигиены в отеле Rosewood London</div>
		</div>
	</div>

	<div className="d-notes f-w-1025">
		<ol>
			<li>Время высушивания и расход энергии рассчитаны для режима «Максимум» Время высушивания измерялось с помощью метода испытания Dyson 769 на основе протокола NSF P335, используя измерение до 0,1 г остаточной влажности.</li>
			<li>Снижен уровень шума по сравнению с оригинальной моделью сушилки для рук Dyson Airblade V.</li>
		</ol>
	</div>
	</div>
    </>
}

export default Dyson