import $ from 'jquery';
import iq from './css/iq.module.css';
import Slider from './parts/Slider.jsx';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import IqMenu from './parts/IqMenu.jsx';
// Images
import one from "./img/one.png"; import two from "./img/two.png"; import three from "./img/three.png"; import IqPremiumStanding from "./img/IQ-Premium-standing-A4-1.png"; import IqUltraStanding from "./img/IQ-Ultra-standing-A4-1.png"; import IqSmoothStanding from "./img/IQ-Smooth-standing-A4-1.png"; import IqAllroundStanding from "./img/IQ-Allround-standing-A4-1.png"; import IqEconomyStanding from "./img/IQ-Economy-standing-A4-1.png"; import faces3 from "./img/faces3.png"; import labelM from "./img/label-m.png"; import arround from "./img/arround.svg"; import arrowBottom from "./img/arrow-bottom.svg"; import i250000 from "./img/250000.png"; import million from "./img/million.png"; import shirts from "./img/shirts.png"; import faces2 from "./img/faces-2.png"; import millionWwithoutCircle from "./img/million-without-circle.png"; import logoCircle from "./img/logo-circle.png";
// End Images



function IqMillion() {

    return <> 
<IqMenu />
<div className={iq.iqContent}>		
		<div className={iq.iqTop}>
			<div className={iq.iqTcontent}>		
				<div className={iq.blockFirst}>
					<div id={iq.iqSlider} className={[iq.slider]+' '+[iq.desk]}>					
						<Slider />						
					</div>
					<div className={iq.faces}>
						<img src={faces3} />
					</div>
					<div className={iq.mobFaces}><img src={faces3} /></div>
						
					<div className={iq.list}>
						<p><span>IQ</span> НА МИЛЛИОН</p>
						<div>	
							<p>Акция проходит с 01.02.2024 по 30.04.2024</p>
								<div className={iq.desk}>
									<p><img src={one} /><span><b>Покупайте</b> офисную бумагу IQ в любом магазине вашего города</span></p>
									<p><img src={two} /><span><b>Зарегистрируйте</b> офисную бумагу IQ в любом магазине вашего города</span></p>
									<p><img src={three} /><span><b>Выигрывайте</b> ежемесячно 250&nbsp;000&nbsp;₽ или главный приз 1&nbsp;000&nbsp;000&nbsp;₽</span></p>
								</div>
						</div>
					</div>
				</div>			
						
				<div  className={iq.blockSecond} id="rules">
					<h2 className={iq.rulesH} >ПРАВИЛА АКЦИИ</h2>
					<div className={iq.rules}>
						<img src={one} />
						<h3><span>ПОКУПАЙТЕ</span> бумагу IQ со стикером*</h3>						
						<div className={iq.scroll}>
							<div className={iq.paper} id="moscow">
							<a href="#"><img src={IqPremiumStanding} /></a>
							<a href="#"><img src={IqUltraStanding} /></a>
							<a href="#"><img className="c-paper" src={IqSmoothStanding} /></a>
							<a href="#"><img src={IqAllroundStanding} /></a>
							<a href="#"><img src={IqEconomyStanding} /></a>
							</div>
						</div>										
						
						<p className={iq.pad}>*В любом магазине вашего города и в online магазинах.<br />
							В акции участвуют бренды IQ ULTRA, IQ PREMIUM, IQ SMOOTH, IQ ALLROUND, IQ ECONOMY – только формата А4, 80г</p>
					</div>
					
					<div className={iq.rules} id="rules">
						<img src={two} />
					<h3><span>НАКОПИТЕ</span> как можно больше слов <span>«МИЛЛИОН»</span></h3>
						<p className={iq.pad}>Найдите коды под стикерами со словами «МИЛЛИОН» или «ВОПРОС» и зарегистрируйте их на сайте</p>
						
						<div className={iq.scheme}>							
							<img className={iq.mob} src={labelM} />
							<img className={iq.mob} src={arround} />
							<div className={iq.question}>
								<div className={iq.qH}><h4>ВОПРОС</h4></div>
								<div className={iq.qT}><p>Найдите слово «ВОПРОС», зарегистрируйте код в&nbsp;Личном кабинете, ответьте правильно на интеллектуальный вопрос и получите слово «МИЛЛИОН»</p></div>
							</div>
							
							<div className={[iq.mob]+' '+[iq.or]}>или</div>
							
							<div className={iq.question}>
								<div className={iq.qH}><h4>МИЛЛИОН</h4></div>
								<div className={iq.qT}><p>Найдите слово «МИЛЛИОН» и&nbsp;зарегистрируйте код в&nbsp;Личном кабинете</p></div>
							</div>
							
							<img  className={[iq.mob]+' '+[iq.arrow]}  src={arrowBottom} />
							
							<div className={iq.question}>
								<div className={iq.qL}><p>Получите слово <span>«МИЛЛИОН»</span> в Личный кабинет</p></div>
							</div>	
										
						</div>
					</div>
				
					<div className={iq.rules}>
						<img src={three} />
						<h3><span>ПОЛУЧИТЕ</span> возможность выиграть <span>МИЛЛИОН</span> рублей</h3>
					</div>

					<div className={iq.gifts}>
						<div>
							<img src={i250000} />
							<h4>Ежемесячный розыгрыш</h4>
							<p>В розыгрыше участвуют все полученные слова «МИЛЛИОН» за месяц</p>
						</div>
							
						<div className={iq.central}>
							<img src={million} />
							<h4>Главный приз</h4>
							<p>Главный приз может выиграть только тот, кто участвовал во всех трех розыгрышах</p>
						</div>
				
						<div>
							<img  src={shirts} />
							<h4>Брендированный набор*</h4>
							<p>Накопите 30 слов «МИЛЛИОН» и получите подарок*</p>
						</div>
						
						<p>*Количество призов ограничено</p>
					</div>
				</div>		
			
						
				<div id="gifts" className={iq.blockThird}>
					<h2>РОЗЫГРЫШИ ПРИЗОВ</h2>
					<img className={[iq.faces2]+' '+[iq.desk]} src={faces2} />
					
					<div className={iq.mainGift}>
						<div>	
							<img src={millionWwithoutCircle} />
							<div>
								<p className={iq.desk}>Розыгрыш главного приза <span>1&nbsp;000&nbsp;000&nbsp;руб.*</span> – 30.04.2024</p>
								<p className={[iq.mob]+' '+[iq.gift1]}>Розыгрыш главного&nbsp;приза <span>1&nbsp;000&nbsp;000&nbsp;руб.*</span></p>
								<p className={[iq.mob]+' '+[iq.gift2]}>30.04.2024</p>
								<p className={iq.desk}>* Главный приз может выиграть только тот, кто участвовал во всех трех розыгрышах</p>
							</div>
						</div>	
					</div>
					
					<p className={[iq.mob]+' '+[iq.gift3]}>* Главный приз может выиграть только тот, кто&nbsp;участвовал во всех трех розыгрышах</p>
					
					<p className={iq.dates}>Даты ближайших розыгрышей денежных призов</p>
					
					<div className={iq.gift250}>
						<div className={iq.desk}>
							<div>
								<p>26.02.2024</p>
							</div>
							
							<div>
								<p>26.03.2024</p>
							</div>
							<div>
								<p>26.04.2024</p>
							</div>
						</div>	
					
						<div className={iq.mob}>
							<img src={i250000} />
							<div>
								<p>26.02.2024</p>
								<p>26.03.2024</p>
								<p>26.04.2024</p>
							</div>
						</div>
				</div>
				
					<div className={iq.iqButton}>
						<p>Регистрируйте коды со стикеров на&nbsp;сайте</p>
						<a href="#">www.iq-million.ru</a>
						<p>и выигрывайте денежные призы!</p>
					</div>
			
				</div>
				
			</div>
		</div>		

		<div className={iq.iqBottom}>
			<div className={iq.iqBcontent}>
				<div>
					<h3>O Mondi</h3>
					<p>Mondi – один из глобальных лидеров по производству упаковочных материалов и бумаги. Устойчивое развитие лежит в основе всего, что мы делаем.</p>

					<p>Mondi Uncoated Fine Paper (Немелованные высококачественные бумаги) – бизнес-единица Группы Mondi. На шести предприятиях в Австрии, Словакии, России и ЮАР Mondi UFP производит целлюлозу, экологически чистые офисные бумаги и бумаги для профессиональной печати, отвечающие требованиям новейших технологий профессиональной цифровой и офсетной печати.</p>					
				</div>
			
				<div>
					<h3>О бренде</h3>
					<p>Интеллект всегда был тесно связан с основами письма. Наша бумага IQ позволит вам сосредоточиться на самом главном: идеях и мыслях. Выбрать IQ – значит создать интеллектуальный образ при деловом общении. IQ приглашает вас в захватывающее путешествие по увлекательному миру знаний и идей!</p>
				</div>
			
				<img src={logoCircle} />
			</div>	
		</div>	
	
		
	
	

{/*
	<script src="js/jquery-3.7.1.min.js"></script>
	<script src="js/owl.carousel.min.js"></script>
	 <script>
 $(document).ready(function(){
 
	$(".owl-carousel").owlCarousel({
	
			items: 3,
			loop: true,
			
			rewind: true,
			margin:30,
			
			nav: true,
			center: true,
			dots:false

  })}
 ) 


$(init);

function init() {
  $('#slider').append($('#c-wrap'));
  $('.scroll').append($('#region'));
 }

function menuOnClick() {
	document.getElementById("menu-bar").classList.toggle("change");
	document.getElementById("nav").classList.toggle("change");
	document.getElementById("menu-bg").classList.toggle("change-bg");
	document.getElementById("menu-full-bg").classList.toggle("menu-full-change");
	document.getElementById("a1").classList.toggle("a-rotate");
	document.getElementById("a2").classList.toggle("a-rotate");
	document.getElementsById("menu-full-bg").classList.toggle("menu-full-change");
}


function fMenu() {	
	        $(window).scroll(function(){
	            if($(this).scrollTop()>85) {
	                $('.header-menu').addClass('f-menu');					
	            }
	            else if ($(this).scrollTop()<85){
	                $('.header-menu').removeClass('f-menu');
					$("#menu-full-bg").removeClass('menu-full-change');
					$("#menu-bg").removeClass('change-bg');
					$('#nav').removeClass('change');
					$('#menu-bar').removeClass('change');
					$('.nav a').removeClass('a-rotate');							
	            }
	        });
	    };
fMenu();


	</script> */}
	



    
   </div>
</>
}

export default IqMillion