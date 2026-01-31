import DysonTop from "./DysonTop.jsx";
import DysonBottom from "./DysonBottom.jsx";
import V01s from "../img/v/V-01-s.jpg";
import imgwd05 from "../img/wd05.png";
import V03s from "../img/v/V-03-s.jpg";
import imgclock12 from "../img/clock12.png";
import V04s from "../img/v/V-04-s.jpg";
import V05s from "../img/v/V-05-s.jpg";
import V06s from "../img/v/V-06-s.jpg";
import dyson from '../css/dyson.module.css'

function DysonV() {

return <>
<DysonTop />
<div className={dyson.content}>

	<div className={[dyson.dMain]+' '+[dyson.gray]}>
		<div className={[dyson.topPicture]+' '+[dyson.fw1025]}>
			<div className={[dyson.b01]+' '+[dyson.dyson]}>dyson <span className={dyson.modelGray}>airblade</span> <span className={dyson.modelBlue}>V</span></div>
			<div className={[dyson.b02]+' '+[dyson.mont]}>Самая гигиеничная сушилка для рук теперь на 35% тише<sup>1</sup>
				<a href="#">Купить</a></div>
			<img className={[dyson.maskLeft]+' '+[dyson.b03]} src={V01s} />
		</div>
	</div>

	<div className={[dyson.five]+' '+[dyson.mont]}> </div>


	<div className={dyson.pictures}>
			<div className={[dyson.pictureR]+' '+[dyson.fw1025]+' '+[dyson.v02]}>				
				<div className={dyson.pictT}>
					<h3>Самые быстрые сушилки для гигиенического высушивания рук с фильтром HEPA</h3>
					<div>Потоки воздуха со скоростью 690 км/ч буквально «срезают» воду с рук и высушивают их быстро и гигиенично всего за 12 секунд.<sup>2</sup></div>
				</div>
			</div>
	</div>

	<div className={[dyson.mmiddleW]+' '+[dyson.fw1025]}>		
		<div className={dyson.economy}>
			<img src={imgwd05} />
			<div className={dyson.pictT}>
				<h3>Экономит ваши деньги</h3>
				<div>Готовые эксплуатационные расходы до 97% ниже, чем при использовании бумажных полотенец, и до 75% ниже, чем при использовании других сушилок для рук.<sup>3</sup></div>
			</div>
		</div>
	</div>

	<div className={dyson.pictures}>
			<div className={[dyson.pictureR]+' '+[dyson.fw1025]+' '+[dyson.maskRight]+' '+[dyson.v03]}>
				<div className={dyson.pictP}>
					 <img className={dyson.forMob} src={V03s} />
				</div>
				<div className={dyson.pictT}>
					<h3>Экономит пространство туалетной комнаты</h3>
					<div>Благодаря инновационной задней панели сушилка для рук Dyson Airblade V проста в установке и обслуживании. За счет узкой компактной конструкции она выступает от стены всего на 10 см, занимая мало места в туалетной комнате.</div>
				</div>
			</div>
	</div>
	
	<div className={[dyson.mmiddleW]+' '+[dyson.fw1025]}>		
		<div className={dyson.clock}>
			<div className={dyson.pictT}>
					<h3>Меньше очередей в туалетной комнате</h3>
					<div>Сушкилка для рук Dyson Airblade V полностью высушивает руки за 12 секунд.<sup>2</sup> Поэтому люди быстрее покидают туалетную комнату, что позволяет избежать очередей.</div>
				</div>
				<img src={imgclock12} />
		</div>
	</div>
	

	<div className={dyson.black}>
		<div className={[dyson.fw1025]+' '+[dyson.middle]}>
			<div className={[dyson.pictures]+' '+[dyson.pictureL]+' '+[dyson.v04]}>
				<div className={dyson.pictP}>
					 <img className={[dyson.maskBottom]+' '+[dyson.forMob]} src={V04s} />
				</div>
				<div className={dyson.pictT}>
					<h3>Фильтр HEPA</h3>
					<div>Сушилка для рук Dyson Airblade V оснащена двумя фильтрами HEPA, расположенными по обеим сторонам устройства. Фильтры улавливают из воздуха туалетной комнаты 99,95% частиц размером с бактерию.<sup>4</sup></div>
				</div>
			</div>

			<div className={[dyson.pictures]+' '+[dyson.pictureR]+' '+[dyson.v05]}>
				<div className={dyson.pictP}>
					 <img className={[dyson.maskBottom]+' '+[dyson.forMob]} src={V05s} />
				</div>
				<div className={dyson.pictT}>
					<h3>Технология Airblade<sup>ТМ</sup> работает иначе</h3>
					<div>Каждую секунду до 20 литров воздуха, очищенного фильтром класса HEPA, пропускается сквозь отверстия шириной до 0,55 мм. Создаваемые таким образом плоские потоки воздуха, движущиеся со скоростью 690&nbsp;км/ч, высушивают руки всего за 12&nbsp;секунд.<sup>2</sup></div>
				</div>
			</div>

			<div className={[dyson.pictures]+' '+[dyson.pictureL]+' '+[dyson.v06]}>
				<div className={dyson.pictP}>
					 <img className={[dyson.maskBottom]+' '+[dyson.forMob]} src={V06s} />
				</div>
				<div className={dyson.pictT}>
					<h3>Двигатель Dyson с цифровым управлением</h3>
					<div>Двигатель Dyson V4 с цифровым управлением вращается примерно в 3 раза быстрее, чем обычный. Вырабатываемая им мощность стала отправной точкой для создания технологии Airblade<sup>ТМ</sup>.</div>
				</div>
			</div>		
		</div>
	</div>	
</div>
<DysonBottom />
</>
}

export default DysonV; 