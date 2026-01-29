import "./css/iq-summer.css"
import IQEconomy from "./img/IQ-economy.png";
import IQAllround from "./img/IQ-allround.png";
import IQUltra from "./img/IQ-ultra.png";
import woman from "./img/woman.png";
import woman2 from "./img/woman2.png";
import qrcode from "./img/qrcode.jpg";
import papaJhons from "./img/papa-jhons.png";
import pizza from "./img/pizza.png";
import logo from "./img/lego.png";
import kitfort from "./img/kitfort.png";
import bag from "./img/bag.png";
import iphone from "./img/iphone.png";
import paperEconomy from "./img/paper-economy.png";
import paperAllround from "./img/paper-allround.png";
import paperUltra from "./img/paper-ultra.png";
import heart from "./img/heart.png";



function IqSummer() {

    return <>
    <div className="summer">
    <div className="top-block">
      
        <div className="woman">
            <div className="gray"></div>
                <div className="header">
                    <div>    
                        <h2>Лето подарков с IQ</h2>
                        <ul>
                            <li><span>Купите офисную бумагу <b><a href="#paper">IQ ECONOMY</a>, <a href="#paper">IQ ALLROUND</a></b> или <b><a href="#paper">IQ ULTRA</a></b></span></li>
                            <li><span>Зарегистрируйте покупку в чат-боте</span></li>
                            <li><span>Получите гарантированный подарок*</span></li>
                        </ul>
                        <div className="brands">
                            <a href="#paper"><img src={IQEconomy} /></a>
                            <a href="#paper"><img src={IQAllround} /></a>
                            <a href="#paper"><img src={IQUltra} /></a>
                        </div>
                    </div>
                    <div className="lad">
                    <img class='woman' src={woman} />
                    <img class='woman1' src={woman2} />
                    </div>
                </div>
                
                <div className="action-date">
                    <div>
                        <a className="chat-bot" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 11V9.00003H89.1875L81.5 1.5L83 0L93 10L83 20L81.5 18.5L89.1875 11H0Z" />
                              </svg>
                            <p>чат – бот</p>
                            
                        </a>
                        <div className="notes">* Объем минимальной покупки – 20 пачек бумаги </div>
                    </div>
                    <div className="date">Акция с 15 июня<br  />
                                    по 15 сентября 2021 года</div>
                </div>
        </div>
                
        <div className="steps">
                    <div className="qr">
                        <div className="list">
                            <h3>Для участия необходимо выполнить<br  />5 простых шагов:</h3>
                            <ol>
                                <li><span>Совершите покупку офисной бумаги брендов <b><a href="#paper">IQ&nbsp;ECONOMY, IQ ALLROUND, IQ ULTRA</a></b> на сайтах официальных дистрибьюторов, а также в розничных сетях и маркетплейсах</span></li>
                                 <li><span>Сохраните чек или УПД о совершенной покупке до окончания акции**</span></li>
                                <li><span>Пришлите фото УПД или чека о покупке в чат-бот в WhatsApp по номеру <b>+7 (968) 950-20-20</b></span></li>
                                <li><span>Получите подтверждение от организаторов</span></li>
                                <li><span>Получите приз согласно купленному объему офисной бумаги в чеке или УПД</span></li>
                            </ol>
                            <div class='border'>1 чек/УПД = 1 подарок</div>
                        </div>
                       
                    </div>
                    
                    <img src={qrcode} />

        </div>
                <div className="notes">**Количество чеков / УПД, участвующих в Акции от одного участника не ограничено. Товары разных брендов внутри одного чека / УПД суммируются.</div>

        
        <div className="pizza">
            <div>
                <img src={papaJhons} />
                <h2>Промокод на пиццу</h2>
                <p>за покупку офисной бумаги</p>
                <a href="#paper"><div class='border'>от 20 пачек</div></a> <p className="or">или</p> <a href="#paper"><div class='border'>от 40 пачек</div></a>
            </div>
            <img src={pizza} />

        </div>


        <div className="podarki">
            <div>
                <img src={logo} />
                
                    <h3>Настольная игра</h3>
                    <p>за покупку офисной бумаги</p>
                    <div><span class='border'>от 55 пачек</span></div>
                
            </div>
            <div>
                <img src={kitfort} />
                
                    <h3>Портативный блендер Kitfort</h3>
                    <p>за покупку офисной бумаги</p>
                    <div><span class='border'>от 110 пачек</span></div>
                
            </div>
            <div>
                <img src={bag} />
               
                    <h3>Рюкзак</h3>
                    <p>за покупку офисной бумаги</p>
                    <div><span class='border'>от 165 пачек</span></div>
               
            </div>
        </div>


        <div className="iphone">
            <img src={iphone} />
            <div>
                <h3>16 сентября 2021 года</h3>
                <h2>Дополнительный розыгрыш iPhone</h2>
                <p>Все, кто принял участие в акции и зарегистрировал покупку бумаги от 200 пачек единоразово, участвуют в розыгрыше <strong>iPhone 12 Pro Pacific Blue</strong></p>
                <a className="chat-bot first" href="#">
                    <svg   xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 11V9.00003H89.1875L81.5 1.5L83 0L93 10L83 20L81.5 18.5L89.1875 11H0Z" />
                      </svg>
                    <p>подробные правила</p>
                 </a>
            </div>
            <a className="chat-bot second" href="#">
                <svg   xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 11V9.00003H89.1875L81.5 1.5L83 0L93 10L83 20L81.5 18.5L89.1875 11H0Z" />
                  </svg>
                <p>подробные правила</p>
             </a>
        </div>

        
    </div>
    
    <a name="paper"></a>
    <div className="bottom-block">
        <div className="paper">
            <h2>Бумага для офисной техники</h2>
            <div>
                <div>
                    <img src={paperEconomy} />
                    <a className="chat-bot" href="#">
                        <svg   xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 11V9.00003H89.1875L81.5 1.5L83 0L93 10L83 20L81.5 18.5L89.1875 11H0Z" />
                          </svg>
                        <p>купить</p>
                     </a>
                </div>
                <div>
                    <img src={paperAllround} />
                    <a className="chat-bot" href="#">
                        <svg   xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 11V9.00003H89.1875L81.5 1.5L83 0L93 10L83 20L81.5 18.5L89.1875 11H0Z" />
                          </svg>
                        <p>купить</p>
                     </a>
                </div>
                <div>
                    <img src={paperUltra} />
                    <a className="chat-bot" href="#">
                        <svg   xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 11V9.00003H89.1875L81.5 1.5L83 0L93 10L83 20L81.5 18.5L89.1875 11H0Z" />
                          </svg>
                        <p>купить</p>
                     </a>
                </div>

            </div>
        
        
        </div>
    </div>
        
    <div className="heart">
        <h2>Как получить подарок?</h2>
        <img src={heart} />
        <a className="chat-bot first" href="#">
            <svg   xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 11V9.00003H89.1875L81.5 1.5L83 0L93 10L83 20L81.5 18.5L89.1875 11H0Z" />
              </svg>
            <p>чат-бот</p>
         </a>

         <a className="chat-bot second" href="#">
            <svg   xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 11V9.00003H89.1875L81.5 1.5L83 0L93 10L83 20L81.5 18.5L89.1875 11H0Z" />
              </svg>
            <p>зарегистрировать</p>
         </a>
    </div>
    
    
</div>
    </>
}

export default IqSummer;