import DysonTop from "./DysonTop.jsx";
import DysonBottom from "./DysonBottom.jsx";
import dB01s from "../img/db/dB-01-s.jpg";
import dB02s from "../img/db/dB-02-s.jpg";
import wd05 from "../img/wd05.png";
import clock10 from "../img/clock10.png";
import dB03s from "../img/db/dB-03-s.jpg";
import dB04s from "../img/db/dB-04-s.jpg";
import dB05s from "../img/db/dB-05-s.jpg";


function DysondB() {

return <>
<DysonTop />
<div className="content">

	<div className="d-main gray">
		<div className="top-picture f-w-1025">
			<div className="b-01 dyson">dyson <span className="model-gray">airblade</span> <span className="model-lightgray">dB</span></div>
			<div className="b-02 mont">Самая быстрая, самая гигиеничная сушилка для рук
				<a href="#">Купить</a></div>
			<img className="mask-left b-03" src={dB01s} />
		</div>
	</div>

	<div className="five mont"> </div>

	<div className="pictures">
		<div className="picture-l f-w-1025 dB-02-1">
			<div className="pict-p">
				 <img className="for-mob" src={dB02s} />
			</div>
			<div className="pict-t">
				<h3>Высушивает руки чистым воздухом</h3>
				<div>Все сушилки для рук Dyson Airblade оснащены фильрами HEPA, которые улавливают 99,95% частиц размером с бактирии и вирусы. Таким образом, руки высушиваются чистым воздухом.<sup>1</sup></div>
			</div>
		</div>
	</div>

	<div className="middle-w f-w-1025">
		<div className="economy">
			<img src={wd05} />
			<div className="pict-t">
				<h3>Экономит ваши деньги</h3>
				<div>Готовые эксплуатационные расходы до 97% ниже, чем при использовании бумажных полотенец, и до 75% ниже, чем при использовании других сушилок для рук.<sup>2</sup></div>
			</div>			
		</div>

		<div className="clock">
			<div className="pict-t">
				<h3>Меньше очередей в туалетной комнате</h3>
				<div>Сушкилка для рук Dyson Airblade dB полностью высушивает руки за 10 секунд<sup>4</sup>. Поэтому люди быстрее покидают туалетную комнату, что позволяет избежать очередей.</div>
			</div>
			<img src={clock10} />
		</div>
	</div>

	<div className="black">
		<div className="f-w-1025 middle">
			<div className="pictures picture-l dB-03-1">
				<div className="pict-p">
					 <img className="for-mob" src={dB03s} />
				</div>
				<div className="pict-t black">
					<h3>Фильтр HEPA</h3>
					<div>В сушилках для рук Dyson Airblade dB используется фильтр HEPA. Он улавливает из воздуха туалетной комнаты 99,95% частиц размером с бактерию.<sup>1</sup></div>
				</div>
			</div>

			<div className="pictures picture-r dB-04">
				<div className="pict-p">
					 <img className="for-mob" src={dB04s} />
				</div>
				<div className="pict-t black">
					<h3>Двигатель Dyson с цифровым управлением </h3>
					<div>Двигатель Dyson V4 c цифровым управлением вращается примерно в три раза быстрее, чем обычный. Вырабатываемая им мощность стала отправной точкой для создания технологии Airblade<sup>ТМ</sup>.</div>
				</div>
			</div>
		</div>
	</div>

	<div className="pictures">
		<div className="picture-r f-w-1025 mask-right dB-05-1">
			<div className="pict-p">
				 <img className="for-mob" src={dB05s} />
			</div>
			<div className="pict-t">
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