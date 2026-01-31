import DysonTop from './DysonTop.jsx';
import DysonBottom from './DysonBottom.jsx';
import wd0101s from '../img/washanddry/wd01-01-s.jpg';
import wd02s from '../img/washanddry/wd02-s.jpg';
import wd03s from '../img/washanddry/wd03-s.jpg';
import wd04s from '../img/washanddry/wd04-s.jpg';
import clock14 from '../img/clock14.png';
import wd05 from '../img/wd05.png';
import wd05s from '../img/washanddry/wd05-s.jpg';
import wd06s from '../img/washanddry/wd06-s.jpg';
import wd07s from '../img/washanddry/wd07-s.jpg';
import dyson from '../css/dyson.module.css'


function DysonWashAndDry() {


return <>

<DysonTop />
<div className={dyson.content}>

	<div className={[dyson.dMain]+' '+[dyson.gray]}>
		<div className={[dyson.topPicture]+' '+[dyson.fw1025]}>
			<div className={[dyson.b01]+' '+[dyson.dyson]}>dyson <span className={dyson.modelGray}>airblade</span> <span className={dyson.modelLightgray}>wash+dry</span></div>
			<div className={[dyson.b02]+' '+[dyson.mont]}>Мойте и высушивайте руки прямо над раковиной
				<a href="#">Купить</a></div>
			<img className={[dyson.maskBottom]+' '+[dyson.b03]} src={wd0101s} />
		</div>
	</div>

	<div className={[dyson.five]+' '+[dyson.mont]}> </div>

	<div className={dyson.pictures}>
			<div className={[dyson.pictureL]+' '+[dyson.fw1025]+' '+[dyson.wd02]}>
				<div className={dyson.pictP}>
					<img className={[dyson.forMob]+' '+[dyson.maskBottom]} src={wd02s} />
				</div>
				<div className={dyson.pictT}>
					<h3>Высушивает руки чистым воздухом</h3>
					<div>Сушилки для рук Dyson Airblade Wash+Dry оснащены фильтром класса HEPA H13, который улавливает 99,95% бактерий и вирусов<sup>1</sup> из воздуха туалетной комнаты. Таким образом, руки высушиваются чистым воздухом.</div>
				</div>
			</div>
	
			<div className={[dyson.pictureR]+' '+[dyson.fw1025]+' '+[dyson.maskRight]+' '+[dyson.wd03]}>
				<div className={dyson.pictP}>
					<img className={dyson.forMob} src={wd03s} />
				</div>
				<div className={dyson.pictT}>
					<h3>Экономит пространство туалетной комнаты</h3>
					<div>Сушилка для рук Dyson Airblade Wash+Dry интегрирована в смеситель. Подача воды, воздуха осуществляется над раковиной из смесителя. Нет необходимости в организации отдельной зоны для высушивания рук.</div>
				</div>
			</div>
	
			<div className={[dyson.pictureL]+' '+[dyson.fw1025]+' '+[dyson.maskLeft]+' '+[dyson.wd04]}>
				<div className={dyson.pictP}>
					<img className={dyson.forMob} src={wd04s} />
				</div>
				<div className={dyson.pictT}>
					<h3>Никакой воды на полу</h3>
					<div>С технологией Airblade<sup>ТМ</sup>, интергрированной в смеситель, ваши руки будут сухими через 14&nbsp;секунд<sup>4</sup>. Нет необходимости переходить в отдельную зону, чтобы высушить руки. Вся вода останется в раковине.</div>
				</div>
			</div>
	</div>

	<div className={[dyson.middleW]+' '+[dyson.fw1025]}>
		<div className={dyson.clock}>
			<div className={dyson.pictT}>
				<h3>Меньше очередей в туалетной комнате</h3>
				<div>Сушилка для рук Dyson Airblade Wash+Dry полностью высушивает руки за 14&nbsp;секунд<sup>4</sup>. Благодаря этому сокращается время пребывания посетителей в туалетных комнатах.</div>
			</div>
			<img src={clock14} />
		</div>

		<div className={dyson.economy}>
			<img src={wd05} />
			<div className={dyson.pictT}>
				<h3>Экономит ваши деньги</h3>
				<div>Готовые эксплуатационные расходы до 97% ниже, чем при использовании бумажных полотенец, и до 75% ниже, чем при использовании других сушилок для рук.<sup>2</sup></div>
			</div>
		</div>
	</div>

	<div className={dyson.black}>
		<div className={[dyson.fw1025]+' '+[dyson.middle]}>
			<div className={[dyson.pictures]+' '+[dyson.pictureL]+' '+[dyson.wd05]}>
				<div className={dyson.pictP}>
					<img className={[dyson.maskBottom]+' '+[dyson.forMob]} src={wd05s} />
				</div>
				<div className={dyson.pictT}>
					<h3>Фильтры HEPA</h3>
					<div>Фильтр класса HEPA эффективен для удаления частиц пыли, взвешенных в воздухе. В соответствии с Европейскими стандартами, он улавливает из воздуха ванной комнаты 99,95% частиц размером 0,3 микрона.<sup>1</sup></div>
				</div>
			</div>

			<div className={[dyson.pictures]+' '+[dyson.pictureR]+' '+[dyson.wd06]}>
				<div className={dyson.pictP}>
					<img className={dyson.forMob} src={wd06s} />
				</div>
				<div className={dyson.pictT}>
					<h3>Двигатель Dyson с цифровым управлением</h3>
					<div><span className={dyson.nobr}>Двигатель Dyson V4 с цифровым управлением&nbsp;-</span> один из самых компактных и полностью интегрированных двигателей с мощностью 1000 Вт. Он вращается со скоростью 81 000 оборота в минуту, и это единственный достаточно мощный двигатель для реализации технологии Airblade<sup>ТМ</sup>.</div>
				</div>
			</div>

			<div className={[dyson.pictures]+' '+[dyson.pictureL]+' '+[dyson.wd07]}>
				<div className={dyson.pictP}>
					<img className={[dyson.maskBottom]+' '+[dyson.forMob]} src={wd07s} />
				</div>
				<div className={dyson.pictT}>
					<h3>Технология Airblade<sup>ТМ</sup>, интегрированная в смеситель</h3>
					<div>Каждую секунду до 21 литров воздуха со скоростью 549 км/ч проходят сквозь отверстия шириной 0,55 миллиметра, высушивая руки быстро и гигиенично.</div>
				</div>
			</div>
		</div>
	</div>
</div>
<DysonBottom />
</>
}

export default DysonWashAndDry;