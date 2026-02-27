import tork from './css/Tork.module.css';
import $ from 'jquery';
window.jquery = window.$ = $;
import {useState,  useEffect, useRef, useLayoutEffect } from 'react';
//import './css/tork.css';
import tLogo from "./img/tork-logo.png";
import banner1 from "./img/banner1.jpg";
import banner2 from "./img/banner2.jpg";
import banner3 from "./img/banner3.jpg";
import TorkIcons101 from "./img/Tork-icons1-01.png";
import TorkIcons201 from "./img/Tork-icons2-01.png";
import TorkIcons301 from "./img/Tork-icons3-01.png";
import TorkIcons401 from "./img/Tork-icons4-01.png";
import whyTork01 from "./img/why-tork_01.jpg";
import whyTork02 from "./img/why-tork_02.jpg";
import whyTork03 from "./img/why-tork_03.jpg";
import category3 from "./img/Category_3.jpg";
import category1 from "./img/Category_1.jpg";
import category2 from "./img/Category_2.jpg";
import category4 from "./img/Category_4.jpg";
import category6 from "./img/Category_6.jpg";
import category5 from "./img/Category_5.jpg";
import image44 from "./img/image-44.jpg";
import torkSafer1 from "./img/Tork_Safer1.jpg";
import torkSafer2 from "./img/Tork_Safer2.jpg";
import torkSafer3 from "./img/Tork_Safer3.jpg";
import torkPrintProdimages from "./img/TorkPRINT-prodimages.jpg";

function Tork() {

const torkLand = useRef();
const tab1 =  useRef();
const tab2 =  useRef();
const tab3 =  useRef();

const contentTab1 = useRef();
const contentTab2 = useRef();
const contentTab3 = useRef();

//   function handleScrollToTab1() {
//     contentTab1.current.scrollIntoView({
//       behavior: 'smooth',
//       block: 'nearest',
//       inline: 'center'
//     });
//   }

//   function handleScrollToTab2() {
//     contentTab2.current.scrollIntoView({
//       behavior: 'smooth',
//       block: 'nearest',
//       inline: 'center'
//     });
//   }

//   function handleScrollToTab3() {
//     contentTab3.current.scrollIntoView({
//       behavior: 'smooth',
//       block: 'nearest',
//       inline: 'center'
//     });
//   }
 const tabs = [
	{tab:'contentTab1', img:'banner1'},
	{tab:'contentTab2', img:'banner2'},
	{tab:'contentTab3', img:'banner3'}
]

const handleClickTab = ()=>{
	
	console.log(tabs[1].tab)
	//contentTab1.current.style.display='none';
  };



  // немедленная функция 
// (function() { 
// console.log(contentTab3.current); 
// })()


useEffect(()=>{

function showTab(tabId, imgSrc) {
    // Скрываем все элементы
    document.querySelectorAll('section').forEach(el => el.classList.remove([tork.active]));
    document.querySelectorAll('img').forEach(el => el.classList.remove([tork.active]));
    
    // Показываем нужный блок и изображение
    const tab = document.getElementById(tabId);
    const image = document.getElementById(imgSrc);
    if (tab && image) {
        tab.classList.add([tork.active]);
        image.classList.add([tork.active]);
    }
}

tab1.current.addEventListener("click", () => showTab("contentTab1", "banner1"));
tab2.current.addEventListener("click", () => showTab("contentTab2", "banner2"));
tab3.current.addEventListener("click", () => showTab("contentTab3", "banner3"));

}, [])

return <>

<div className={tork.torkLand} id={tork.torkLand} ref={torkLand}>
<div className={[tork.torkBanner]+' '+[tork.anim]+' '+[tork.w985]}>
		<img className={tork.tLogo} src={tLogo} />
       <img className={[tork.tBanner]+' '+[tork.active]+' '+[tork.anim]} id="banner1" src={banner1} />
	   <img className={[tork.tBanner]+' '+[tork.anim]} id="banner2" src={banner2} />
	   <img className={[tork.tBanner]+' '+[tork.anim]} id="banner3" src={banner3} />
	</div>


<div className={tork.tabs}>   
 <input id={tork.tab1} type="radio" name="tabs" defaultChecked />
 <label htmlFor={tork.tab1} className={tork.tab1} ref={tab1} >Почему Tork?</label>
 <input id={tork.tab2} type="radio" name="tabs"  />
 <label htmlFor={tork.tab2} className={tork.tab2} ref={tab2}>Решение Tork</label>
 <input id={tork.tab3}  type="radio" name="tabs" />
 <label htmlFor={tork.tab3} className={tork.tab3} ref={tab3}>Сделайте безопасный выбор</label> 


<section id="contentTab1" className={tork.active} ref={contentTab1}>

	<div className={[tork.texts]+' '+[tork.lf]+' '+[tork.w985]}>
		<p>Торговая марка Tork предлагает полный ассортимент гигиенической продукции для общественных туалетных комнат, промышленных предприятий, медицинских учреждений и предприятий общественного питания.</p> 
		<p>Глубоко понимая потребности наших клиентов и имея богатый опыт в области вопросов гигиены и защиты окружающей среды, мы являемся лидерами во многих сегментах рынка и надежными бизнес-партнерами более чем в 80 странах мира.</p>
		<p>Tork имеет давние партнерские отношения с крупными компаниями, и вместе мы обслуживаем малый, средний и крупный бизнес.</p>
		<p>Поскольку мы входим в новую реальность, где гигиене уделяется всё больше внимания, Tork готов поддержать вас в обеспечении нового стандарта гигиены для вашего бизнеса. Поэтому, когда вам нужно сушить, чистить или полировать, мы всегда готовы помочь. Ассортимент диспенсеров и расходных материалов ТМ  Tork, таких как бумажные полотенца для рук, нетканый и бумажный протирочный материал или мыло, разработан для удовлетворения особых потребностей в оформлении туалетных комнат, промышленных помещений, офисов, кухонь и столовых. Таким образом, вы сможете уделить больше внимания тому, что действительно важно для вашего бизнеса.</p>
  	</div>
	
	<div className={tork.blue}>
		<div>
		 <div className={tork.w985}>
			<h2>Понимание потребностей вашего бизнеса</h2>
			<p>Благодаря сегментированному подходу мы понимаем, как удовлетворить потребности вашего бизнеса, ежедневно улучшая его работу.</p>
			<div className={[tork.lists]+' '+[tork.four]}>
				<div>
					<img src={TorkIcons101} />
					<h3>Общественные учреждения</h3><p>Поддержание гигиены на рабочих местах отражает заботу о подчиненных. Кроме того, это помогает уменьшить количество больничных.</p>
				</div>
				<div>
					<img src={TorkIcons201} />
					<h3>Медицинские учреждения</h3><p>Принимая пациентов, нельзя забывать о том, что гигиена — важнейший фактор обеспечения качества и безопасности медицинского обслуживания. </p>
				</div>
				<div>
					<img src={TorkIcons301} />
					<h3>Производственные учрежденния</h3><p>Наши промышленные материалы для протирки и очистки справятся с широким спектром работ, выполняемых на производстве.</p>
				</div>
				<div>
					<img src={TorkIcons401} />
					<h3>HoReCa и общественное питание</h3><p>Ключевой фактор успеха — создание атмосферы, в которую вашим гостям захочется вернуться. Для этого мы разработали продукты и услуги специально для бизнеса.</p>
				</div>
			</div>
		</div>
		
		<div className={tork.white}>
          
			<div className={tork.w985}>
				<h2>Устойчивое развитие с Tork</h2>
				<p>Делать то, что правильно для планеты и нашего общества</p>
				<div className={[tork.lists]+' '+[tork.three]+' '+[tork.color]}>
					<div>
						<p>Сегодня</p>
						<p className={tork.big}>90%</p>
						<p>упаковки изготовлены из возобновляемых ресурсов</p>
					</div>
					<div>
						<p>К 2025 году пластиковая упаковка будет на</p>
						<p className={tork.big}>100%</p>
						<p>перерабатываемой</p>
					</div>
					<div>
						<p>К 2025 году наша пластиковая упаковка на</p>
						<p className={tork.big}>30%</p>
						<p>будет состоять из переработанных материалов</p>
					</div>
				</div>
			</div>
		</div>
		</div>	
	</div>
	
	<div className={tork.w985}>
		<h2>Почему Торк?</h2>
		<p className={tork.lf}>Tork &ndash; ведущий мировой бренд в сфере профессиональной гигиены.  Товары и услуги Tork — это невероятный комфорт для пользователей и максимальное удобство для покупателей. Tork  всегда стремится лучше понимать потребности своих клиентов, освобождая наших клиентов от поиска эффективных решений. Они могут сфокусироваться на самом важном &ndash; своем собственном бизнесе.</p>
		<div className={[tork.lists]+' '+[tork.three]+' '+[tork.logos]}>
			<div>
				<img src={whyTork01} />
				<h3>Награжденный дизайн</h3>
			</div>
			<div>
				<img src={whyTork02} />
				<h3>Делает вашу жизнь проще</h3>
			</div>
			<div>
				<img src={whyTork03} />
				<h3>Без ущерба для устойчивости</h3>
			</div>
		</div>
	</div>	



</section>


<section id="contentTab2" className={tork.w985} ref={contentTab2}>
	
	<h2>Наши продукты</h2>
			
	<div className={[tork.lists]+' '+[tork.three]+' '+[tork.prod]+' '+[tork.w985]}>
		<div>
			<img src={category3} />
			<h3>Бумажные полотенца и диспенсеры</h3>
			<p>Экономичные, мягкие и отлично впитывающие! Гигиеничные решения сушки рук  для различных типов ванных комнат.</p>
		</div>
		<div>
			<img src={category1} />
			<h3>Туалетная бумага и диспенсеры  </h3>
			<p>Широкий ассортимент расходного материала и постоянное наличие бумаги благодаря экономичным диспенсерам.</p>
		</div>
		<div>
			<img src={category2} />
			<h3>Мыло и диспенсеры</h3>
			<p>Обеспечивает оптимальную гигиену рук и бережно воздействует на кожу. Экономичное использование в настенных диспенсерах.</p>
		</div>
		<div>
			<img src={category4} />
			<h3>Протирочные материалы</h3>
			<p>Удаляют грязь, впитывают жидкости&nbsp;&ndash; прочные протирочные материалы для офиса, кухни и производства.</p>
		</div>
		<div>
			<img src={category6} />
			<h3>Аксессуары для ванной комнаты </h3>
			<p>Повысьте комфорт ванной комнаты с помощью правильно подобранных аксессуаров.</p>
		</div>
		<div>
			<img src={category5} />
			<h3>Салфетки и диспенсеры</h3>
			<p>Бумажные салфетки для любых потребностей &ndash; премиальные столовые и салфетки для использования в диспенсерах</p>
		</div>
	</div>
	
	<h2>Новинки Tork для дома и бизнеса </h2>

	<div className={[tork.lists]+' '+[tork.three]+' '+[tork.video]+' '+[tork.w985]}>
		<div>
			<video poster="" preload="metadata" controls="controls">
                {/* <source src="./video/SmartOne.mp4" />  */}
                </video>
			<p>Tork EasyCube®<br />Превосходите ожидания благодаря интеллектуальному подключению</p>
		</div>
		<div>
			<video poster="" preload="metadata" controls="controls">
                {/* <source src="./video/X-fit.mp4" />  */}
                </video>
			<p>Tork PeakServe®<br />Сделайте более безопасный выбор с полотенцем для рук Tork PeakServe® Continuous®</p>
		</div>
		<div>
			<video poster="" preload="metadata" controls="controls">
                {/* <source src="./video/Xpressnap.mp4" />  */}
                </video>
			<p>Tork SmartOne®<br />Экономичный и гигиеничный диспенсер для рулонов туалетной бумаги</p>			
		</div>
	</div>	
</section>

<section id="contentTab3" className={tork.w985} ref={contentTab3}>
	<h2>Добро пожаловать в новую реальность</h2>
	<div className={[tork.lists]+' '+[tork.two]+' '+[tork.w985]}>
		<div><img src={image44} /></div>
		<div className={tork.lf}>
			<p>Требования по соблюдению гигиены в общественных местах перешли на более высокий уровень, чем когда-либо прежде.</p>
			<p>Посетители чувствуют себя небезопасно, когда посещают туалетные комнаты, которые не соответствуют стандартам гигиены.</p>  
			<p>Компании, которые не будут соблюдать нормы  стандарты гигиены, будут нести ответственность.</p>
			<a className={tork.downl} href="pdf/Tork-JAD-Broch.pdf" target="_blank">Скачать</a>			
		</div>
	</div>
	
	<p className={[tork.texts]+' '+[tork.lf]+' '+[tork.art]+' '+[tork.w985]}>Соблюдение гигиены рук – лучший способ предотвратить распространение инфекции, и сушка рук &ndash; это большая часть этого.</p>
	
	<div className={[tork.lists]+' '+[tork.three]+' '+[tork.how]+' '+[tork.w985]}>
		<div>
			<img src={torkSafer1} />
		</div>
		<div>
			<img src={torkSafer2} />
		</div>
		<div>
			<img src={torkSafer3} />	
		</div>
	</div>
	
	<h2>Переход на бумажные полотенца никогда не был настолько прост</h2>
	
	<div className={[tork.lists]+' '+[tork.two]+' '+[tork.w985]}>
		<div><img src={torkPrintProdimages} /></div>
		<div className={tork.lf}>
			<p><span><b>Tork PeakServe®</b></span></p>
<span>Диспенсер с самой высокой емкостью на рынке.</span>
<span>2100 полотенец.</span>
			<p><span><b>NEW: Tork PeakServe® Mini</b></span> 
<span>Самый тонкий и маленький диспенсер высокой емкости на рынке.</span>
<span>Подходит абсолютно везде.</span>
<span>1230 полотенец.</span></p>  
			<p><span><b>NEW: Tork PeakServe® Recessed</b></span>
<span>Улучшение без ремонта.</span>
<span>Увеличение емкости встраиваемых мощностей до 40%.</span>
<span>Совместим со многими типами встраиваемых шкафов.</span>
<span>1230 полотенец вместимость большого диспенсера.</span>
<span>До 1000 полотенец в маленьком диспенсере при пополнении.</span></p>
		</div>
	</div>

	
</section>

</div>
</div>

</>
}

export default Tork