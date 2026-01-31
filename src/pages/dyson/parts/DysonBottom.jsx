
import clock from '../img/bottom/clock.png';
import hands from '../img/bottom/hands.png';
import rubles from '../img/bottom/rubles.png';
import tree from '../img/bottom/tree.png';
import five from '../img/bottom/five.png';
import WashAndDry from '../img/bottom/WashAndDry.png';
import WashAndDryPict from '../img/bottom/WashAndDryPict.png';
import kJ9 from '../img/bottom/9kJ.png';
import kJ9Pict from '../img/bottom/9kJPict.png';
import V from '../img/bottom/V.png';
import VPict from '../img/bottom/VPict.png';
import dB from '../img/bottom/dB.png';
import dBPict from '../img/bottom/dBPict.png';
import dyson from '../css/dyson.module.css'

function DysonBottom() {

    return <>
    <div className={[dyson.bottom]+' '+[dyson.fw1025]}>
		<div className={dyson.dBH}>Этими преимуществами обладают только сушилки для рук Dyson&nbsp;Airblade™</div>

		<div className={dyson.dIcons}>
		<div>
			<img src={clock} />
			<p>Быстрые</p>
			<p>Руки полностью высушены за 10-14 секунд<sup>4</sup><sup className={dyson.lev2}>6</sup><sup className={dyson.lev3}>2</sup></p>
		</div>
	
		<div>
			<img src={hands} />
			<p>Гигиеничные</p>
			<p>Встроенный фильтр HEPA</p>
		</div>
	
		<div>
			<img src={rubles} />
			<p>Низкие эксплуатационные расходы</p>
			<p>На 87% дешевле других сушилок для рук<sup className={dyson.lev2}>2</sup><sup className={dyson.lev3}>3</sup></p>
		</div>
	
		<div>
			<img src={tree} />
			<p>Более экологичные</p>
			<p>Нет вырубки деревьев, нет бумажных отходов<sup className={dyson.lev2}>3</sup><sup className={dyson.lev3}>5</sup></p>
		</div>
	
		<div>
			<img src={five} />
			<p>5 лет гарантии</p>		
		</div>
		</div>

		<div className={[dyson.dBH]+' '+[dyson.lev2]}>Модельный ряд сушилок для рук Dyson Airblade™</div>

		<div className={dyson.dPict}>
		<div>
			<img src={WashAndDry} />
			<img src={WashAndDryPict} />
			<p>Технология Airblade™, интегрированная в смеситель.</p>
			<a href="#">Подробнее</a>
		</div>
	
		<div>
			<img src={kJ9} />
			<img src={kJ9Pict} />
			<p>Это самая быстрая и энергоэффективная сушилка для рук с HEPA-фильтром<sup className={dyson.lev3}>6</sup><sup className={dyson.lev2}>1</sup>.</p>
			<a href="#">Подробнее</a>
		</div>
	
		<div>
			<img src={V} />
			<img src={VPict} />
			<p>Самая гигиеничная сушилка для рук теперь на 35% тише<sup>5</sup><sup className={dyson.lev2}>7</sup><sup className={dyson.lev3}>1</sup>.</p>
			<a href="#">Подробнее</a>
		</div>
	
		<div>
			<img src={dB} />
			<img src={dBPict} />
			<p>Самая быстрая, самая гигиеничная сушилка для рук.</p>
			<a href="#/">Подробнее</a>
		</div>
		</div>

		<div className={[dyson.dNotes]+' '+[dyson.f]}>
			<ol>
				<li>Фильтр HEPA протестирован независимой лабораторией в соответствии с условиями и положениями стандарта EN 1822-5.</li>
				<li>Воспользуйтесь <a href="calculator.pdf">калькулятором расчета стоимости эксплуатации</a>.</li>
				<li>Расчеты выбросов углерода, основанные на использовании продукта в течение 5 лет, были получены с использованием программного обеспечения GaBi, предоставленного PE International, и метода, разработанного совместно с фондом Carbon Trust. Время высушивания измерялось с помощью метода испытания Dyson 769 на основе протокола P335 NSF с использованием измерения 0,1 г остаточной влажности.</li>
				<li>Время высушивания измерялось с помощью метода испытания Dyson 769 на основе протокола P335 NSF с использованием измерения 0,1 г остаточной влажности.</li>
				<li>Снижен уровень шума по сравнению с оригинальной моделью сушилки для рук Dyson Airblade V.</li>
				<li>Время высушивания и расход энергии рассчитаны для режима «Максимум» Время высушивания измерялось с помощью метода испытания Dyson 769 на основе протокола NSF P335, используя измерение до 0,1 г остаточной влажности.</li>
			</ol>
		</div>		
	</div>
    </>
}

export default DysonBottom;