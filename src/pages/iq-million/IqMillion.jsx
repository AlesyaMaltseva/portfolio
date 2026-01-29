import $ from 'jquery';
import './css/iq.css';
import './css/owl.carousel.min.css';
import './css/owl.theme.default.min.css';
import './css/animate.css';
import AnchorLink from 'react-anchor-link-smooth-scroll'
// import './img/images.js';
import logo from "./img/iq-logo.png";
import one from "./img/one.png";
import two from "./img/two.png";
import three from "./img/three.png";
import IqPremiumStanding from "./img/IQ-Premium-standing-A4-1.png";
import IqUltraStanding from "./img/IQ-Ultra-standing-A4-1.png";
import IqSmoothStanding from "./img/IQ-Smooth-standing-A4-1.png";
import IqAllroundStanding from "./img/IQ-Allround-standing-A4-1.png";
import IqEconomyStanding from "./img/IQ-Economy-standing-A4-1.png";
import faces3 from "./img/faces3.png";
import labelM from "./img/label-m.png";
import arround from "./img/arround.svg";
import arrowBottom from "./img/arrow-bottom.svg";
import i250000 from "./img/250000.png";
import million from "./img/million.png";
import shirts from "./img/shirts.png";
import faces2 from "./img/faces-2.png";
import millionWwithoutCircle from "./img/million-without-circle.png";
import logoCircle from "./img/logo-circle.png";

function IqMillion() {

    return <>   
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap"></link>
	<AnchorLink href='#home' id="home"></AnchorLink>	
		<div className="header-menu">	
		<div className="h-m">			
				<AnchorLink href="#home"><img src={logo} /></AnchorLink>
				<div className="desk">
					<AnchorLink href="#rules">Правила</AnchorLink>
					<AnchorLink href="#gifts">Розыгрыши&nbsp;призов</AnchorLink>
				</div>
				

										
				<div id="menu">
					<div className="menu-top">
						<div id="menu-bar" onclick="menuOnClick()">
							<div id="bar1" className="bar"></div>
							<div id="bar2" className="bar"></div>
							<div id="bar3" className="bar"></div>
						</div>
						<nav className="nav" id="nav">
							<ul>
							  <li onclick="menuOnClick()">
								<AnchorLink id="a1" href="#rules">Правила</AnchorLink>
							 </li>
							  <li onclick="menuOnClick()">
								<AnchorLink id="a2" href="#gifts">Розыгрыши призов</AnchorLink>
							 </li>        
							</ul>
						</nav> 
					</div>
				</div>
					  
				<div className="menu-bg" id="menu-bg"></div>
				<div onclick="menuOnClick()" className="menu-full-bg" id="menu-full-bg"></div> 			

		</div>	
				
		</div>
			
		<div className="iq-top">
			<div className="iq-t-content">		
				<div className="blockFirst">
					<div id="slider" className="slider desk">
						<div className="owl-carousel owl-theme">
							<div><img src={IqPremiumStanding} /></div>
							<div><img src={IqUltraStanding} /></div>
							<div><img src={IqSmoothStanding} /></div>
							<div><img src={IqAllroundStanding} /></div>
							<div><img src={IqEconomyStanding} /></div>
						</div>
					</div>
					
					<div className="mobFaces"><img src={faces3} /></div>
						
					<div className="list">
						<p><span>IQ</span> НА МИЛЛИОН</p>
						<div>	
							<p>Акция проходит с 01.02.2024 по 30.04.2024</p>
								<div className="desk">
									<p><img src={one} /><span><b>Покупайте</b> офисную бумагу IQ в любом магазине вашего города</span></p>
									<p><img src={two} /><span><b>Зарегистрируйте</b> офисную бумагу IQ в любом магазине вашего города</span></p>
									<p id="rules"><img src={three} /><span><b>Выигрывайте</b> ежемесячно 250&nbsp;000&nbsp;₽ или главный приз 1&nbsp;000&nbsp;000&nbsp;₽</span></p>
								</div>
						</div>
					</div>
				</div>			
						
				<div  className="blockSecond">
					<h2 className="rules-h" >ПРАВИЛА АКЦИИ</h2>
					<div className="rules">
						<img src={one} />
						<h3><span>ПОКУПАЙТЕ</span> бумагу IQ со стикером*</h3>						
						<div className="scroll">
							<div className="paper" id="moscow">
							<a href="#"><img src={IqPremiumStanding} /></a>
							<a href="#"><img src={IqUltraStanding} /></a>
							<a href="#"><img className="c-paper" src={IqSmoothStanding} /></a>
							<a href="#"><img src={IqAllroundStanding} /></a>
							<a href="#"><img src={IqEconomyStanding} /></a>
							</div>
						</div>										
						
						<p className="pad">*В любом магазине вашего города и в online магазинах.<br />
							В акции участвуют бренды IQ ULTRA, IQ PREMIUM, IQ SMOOTH, IQ ALLROUND, IQ ECONOMY – только формата А4, 80г</p>
					</div>
					
					<div className="rules">
						<img src={two} />
					<h3><span>НАКОПИТЕ</span> как можно больше слов <span>«МИЛЛИОН»</span></h3>
						<p className="pad">Найдите коды под стикерами со словами «МИЛЛИОН» или «ВОПРОС» и зарегистрируйте их на сайте</p>
						
						<div className="scheme">
							
							<img className="mob" src={labelM} />
							<img className="mob" src={arround} />
							<div className="question">
								<div className="q-h"><h4>ВОПРОС</h4></div>
								<div className="q-t"><p>Найдите слово «ВОПРОС», зарегистрируйте код в&nbsp;Личном кабинете, ответьте правильно на интеллектуальный вопрос и получите слово «МИЛЛИОН»</p></div>
							</div>
							
							<div className="mob or">или</div>
							
							<div className="question">
								<div className="q-h"><h4>МИЛЛИОН</h4></div>
								<div className="q-t"><p>Найдите слово «МИЛЛИОН» и&nbsp;зарегистрируйте код в&nbsp;Личном кабинете</p></div>
							</div>
							
							<img  className="mob arrow"  src={arrowBottom} />
							
							<div className="question">
								<div className="q-l"><p>Получите слово <span>«МИЛЛИОН»</span> в Личный кабинет</p>	</div>
							</div>	
										
						</div>
					</div>
				
					<div className="rules">
						<img src={three} />
						<h3><span>ПОЛУЧИТЕ</span> возможность выиграть <span>МИЛЛИОН</span> рублей</h3>
					</div>

					<div className="gifts">
						<div>
							<img src={i250000} />
							<h4>Ежемесячный розыгрыш</h4>
							<p>В розыгрыше участвуют все полученные слова «МИЛЛИОН» за месяц</p>
						</div>
							
						<div className="central">
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
			
						
				<div id="gifts" className="blockThird">
					<h2>РОЗЫГРЫШИ ПРИЗОВ</h2>
					<img className="faces-2 desk" src={faces2} />
					
					<div className="main-gift">
						<div>	
							<img src={millionWwithoutCircle} />
							<div>
								<p className="desk">Розыгрыш главного приза <span>1&nbsp;000&nbsp;000&nbsp;руб.*</span> – 30.04.2024</p>
								<p className="mob gift1">Розыгрыш главного&nbsp;приза <span>1&nbsp;000&nbsp;000&nbsp;руб.*</span></p>
								<p className="mob gift2">30.04.2024</p>
								<p className="desk">* Главный приз может выиграть только тот, кто участвовал во всех трех розыгрышах</p>
							</div>
						</div>	
					</div>
					
					<p className="mob gift3">* Главный приз может выиграть только тот, кто&nbsp;участвовал во всех трех розыгрышах</p>
					
					<p className="dates">Даты ближайших розыгрышей денежных призов</p>
					
					<div className="gift250">
						<div className="desk">
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
					
						<div className="mob">
							<img src={i250000} />
							<div>
								<p>26.02.2024</p>
								<p>26.03.2024</p>
								<p>26.04.2024</p>
							</div>
						</div>
				</div>
				
					<div className="iq-button">
						<p>Регистрируйте коды со стикеров на&nbsp;сайте</p>
						<a href="#">www.iq-million.ru</a>
						<p>и выигрывайте денежные призы!</p>
					</div>
			
				</div>
				
			</div>
		</div>		

		<div className="iq-bottom">
			<div className="iq-b-content">
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
	



    
    </>
}

export default IqMillion