import DysonTop from "./DysonTop.jsx";
import DysonBottom from "./DysonBottom.jsx";
import kj901S from "../img/9kj/9kj-01-s.jpg"
import kj902S from "../img/9kj/9kj-02-s.jpg";
import kj903S from "../img/9kj/9kj-03-s.jpg";
import kj904S from "../img/9kj/9kj-04-s.jpg";
import kj905S from "../img/9kj/9kj-05-s.jpg";
import kj906S from "../img/9kj/9kj-06-s.jpg";
import kj907S from "../img/9kj/9kj-07-s.jpg";


function Dyson9kJ() {

return <>
<DysonTop />
<div className="content">
	<div className="d-main gray">
		<div className="top-picture f-w-1025">
			<div className="b-01 dyson">dyson <span className="model-gray">airblade</span> <span className="model-yellow">9kJ</span></div>	
			<div className="b-02 mont">
				<div>Это самая быстрая и энергоэффективная сушилка для рук с HEPA-фильтром<sup>1</sup>
				<a href="#">Купить</a></div>
			</div>
				<img className="b-03" src={kj901S} />
			</div>
		</div>
			

	<div className="five mont"> </div>

	<div className="pictures">
		<div className="picture-r f-w-1025 kj9-02">
			<div className="pict-p">
				 <img className="for-mob" src={kj902S} />
			</div>
			<div className="pict-t">
				<h3>Низкое энергопотребление<br />Низкие эксплуатационные расходы</h3>
				<div>Сушилка для рук Dyson Airblade 9kJ* потребляет 9,1 килоджоулей энергии на одно высушивание, а расходы на эксплуатацию составляют всего 1015&nbsp;руб. в год<sup>2</sup> в режиме «Эко».</div>
			</div>
		</div>

		<div className="picture-l  f-w-1025 kj9-03">
			<div className="pict-p">
				 <img className="for-mob" src={kj903S} />
			</div>
			<div className="pict-t">
				<h3>Меньше бумажных отходов</h3>
				<div>Сушилка для рук Dyson Airblade 9kJ* образует до 85% меньше CO2 по сравнению с бумажными полотенцами, а затраты на ее эксплуатацию ниже до 99%<sup>3</sup>. Создавая лучшую обстановку в ваших туалетных комнатах и окружающем мире.</div>
			</div>
		</div>

		<div className="picture-r  f-w-1025 kj9-04">
			<div className="pict-p">
				 <img className="for-mob" src={kj904S} />
			</div>
			<div className="pict-t">
				<h3>Быстрое высушивание рук за 10 секунд</h3>
				<div>Мощный двигатель V4 Dyson с цифровым управлением вращается со скоростью 75 000 оборотов в минуту, пропуская через себя до 23&nbsp;л воздуха в секунду, высушивая руки всего за 10 секунд в режиме Максимум<sup>1</sup>.</div>
			</div>
		</div>
	</div>

	<div className="black">
		<div className="f-w-1025 middle">		
			<div className="pictures picture-l kj9-05">
				<div className="pict-p">
					 <img className="for-mob" src={kj905S} />
				</div>
				<div className="pict-t">
					<h3>Фильтр HEPA</h3>
					<div>Фильтр класса HEPA эффективен для удаления частиц пыли, взвешенных в воздухе. В соответствии с Европейскими стандартами, он улавливает из воздуха ванной комнаты 99,95% частиц размером 0,3&nbsp;микрона<sup>4</sup>.</div>
				</div>
			</div>

			<div className="pictures picture-r kj9-06">
				<div className="pict-p">
					 <img className="mask-bottom for-mob" src={kj906S} />
				</div>
				<div className="pict-t">
					<h3>Двигатель Dyson V4 с цифровым управлением</h3>
					<div>Вращается со скоростью 75 000 оборотов в минуту, обеспечивая быстрое и гигиеничесакое высушивание рук<sup>5</sup>.</div>
				</div>
			</div>

			<div className="pictures picture-l kj9-07">
				<div className="pict-p">
					 <img className="for-mob" src={kj907S} />
				</div>
				<div className="pict-t">
					<h3>Дизайн Curved Blade**</h3>
					<div>Два изогнутых отверстия шириной по 0,45 мм создают воздушные потоки со скоростью 624&nbsp;км/ч<sup>5</sup> повторяя контуры ваших рук, удаляют с них воду быстрее.</div>
				</div>
			</div>
		</div>
	</div>
</div>
<DysonBottom />
</>
}

export default Dyson9kJ; 