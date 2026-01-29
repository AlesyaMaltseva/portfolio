import DysonTop from "./DysonTop.jsx";
import DysonBottom from "./DysonBottom.jsx";
import V01s from "../img/v/V-01-s.jpg";
import imgwd05 from "../img/wd05.png";
import V03s from "../img/v/V-03-s.jpg";
import imgclock12 from "../img/clock12.png";
import V04s from "../img/v/V-04-s.jpg";
import V05s from "../img/v/V-05-s.jpg";
import V06s from "../img/v/V-06-s.jpg";


function DysonV() {

return <>
<DysonTop />
<div className="content">

	<div className="d-main gray">
		<div className="top-picture f-w-1025">
			<div className="b-01 dyson">dyson <span className="model-gray">airblade</span> <span className="model-blue">V</span></div>
			<div className="b-02 mont">Самая гигиеничная сушилка для рук теперь на 35% тише<sup>1</sup>
				<a href="#">Купить</a></div>
			<img className="mask-left b-03" src={V01s} />
		</div>
	</div>

	<div className="five mont"> </div>


	<div className="pictures">
			<div className="picture-r f-w-1025 v-02">				
				<div className="pict-t">
					<h3>Самые быстрые сушилки для гигиенического высушивания рук с фильтром HEPA</h3>
					<div>Потоки воздуха со скоростью 690 км/ч буквально «срезают» воду с рук и высушивают их быстро и гигиенично всего за 12 секунд.<sup>2</sup></div>
				</div>
			</div>
	</div>

	<div className="middle-w f-w-1025">		
		<div className="economy">
			<img src={imgwd05} />
			<div className="pict-t">
				<h3>Экономит ваши деньги</h3>
				<div>Готовые эксплуатационные расходы до 97% ниже, чем при использовании бумажных полотенец, и до 75% ниже, чем при использовании других сушилок для рук.<sup>3</sup></div>
			</div>
		</div>
	</div>

	<div className="pictures">
			<div className="picture-r mask-right f-w-1025 v-03">
				<div className="pict-p">
					 <img className="for-mob" src={V03s} />
				</div>
				<div className="pict-t">
					<h3>Экономит пространство туалетной комнаты</h3>
					<div>Благодаря инновационной задней панели сушилка для рук Dyson Airblade V проста в установке и обслуживании. За счет узкой компактной конструкции она выступает от стены всего на 10 см, занимая мало места в туалетной комнате.</div>
				</div>
			</div>
	</div>
	
	<div className="middle-w f-w-1025">		
		<div className="clock">
			<div className="pict-t">
					<h3>Меньше очередей в туалетной комнате</h3>
					<div>Сушкилка для рук Dyson Airblade V полностью высушивает руки за 12 секунд.<sup>2</sup> Поэтому люди быстрее покидают туалетную комнату, что позволяет избежать очередей.</div>
				</div>
				<img src={imgclock12} />
		</div>
	</div>
	

	<div className="black">
		<div className="f-w-1025 middle">
			<div className="pictures picture-l v-04">
				<div className="pict-p">
					 <img className="mask-bottom for-mob" src={V04s} />
				</div>
				<div className="pict-t">
					<h3>Фильтр HEPA</h3>
					<div>Сушилка для рук Dyson Airblade V оснащена двумя фильтрами HEPA, расположенными по обеим сторонам устройства. Фильтры улавливают из воздуха туалетной комнаты 99,95% частиц размером с бактерию.<sup>4</sup></div>
				</div>
			</div>

			<div className="pictures picture-r v-05">
				<div className="pict-p">
					 <img className="mask-bottom for-mob" src={V05s} />
				</div>
				<div className="pict-t">
					<h3>Технология Airblade<sup>ТМ</sup> работает иначе</h3>
					<div>Каждую секунду до 20 литров воздуха, очищенного фильтром класса HEPA, пропускается сквозь отверстия шириной до 0,55 мм. Создаваемые таким образом плоские потоки воздуха, движущиеся со скоростью 690&nbsp;км/ч, высушивают руки всего за 12&nbsp;секунд.<sup>2</sup></div>
				</div>
			</div>

			<div className="pictures picture-l v-06">
				<div className="pict-p">
					 <img className="mask-bottom for-mob" src={V06s} />
				</div>
				<div className="pict-t">
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