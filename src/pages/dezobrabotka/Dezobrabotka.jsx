import uuid from 'react-uuid';
import "./css/dezobrabotka.css";
import dez from "./css/dezobrabotka.module.css";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import pict1 from "./img/pict1.png";
import pict2 from "./img/pict2.png";
import shtraf1 from "./img/shtraf1.png";
import pict3 from "./img/pict3.png";
import pict8 from "./img/pict8.jpg";
import pict4 from "./img/pict4.png";
import picture10 from "./img/picture-10.png";
import pict7 from "./img/pict7.png";
import FAQ from './FAQ.jsx'


function Dezobrabotka() {

  const links = [{header:'Дезинсекция', link:'#d-i'},
                {header:'Обработка от клещей', link:'#d-k'},
                {header:'Дератизация', link:'#d-r'},
                {header:'Обработка от плесени и грибка', link:'#d-a'},
                {header:'Комплексное решение', link:'#complex'},
                {header:'F.A.Q', link:'#faq'}] 

  const anchorLinks = links.map(item => <AnchorLink key={uuid()} href={item.link} offset='80'>{item.header}</AnchorLink>)

    return <>
<div className="slider" id="up">
  <div className="blocks top-line">    
    {anchorLinks}    
  </div>
</div>

<div className={dez.dezobrabotka}>
  <div className="blocks main-block">
    <div className="left">
      <h1>Уничтожение насекомых, <span> грызунов, обработка</span> от плесени и грибка</h1>
      <a className="order" href="mailto:alesya.maltseva@gmail.com?subject=Заявка на Уничтожение насекомых и грызунов, обработку от плесени и грибка&body=Добрый день!%0A%0AУкажите, пожалуйста, следующую информацию.%0A%0A
Название компании: %0A&#xA;
Адрес фактического местонахождения:%0A&#xA;
Номер телефона: %0A&#xA;
Контактное лицо:%0A&#xA;">Заказать</a>
      <a className="phone" href="tel:+000">+7 (495) 000-00-00</a>
        <a className="mail" href="mailto:alesya.maltseva@gmail.com?subject=Заявка на Дезинсекцию, дератизацию и дезинфекцию&body=Добрый день!%0A%0AУкажите, пожалуйста, следующую информацию.%0A%0A
Название компании: %0A&#xA;
Адрес фактического местонахождения:%0A&#xA;
Номер телефона: %0A&#xA;
Контактное лицо:%0A&#xA;">mail-to-us@gmail.com</a>
      <p>*прием заявок пн-пт с 9:00 до 18:00</p>
    </div>
    <div className="right"><img src={pict1} /></div>
  </div>

  <h3>О нас</h3>
  <div className="blocks about">
    <div className="left">
      <p>Наша компания предоставляет комплекс мер по уничтожению насекомых, грызунов, вирусов и бактерий.</p>
      <p className="more">Преимущества работы с нами:</p>
      <ul className="service">
        <li>Обработка площадей любой сложности.</li>
        <li>Бесплатный аудит объектов площадью от 500&nbsp;кв.м.</li>
        <li>Выезд на объект в течение 24 часов с момента подтверждения.</li>
        <li>Возможность обработки в любое время суток*.</li>
        <li>Скидка до 50% при долгосрочных контрактах.</li>
        <li>Предоставляем полный комплект документов.</li>
      </ul>
      <p>*Стоимость ночных выездов согласовывается отдельно.</p>
    </div>
    <div className="right"><img src={pict2} /></div>
  </div>


  <h3>Штраф</h3>
  <div className="blocks d-i">
    <div className="left">
            <p>В соответствии со статьёй 6.6 и 6.4 КоАП Российской Федерации за нарушение санитарно-эпидемиологических требований для юридических лиц, предусмотрен штраф до 150 000 рублей или приостановление деятельности на 90 суток.</p>
    </div>
    <div className="right shtraf">
      <img src={shtraf1} />
    </div>
  </div>

  <h3 id="d-i">Дезинсекция</h3>
  <div className="blocks d-i">
    <div className="left">
      <p>Процедура уничтожения насекомых <b>(тараканов, клопов, клещей и т.д.)</b>.
        <br />Для обработки используется: аэрозольная, гелевая дезинсекция, механические методы. Выбор методов осуществляют специалисты после анализа объекта.</p>
      <p><b>VIP услуга</b> - обработка специальным гелем. Это наиболее комфортный способ дезинсекции - не требуется предварительная подготовка помещения, сотрудникам не нужно его освобождать, отсутствует запах. По итогам обработки выдается полный комплект необходимых документов.</p>

    </div>
    <div className="right">
      <img src={pict3} />
    </div>
  </div>

  <h3 className="tar">Тарифы</h3>
  <div className="blocks price">
    <div className="pricing">
      <div className="top-p">
        <div>ДО 200 КВ.М</div>
      </div>
      <div className="bot-p">
        <div>6600 ₽</div>
        <a className="order" href="mailto:dezobrabotka@?subject=Заявка на Дезинсекцию до 200 кв.м&body=Добрый день!%0A%0AУкажите, пожалуйста, следующую информацию.%0A%0A
Название компании: %0A&#xA;
Адрес фактического местонахождения:%0A&#xA;
Номер телефона: %0A&#xA;
Контактное лицо:%0A&#xA;">Заказать</a>
      </div>
    </div>
    <div className="pricing">
      <div className="top-p">
        <div>500 КВ.М</div>
      </div>
      <div className="bot-p">
        <div>9000 ₽</div>
        <a className="order" href="mailto:dezobrabotka@?subject=Заявка на Дезинсекцию 500 кв.м&body=Добрый день!%0A%0AУкажите, пожалуйста, следующую информацию.%0A%0A
Название компании: %0A&#xA;
Адрес фактического местонахождения:%0A&#xA;
Номер телефона: %0A&#xA;
Контактное лицо:%0A&#xA;">Заказать</a>
      </div>
    </div>
    <div className="pricing">
      <div className="top-p">
        <div>1000 КВ.М</div>
      </div>
      <div className="bot-p">
        <div>15000 ₽</div>
        <a className="order" href="mailto:dezobrabotka@?subject=Заявка на Дезинсекцию 1000 кв.м&body=Добрый день!%0A%0AУкажите, пожалуйста, следующую информацию.%0A%0A
Название компании: %0A&#xA;
Адрес фактического местонахождения:%0A&#xA;
Номер телефона: %0A&#xA;
Контактное лицо:%0A&#xA; ">Заказать</a>
      </div>
    </div>
    <div className="pricing">
      <div className="top-p">
        <div>2000 КВ.М</div>
      </div>
      <div className="bot-p">
        <div>25200 ₽</div>
        <a className="order" href="mailto:dezobrabotka@?subject=Заявка на Дезинсекцию 2000 кв.м&body=Добрый день!%0A%0AУкажите, пожалуйста, следующую информацию.%0A%0A
Название компании: %0A&#xA;
Адрес фактического местонахождения:%0A&#xA;
Номер телефона: %0A&#xA;
Контактное лицо:%0A&#xA; ">Заказать</a>
      </div>
    </div>
  </div>
  <p className="skidki">*Скидки до 50% при долгосрочных контрактах.</p>

  <h2 className="kleshch" id="d-k">СЕЗОННОЕ ПРЕДЛОЖЕНИЕ!<br />Обработка от КЛЕЩЕЙ*</h2>
  <div className="blocks d-i">
    <div className="left">
      <p><b>Успейте обработать участок от клещей по ВЫГОДНОЙ ЦЕНЕ!</b></p>
      <p className="more">Что входит в услугу:</p>
      <ul className="service">
        <li>100% устранение клещей.</li>
        <li>Обработка сертифицированной продукцией безопасной для людей и&nbsp;животных.</li>
        <li>Необходимый пакет документов для проверяющих органов.</li>
        <li>Выезд бригады в любое удобное для вас время 24/7.</li>
      </ul>
      <p><b>МЫ ОКАЗЫВАЕМ УСЛУГУ БЕЗ ПРЕДОПЛАТЫ.</b>
        <br /> Вы производите оплату только после оказания услуги!</p>
      <p className="kleshch"><b>Срок проведения акции ограничен!</b></p>
      <p>*Услуга не входит в комплексное предложение.</p>
    </div>
    <div className="right kleshch">
      <img src={pict8} />
    </div>
  </div>
  <h3 className="tar">Тарифы</h3>
  <div className="blocks price kleshch__price">
    <div className="pricing">
      <div className="top-p__klesh">
        <div>до 10 соток</div>
      </div>
      <div className="bot-p kleshch__price--item">
        <div>8400 ₽</div>
        <a className="order" href="mailto:dezobrabotka@?subject=Заявка на Дезинсекцию до 200 кв.м&body=Добрый день!%0A%0AУкажите, пожалуйста, следующую информацию.%0A%0A
Название компании: %0A&#xA;
Адрес фактического местонахождения:%0A&#xA;
Номер телефона: %0A&#xA;
Контактное лицо:%0A&#xA;">Заказать</a>
      </div>
    </div>

    <div className="pricing">
        <div className="top-p__klesh">
          <div>11 - 30 соток</div>
        </div>
        <div className="bot-p kleshch__price--item">
          <div>720 ₽</div>
          <a className="order" href="mailto:dezobrabotka@?subject=Заявка на Дезинсекцию до 200 кв.м&body=Добрый день!%0A%0AУкажите, пожалуйста, следующую информацию.%0A%0A
  Название компании: %0A&#xA;
  Адрес фактического местонахождения:%0A&#xA;
  Номер телефона: %0A&#xA;
  Контактное лицо:%0A&#xA;">Заказать</a>
        </div>
      </div>

      <div className="pricing">
        <div className="top-p__klesh">
          <div>31 - 50 соток</div>
        </div>
        <div className="bot-p kleshch__price--item">
          <div>660 ₽</div>
          <a className="order" href="mailto:dezobrabotka@?subject=Заявка на Дезинсекцию до 200 кв.м&body=Добрый день!%0A%0AУкажите, пожалуйста, следующую информацию.%0A%0A
  Название компании: %0A&#xA;
  Адрес фактического местонахождения:%0A&#xA;
  Номер телефона: %0A&#xA;
  Контактное лицо:%0A&#xA;">Заказать</a>
        </div>
      </div>

      <div className="pricing">
        <div className="top-p__klesh">
          <div>51 - 100 соток (1 га)</div>
        </div>
        <div className="bot-p kleshch__price--item">
          <div>420 ₽</div>
          <a className="order" href="mailto:dezobrabotka@?subject=Заявка на Дезинсекцию до 200 кв.м&body=Добрый день!%0A%0AУкажите, пожалуйста, следующую информацию.%0A%0A
  Название компании: %0A&#xA;
  Адрес фактического местонахождения:%0A&#xA;
  Номер телефона: %0A&#xA;
  Контактное лицо:%0A&#xA;">Заказать</a>
        </div>
      </div>

      <div className="pricing">
        <div className="top-p__klesh">
          <div>1 га - 5 га</div>
        </div>
        <div className="bot-p kleshch__price--item">
          <div>264 ₽</div>
          <a className="order" href="mailto:dezobrabotka@?subject=Заявка на Дезинсекцию до 200 кв.м&body=Добрый день!%0A%0AУкажите, пожалуйста, следующую информацию.%0A%0A
  Название компании: %0A&#xA;
  Адрес фактического местонахождения:%0A&#xA;
  Номер телефона: %0A&#xA;
  Контактное лицо:%0A&#xA;">Заказать</a>
        </div>
      </div>

      <div className="pricing">
        <div className="top-p__klesh">
          <div>свыше 5 га </div>
        </div>
        <div className="bot-p kleshch__price--item">
          <div className="kleshch__price--txt">по договоренности</div>
          <a className="order" href="mailto:dezobrabotka@?subject=Заявка на Дезинсекцию до 200 кв.м&body=Добрый день!%0A%0AУкажите, пожалуйста, следующую информацию.%0A%0A
  Название компании: %0A&#xA;
  Адрес фактического местонахождения:%0A&#xA;
  Номер телефона: %0A&#xA;
  Контактное лицо:%0A&#xA;">Заказать</a>
        </div>
      </div>
  </div>

  <h3 id="d-r">Дератизация</h3>
  <div className="blocks d-r">
    <div className="left">
      <img src={pict4} />
    </div>
    <div className="right">
      <p>Комплекс мер, направленных на уничтожение <b>грызунов</b>.</p>
      <p>Для подбора наиболее эффективного метода наши специалисты проводят оценку и мониторинг состояния помещений и прилегающей территории.</p>
    </div>
  </div>

  <h3 className="tar">Тарифы</h3>
  <div className="blocks price">
    <div className="pricing">
      <div className="top-p">
        <div>ДО 200 КВ.М</div>
      </div>
      <div className="bot-p">
        <div>6600 ₽</div>
        <a className="order" href="mailto:dezobrabotka@?subject=Заявка на Дератизацию до 200 кв.м&body=Добрый день!%0A%0AУкажите, пожалуйста, следующую информацию.%0A%0A
Название компании: %0A&#xA;
Адрес фактического местонахождения:%0A&#xA;
Номер телефона: %0A&#xA;
Контактное лицо:%0A&#xA;">Заказать</a>
      </div>
    </div>
    <div className="pricing">
      <div className="top-p">
        <div>500 КВ.М</div>
      </div>
      <div className="bot-p">
        <div>8100 ₽</div>
        <a className="order" href="mailto:dezobrabotka@?subject=Заявка на Дератизацию 500 кв.м&body=Добрый день!%0A%0AУкажите, пожалуйста, следующую информацию.%0A%0A
Название компании: %0A&#xA;
Адрес фактического местонахождения:%0A&#xA;
Номер телефона: %0A&#xA;
Контактное лицо:%0A&#xA;">Заказать</a>
      </div>
    </div>
    <div className="pricing">
      <div className="top-p">
        <div>1000 КВ.М</div>
      </div>
      <div className="bot-p">
        <div>9600 ₽</div>
        <a className="order" href="mailto:dezobrabotka@?subject=Заявка на Дератизацию 1000 кв.м&body=Добрый день!%0A%0AУкажите, пожалуйста, следующую информацию.%0A%0A
Название компании: %0A&#xA;
Адрес фактического местонахождения:%0A&#xA;
Номер телефона: %0A&#xA;
Контактное лицо:%0A&#xA;">Заказать</a>
      </div>
    </div>
    <div className="pricing">
      <div className="top-p">
        <div>2000 КВ.М</div>
      </div>
      <div className="bot-p">
        <div>20400 ₽</div>
        <a className="order" href="mailto:dezobrabotka@?subject=Заявка на Дератизацию 2000 кв.м&body=Добрый день!%0A%0AУкажите, пожалуйста, следующую информацию.%0A%0A
Название компании: %0A&#xA;
Адрес фактического местонахождения:%0A&#xA;
Номер телефона: %0A&#xA;
Контактное лицо:%0A&#xA;">Заказать</a>
      </div>
    </div>
  </div>
  <p className="skidki">*Скидки до 50% при долгосрочных контрактах.</p>

  <h3  id="d-a">Обработка от плесени и грибка</h3>
  <div className="blocks d-a">
    <div className="left">
      <p>Плесень и грибок способны вызывать различные заболевания: дыхательных путей, аллергические реакции кожи, головные боли и много другое. Для предотвращения развития и уничтожения плесени мы проводим дезинфекцию помещения с использованием сертифицированной профессиональной продукции.</p>
    </div>
    <div className="right">
      <img src={picture10} />
    </div>
  </div>

  <h3 className="tar">Тарифы</h3>
  <div className="blocks price">
    <div className="pricing">
      <div className="top-p">
        <div>ДО 200 КВ.М</div>
      </div>
      <div className="bot-p">
        <div>6600 ₽</div>
        <a className="order" href="mailto:dezobrabotka@?subject=Заявка на Обработку от плесени и грибка до 200 кв.м&body=Добрый день!%0A%0AУкажите, пожалуйста, следующую информацию.%0A%0A
Название компании: %0A&#xA;
Адрес фактического местонахождения:%0A&#xA;
Номер телефона: %0A&#xA;
Контактное лицо:%0A&#xA; ">Заказать</a>
      </div>
    </div>
    <div className="pricing">
      <div className="top-p">
        <div>500 КВ.М</div>
      </div>
      <div className="bot-p">
        <div>13870 ₽</div>
        <a className="order" href="mailto:dezobrabotka@?subject=Заявка на Обработку от плесени и грибка 500 кв.м&body=Добрый день!%0A%0AУкажите, пожалуйста, следующую информацию.%0A%0A
Название компании: %0A&#xA;
Адрес фактического местонахождения:%0A&#xA;
Номер телефона: %0A&#xA;
Контактное лицо:%0A&#xA; ">Заказать</a>
      </div>
    </div>
    <div className="pricing">
      <div className="top-p">
        <div>1000 КВ.М</div>
      </div>
      <div className="bot-p">
        <div>19130 ₽</div>
        <a className="order" href="mailto:dezobrabotka@?subject=Заявка на Обработку от плесени и грибка 1000 кв.м&body=Добрый день!%0A%0AУкажите, пожалуйста, следующую информацию.%0A%0A
Название компании: %0A&#xA;
Адрес фактического местонахождения:%0A&#xA;
Номер телефона: %0A&#xA;
Контактное лицо:%0A&#xA; ">Заказать</a>
      </div>
    </div>
    <div className="pricing">
      <div className="top-p">
        <div>2000 КВ.М</div>
      </div>
      <div className="bot-p">
        <div>24860 ₽</div>
        <a className="order" href="mailto:dezobrabotka@?subject=Заявка на Обработку от плесени и грибка 2000 кв.м&body=Добрый день!%0A%0AУкажите, пожалуйста, следующую информацию.%0A%0A
Название компании: %0A&#xA;
Адрес фактического местонахождения:%0A&#xA;
Номер телефона: %0A&#xA;
Контактное лицо:%0A&#xA; ">Заказать</a>
      </div>
    </div>
  </div>
  <p className="skidki">*Скидки до 50% при долгосрочных контрактах.</p>

  <h3 className="compl" id="complex">Комплексное решение </h3>
  <div className="blocks complex">
    <div>
      <p>Выгодное решение – комплекс!</p>
      <p>Включает в себя проведение трех санитарно-эпидемиологических услуг: Дезинфекцию, Дезинсекцию и Дератизацию</p>

    </div>
    <img className="mob" src={pict7} />
  </div>

  <h3 className="tar">Тарифы</h3>
  <div className="blocks price">
    <div className="pricing">
      <div className="top-p">
        <div>ДО 200 КВ.М</div>
      </div>
      <div className="bot-p">
        <div>16830 ₽</div>
        <a className="order" href="mailto:dezobrabotka@?subject=Заявка на Комплексное решение до 200 кв.м&body=Добрый день!%0A%0AУкажите, пожалуйста, следующую информацию.%0A%0A
Название компании: %0A&#xA;
Адрес фактического местонахождения:%0A&#xA;
Номер телефона: %0A&#xA;
Контактное лицо:%0A&#xA;">Заказать</a>
      </div>
    </div>
    <div className="pricing">
      <div className="top-p">
        <div>500 КВ.М</div>
      </div>
      <div className="bot-p">
        <div>26324,5 ₽</div>
        <a className="order" href="mailto:dezobrabotka@?subject=Заявка на Комплексное решение 500 кв.м&body=Добрый день!%0A%0AУкажите, пожалуйста, следующую информацию.%0A%0A
Название компании: %0A&#xA;
Адрес фактического местонахождения:%0A&#xA;
Номер телефона: %0A&#xA;
Контактное лицо:%0A&#xA; ">Заказать</a>
      </div>
    </div>
    <div className="pricing">
      <div className="top-p">
        <div>1000 КВ.М</div>
      </div>
      <div className="bot-p">
        <div>37170,5 ₽</div>
        <a className="order" href="mailto:dezobrabotka@?subject=Заявка на Комплексное решение 1000 кв.м&body=Добрый день!%0A%0AУкажите, пожалуйста, следующую информацию.%0A%0A
Название компании: %0A&#xA;
Адрес фактического местонахождения:%0A&#xA;
Номер телефона: %0A&#xA;
Контактное лицо:%0A&#xA; ">Заказать</a>
      </div>
    </div>
    <div className="pricing">
      <div className="top-p">
        <div>2000 КВ.М</div>
      </div>
      <div className="bot-p">
        <div>59891 ₽</div>
        <a className="order" href="mailto:dezobrabotka@?subject=Заявка на Комплексное решение 2000 кв.м&body=Добрый день!%0A%0AУкажите, пожалуйста, следующую информацию.%0A%0A
Название компании: %0A&#xA;
Адрес фактического местонахождения:%0A&#xA;
Номер телефона: %0A&#xA;
Контактное лицо:%0A&#xA; ">Заказать</a>
      </div>
    </div>
  </div>
  <p className="skidki">*Скидки до 50% при долгосрочных контрактах.</p>

  <p className="found-price"><b>Нашли цену ниже</b> – свяжитесь с нами, мы сделаем специальное предложение для Вас!</p>

  <p className="attention">Обращаем внимание, что приём заявок осуществляется в рабочие дни.</p>

 
  <div className="faq" id="faq">
  <h2>F.A.Q.*</h2>
  <FAQ />
  </div>
  
  <div className="note"><b>*Заказывая услугу, вы соглашаетесь с условиями пользовательского соглашения.</b></div>
  
  <a className="mail note" href="">Скачать пользовательское соглашение</a>

</div>
    </>
}

export default Dezobrabotka;