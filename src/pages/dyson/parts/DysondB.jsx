import DysonTop from "./DysonTop.jsx";
import DysonBottom from "./DysonBottom.jsx";
import dB01s from "../img/db/dB-01-s.jpg";
import dB02s from "../img/db/dB-02-s.jpg";
import wd05 from "../img/wd05.png";
import clock10 from "../img/clock10.png";
import dB03s from "../img/db/dB-03-s.jpg";
import dB04s from "../img/db/dB-04-s.jpg";
import dB05s from "../img/db/dB-05-s.jpg";
import dyson from '../css/dyson.module.css'

function DysondB() {

return <>
<DysonTop />
<div className={dyson.content}>

	<div className={[dyson.dMain]+' '+[dyson.gray]}>
		<div className={[dyson.topPicture]+' '+[dyson.fw1025]}>
			<div className={[dyson.b01]+' '+[dyson.dyson]}>dyson <span className={dyson.modelGray}>airblade</span> <span className={dyson.modelLightgray}>dB</span></div>
			<div className={[dyson.b02]+' '+[dyson.mont]}>Самая быстрая, самая гигиеничная сушилка для рук
				<a href="#">Купить</a></div>
			<img className={[dyson.maskLeft]+' '+[dyson.b03]} src={dB01s} />
		</div>
	</div>

	<div className={[dyson.five]+' '+[dyson.mont]}> </div>

	<div className={dyson.pictures}>
		<div className={[dyson.pictureL]+' '+[dyson.fw1025]+' '+[dyson.dB021]}>
			<div className={dyson.pictP}>
				 <img className={dyson.forMob} src={dB02s} />
			</div>
			<div className={dyson.pictT}>
				<h3>Высушивает руки чистым воздухом</h3>
				<div>Все сушилки для рук Dyson Airblade оснащены фильрами HEPA, которые улавливают 99,95% частиц размером с бактирии и вирусы. Таким образом, руки высушиваются чистым воздухом.<sup>1</sup></div>
			</div>
		</div>
	</div>

	<div className={[dyson.mmiddleW]+' '+[dyson.fw1025]}>
		<div className={dyson.economy}>
			<img src={wd05} />
			<div className={dyson.pictT}>
				<h3>Экономит ваши деньги</h3>
				<div>Готовые эксплуатационные расходы до 97% ниже, чем при использовании бумажных полотенец, и до 75% ниже, чем при использовании других сушилок для рук.<sup>2</sup></div>
			</div>			
		</div>

		<div className={dyson.clock}>
			<div className={dyson.pictT}>
				<h3>Меньше очередей в туалетной комнате</h3>
				<div>Сушкилка для рук Dyson Airblade dB полностью высушивает руки за 10 секунд<sup>4</sup>. Поэтому люди быстрее покидают туалетную комнату, что позволяет избежать очередей.</div>
			</div>
			<img src={clock10} />
		</div>
	</div>

	<div className={dyson.black}>
		<div className={[dyson.fw1025]+' '+[dyson.middle]}>
			<div className={[dyson.pictures]+' '+[dyson.pictureL]+' '+[dyson.dB031]}>
				<div className={dyson.pictP}>
					 <img className={dyson.forMob} src={dB03s} />
				</div>
				<div className={[dyson.pictT]+' '+[dyson.black]}>
					<h3>Фильтр HEPA</h3>
					<div>В сушилках для рук Dyson Airblade dB используется фильтр HEPA. Он улавливает из воздуха туалетной комнаты 99,95% частиц размером с бактерию.<sup>1</sup></div>
				</div>
			</div>

			<div className={[dyson.pictures]+' '+[dyson.pictureR]+' '+[dyson.dB04]}>
				<div className={dyson.pictP}>
					 <img className={dyson.forMob} src={dB04s} />
				</div>
				<div className={[dyson.pictT]+' '+[dyson.black]}>
					<h3>Двигатель Dyson с цифровым управлением </h3>
					<div>Двигатель Dyson V4 c цифровым управлением вращается примерно в три раза быстрее, чем обычный. Вырабатываемая им мощность стала отправной точкой для создания технологии Airblade<sup>ТМ</sup>.</div>
				</div>
			</div>
		</div>
	</div>

	<div className={dyson.pictures}>
		<div className={[dyson.pictureR]+' '+[dyson.fw1025]+' '+[dyson.maskRight]+' '+[dyson.dB051]}>
			<div className={dyson.pictP}>
				 <img className={dyson.forMob} src={dB05s} />
			</div>
			<div className={dyson.pictT}>
				<h3>Прочная и долговечная</h3>
				<div>Сушилка для рук Dyson Airblade dB изготовлена из прочного и долговечного сплава ABS - поликарбонат. Она неоднократно проходила испытания на вандализм и выдерживала нагрузку при частом использовании в туалетных комнатах с большой проходимостью.</div>
			</div>
		</div>
	</div>
</div>
<DysonBottom />
</>
}

export default DysondB; 