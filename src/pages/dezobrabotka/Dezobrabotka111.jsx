import uuid from 'react-uuid';
import $ from 'jquery';
window.jquery = window.$ = $;
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


function Dezobrabotka() {

function func() {   
    // Скроем блоки, которые не должны быть видимы
      $('.js-b-rollUp__LiHidden').hide();
     
      // Нажали на ссылку "подробнее"
      $('.js-b-rollUp__LiMore').on("click", function() {
        // Найдем родительский блок с пунктом списка
        let rollUp__Li = $(this).closest('.js-b-rollUp__Li');
        // Если у блока есть класс открытого (значит он открыт, закроем его)
        if (rollUp__Li.hasClass('b-rollUp__Li--open')) {
          // Скроем видимую часть
          rollUp__Li.find('.js-b-rollUp__LiHidden').slideUp(500);
          //Добавляем "Плюс"
          rollUp__Li.find('.b-rollUp__LiMore').addClass('rollUp__mark--plus');
          //Убираем "Минус"
          rollUp__Li.find('.b-rollUp__LiMore').removeClass('rollUp__mark--minus');
          // Уберем класс открытого блока
          rollUp__Li.removeClass('b-rollUp__Li--open');
        }
        // Если у блока нет класса открытого (значит он закрыт, откроем его)
        else {
          // Откроем невидимую часть
          rollUp__Li.find('.js-b-rollUp__LiHidden').slideDown(500);
          //Добавляем "Минус"
          rollUp__Li.find('.js-b-rollUp__LiMore').addClass('rollUp__mark--minus');
          //Убираем "Плюс"
          rollUp__Li.find('.js-b-rollUp__LiMore').removeClass('rollUp__mark--plus');
          // Дадим класс открытого блока
          rollUp__Li.addClass('b-rollUp__Li--open');
        }
      })
    };





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
  <div className="b-rollUp"><div className="b-rollUp__Li js-b-rollUp__Li">
      <div className="rollUp__mark b-rollUp__LiVisible"><span className="b-rollUp__LiMore js-b-rollUp__LiMore p-like rollUp__mark--plus">Как проходит процесс дератизации или дезинсекции помещений? </span></div>
      <div className="b-rollUp__LiHidden js-b-rollUp__LiHidden">
  <p>Мероприятия включают в себя комплекс мер по ликвидации или снижения численности грызунов, членистоногих и уменьшения их вредного воздействия на человека и окружающую среду. Имеет эпидемиологическое и санитарно-гигиеническое значение.</p>
  <p>Комплекс мероприятий включает в себя: санитарно-технические мероприятия (заделка путей проникновения вредителей на объект), физические и механические методы, которые являются вспомогательными (например, использование живоловок и приманочных контейнеров при отлове грызунов или липких ловушек от насекомых для учета их численности и мониторинга). </p>
  <p>На данный момент самым действенным и распространенным методом является химический. В работе используются различные родентициды (средства дератизации) и инсектициды (средства дезинсекции) для снижения численности вредителей до безопасного уровня или до полного их уничтожения. </p>
  <p>Процесс дератизации или дезинсекции включает в себя:</p>
  <ul>
  <li>обследование и оценку состояния объектов с целью определения масштаба обрабатываемой территории;</li>
  <li>выявление типа вредителей и зоны их распространения; </li>
  <li>уточнение технического и санитарного состояния объекта; </li>
  <li>выбор метода борьбы; </li>
  <li>выполнение инженерно-технических и санитарно-эпидемиологических  мероприятий; </li>
  <li>контроль во время проведения и после мероприятия с целью определения эффективности.</li>
  </ul> 
   
  </div>
  </div>
  </div>
  
  <div className="b-rollUp"><div className="b-rollUp__Li js-b-rollUp__Li">
      <div className="rollUp__mark b-rollUp__LiVisible"><span className="b-rollUp__LiMore js-b-rollUp__LiMore p-like rollUp__mark--plus">Что входит в подготовку помещения перед дератизацией?</span></div>
      <div className="b-rollUp__LiHidden js-b-rollUp__LiHidden">
  <p>Планирование и проведение истребительных дератизационных мероприятий осуществляется с учетом: </p>
  <ul>
  <li>санитарно-эпидемиологической обстановки – регистрации болезней, общих для человека и животных, эпизоотий; </li>
  <li>биологии и экологии грызунов – видового состава, динамики численности, интенсивности и периода размножения, пищевой специализации, устойчивости к родентицидам и других особенностей животных; </li>
  <li>типа природного очага – его ландшафтной и биоценотической структуры, других его особенностей; </li>
  <li>свойств родентицидных средств – вида действующего вещества, его концентрации, формы выпуска и способов применения, токсичности для людей и животных, влияния на окружающую среду; </li>
  <li>типа обрабатываемых объектов – категории, этажности, санитарно-технического состояния, расположения. </li>
  </ul>
  <p>Для каждого объекта разрабатывается свой план дератизации исходя из вышеперечисленных пунктов. </p>
  <p>При подготовке объекта к дератизации необходимо обеспечить доступ сотрудников, осуществляющих дератизацию во все помещения. </p>
  </div>
  </div>
  </div>
  
  <div className="b-rollUp"><div className="b-rollUp__Li js-b-rollUp__Li">
      <div className="rollUp__mark b-rollUp__LiVisible"><span className="b-rollUp__LiMore js-b-rollUp__LiMore p-like rollUp__mark--plus">Что входит в подготовку помещения перед дезинсекцией?</span></div>
      <div className="b-rollUp__LiHidden js-b-rollUp__LiHidden">
  <p>Для подготовки помещений для дезинсекции необходимо: </p>
  <ol>
  <li>В местах общественного питания расфасовать все продукты по пакетам и убрать в недоступные места (шкафы, холодильник). </li>
  <li>Убрать все бумажные носители, документы и любые другие восприимчивые к воде предметы и элементы в файлы, столы, тумбочки, шкафы. Обеспечить их сохранность и недоступность. </li>
  <li>Убрать предметы интимной и личной гигиены сотрудников, если такие имеются. </li>
  <li>Обеспечить доступ во все помещения. </li>
  <li>При обработке помещений окна должны быть закрыты, вентиляция отключена. </li>
  </ol>
  <p>Для достижения наиболее эффективного результата необходимо провести тщательную уборку всех помещений, где будет проводиться дезинсекция. Уделить особое внимание сбору пыли, в том числе и в труднодоступных местах. Данные действия необходимы для того, чтобы применяемые средства оказали необходимый эффект именно на обрабатываемой поверхности. </p>
  <p>Также для достижения наиболее эффективного результата необходимо (при возможности) отодвинуть мебель, оборудование от стен, чтоб предоставить возможность для обработки дезсредством труднодоступных мест. </p>
  <p>При проведении дезинсекции от тараканов не должно быть воды в доступе у насекомых. (Потребляя воду, таракан пытается очиститься от применяемых средств и выжить.) </p>
  </div>
  </div>
  </div>
  
  <div className="b-rollUp"><div className="b-rollUp__Li js-b-rollUp__Li">
      <div className="rollUp__mark b-rollUp__LiVisible"><span className="b-rollUp__LiMore js-b-rollUp__LiMore p-like rollUp__mark--plus">Что необходимо делать после дератизации?</span></div>
      <div className="b-rollUp__LiHidden js-b-rollUp__LiHidden">
  <p>Обеспечить сохранность средств дератизации, оборудования, контейнеров, систем мониторинга и отлова. Не переставлять и не убирать ничего самостоятельно. </p>
  <p>Контроль состояния и периодическую замену средств дератизации специалисты проводят самостоятельно. </p>
  </div>
  </div>
  </div>
  
  <div className="b-rollUp"><div className="b-rollUp__Li js-b-rollUp__Li">
      <div className="rollUp__mark b-rollUp__LiVisible"><span className="b-rollUp__LiMore js-b-rollUp__LiMore p-like rollUp__mark--plus">Что необходимо делать после дезинсекции?</span></div>
      <div className="b-rollUp__LiHidden js-b-rollUp__LiHidden">
  <p>Выдержать время 120 минут после обработки. При этом, не проветривать, сотрудников не запускать. </p>
  <p>После выдержки указанного времени проветрить помещение. </p>
  <p>Протереть контактные поверхности (столы, места приема пищи, дверные ручки). Все остальное не мыть.</p>
  <p>В течение трех суток не проводить клининг, не мыть, не убирать. Используемые средства имеют кишечно-контактное действие. Насекомым для гибели нужно «побегать» по обработанной поверхности. </p>
  <p>Вовремя сметать погибших насекомых. </p>
  </div>
  </div>
  </div>
  
  <div className="b-rollUp"><div className="b-rollUp__Li js-b-rollUp__Li">
      <div className="rollUp__mark b-rollUp__LiVisible"><span className="b-rollUp__LiMore js-b-rollUp__LiMore p-like rollUp__mark--plus">Какие документы выдаются после оказанной услуги?</span></div>
      <div className="b-rollUp__LiHidden js-b-rollUp__LiHidden">
  <ul>
  <li>Договор на обслуживание. </li>
  <li>Бухгалтерские (закрывающие) документы. </li>
  <li>Акт о проведении обработки. </li>
  <li>Сертификаты и декларации на используемые средства. </li>
  <li>По запросу (для дератизации и дезинсекции):<br />
  – Акт обследования помещения на заселенность.<br />
  – Акт контроля эффективности проведенных мероприятий.</li>
  </ul>
  </div>
  </div>
  </div>
  
  <div className="b-rollUp"><div className="b-rollUp__Li js-b-rollUp__Li">
      <div className="rollUp__mark b-rollUp__LiVisible"><span className="b-rollUp__LiMore js-b-rollUp__LiMore p-like rollUp__mark--plus">С какой частотой необходимо проводить дератизацию? </span></div>
      <div className="b-rollUp__LiHidden js-b-rollUp__LiHidden">
  <p>Объектами, имеющими особое эпидемиологическое значение на которых проведение дератизации является обязательным, являются: </p>
  <ul>
  <li>предприятия пищевой промышленности, общественного питания и организации торговли продовольственными товарами; </li>
  <li>жилые здания, предназначенные для постоянного проживания или временного пребывания людей, в том числе гостиницы, общежития; </li>
  <li>медицинские организации; </li>
  <li>санаторно-курортные организации, дома отдыха, пансионаты и другие; </li>
  <li>образовательные организации; </li>
  <li>организации, осуществляющие горячее водоснабжение, организации осуществляющие холодное водоснабжение и (или) водоотведение; </li>
  <li>объекты коммунально-бытового назначения; </li>
  <li>объекты и территории организаций, занимающихся утилизацией бытовых отходов, кладбища, очистные сооружения; </li>
  <li>объекты и территории организаций, занимающихся внешним благоустройством: санитарной очисткой, уборкой и озеленением населенных пунктов; </li>
  <li>рекреационные объекты и территории (садоводческие, огороднические и дачные объединения граждан, пляжи, места массового отдыха, туризма, рыбалки, охоты и другие); </li>
  <li>таможенные терминалы; </li>
  <li>пункты пропуска через государственную границу Российской Федерации; </li>
  <li>железнодорожные вокзалы, морские (речные, озерные) вокзалы и порты, автовокзалы, аэропорты. </li>
  </ul>
  <p>Показанием к организации и проведению истребительных дератизационных мероприятий на объектах и прилегающих к ним территориях служит обнаружение грызунов либо наличие свежих следов их жизнедеятельности (жилые норы, погрызы и порча продуктов, свежий помет). </p>
  </div>
  </div>
  </div>
  
  <div className="b-rollUp"><div className="b-rollUp__Li js-b-rollUp__Li">
      <div className="rollUp__mark b-rollUp__LiVisible"><span className="b-rollUp__LiMore js-b-rollUp__LiMore p-like rollUp__mark--plus">С какой частотой необходимо проводить дезинсекции? </span></div>
      <div className="b-rollUp__LiHidden js-b-rollUp__LiHidden">
  <p>Кратность плановых обследований на заселенность членистоногими объектов должна составлять не менее 2 раз в месяц для таких объектов, как (СанПиН 3.5.2.3472-17): </p>
  <ul>
  <li>производственные, жилые и общественные здания, помещения; </li>
  <li>сооружения, транспорт; </li>
  <li>территории городских и сельских поселений, прилегающих к ним участках открытой природы, включая водоемы, места естественного обитания членистоногих, а также в очагах инфекционных болезней, где имеются условия для их возникновения, поддержания или распространения. </li>
  </ul>
  <p>Для других объектов – 1 раз в месяц (в местах общего пользования многоквартирных домов, общежитий), в очагах инфекционных и паразитарных заболеваний, а также анофелогенных водоемов - 1 раз в неделю, открытых территорий – 1 раз в месяц. </p>
  </div>
  </div>
  </div>
  
  <div className="b-rollUp"><div className="b-rollUp__Li js-b-rollUp__Li">
      <div className="rollUp__mark b-rollUp__LiVisible"><span className="b-rollUp__LiMore js-b-rollUp__LiMore p-like rollUp__mark--plus">Останется ли запах после дератизации и дезинсекции? На какое время?</span></div>
      <div className="b-rollUp__LiHidden js-b-rollUp__LiHidden">
  <p>Средства дератизации не имеют запаха. Средства дезинсекции чаще всего не имеют запаха или имеют слабовыраженный запах, который выветривается через 6–8 часов. </p>
  </div>
  </div>
  </div>
  
  <div className="b-rollUp"><div className="b-rollUp__Li js-b-rollUp__Li">
      <div className="rollUp__mark b-rollUp__LiVisible"><span className="b-rollUp__LiMore js-b-rollUp__LiMore p-like rollUp__mark--plus">Какие помещения Вы можете обрабатывать? </span></div>
      <div className="b-rollUp__LiHidden js-b-rollUp__LiHidden">
  <p>Все типы помещений и прилегающих территорий. </p>
  </div>
  </div>
  </div>
  
  <div className="b-rollUp"><div className="b-rollUp__Li js-b-rollUp__Li">
      <div className="rollUp__mark b-rollUp__LiVisible"><span className="b-rollUp__LiMore js-b-rollUp__LiMore p-like rollUp__mark--plus">Может ли обработка повредить мягкую мебель?</span></div>
      <div className="b-rollUp__LiHidden js-b-rollUp__LiHidden">
  <p>Средства дератизации и дезинсекции – нет, а вредители (крысы, клопы, термиты) – да. </p>
  </div>
  </div>
  </div>
    
  <div className="b-rollUp"><div className="b-rollUp__Li js-b-rollUp__Li">
      <div className="rollUp__mark b-rollUp__LiVisible"><span className="b-rollUp__LiMore js-b-rollUp__LiMore p-like rollUp__mark--plus">Оказывает ли влияние обработка на оргтехнику?</span></div>
      <div className="b-rollUp__LiHidden js-b-rollUp__LiHidden">
  <p>Применяемые способы не оказывают влияние на оргтехнику и другие приборы. Для обеспечения максимальной степени безопасности желательно отключить приборы на время обработки от сети. Также необходимо выключить компьютеры и прочую технику. </p>
  </div>
  </div>
  </div>
  
  </div>
  
  <div className="note"><b>*Заказывая услугу, вы соглашаетесь с условиями пользовательского соглашения.</b></div>
  
  <a className="mail note" href="">Скачать пользовательское соглашение</a>

</div>
    </>
}

export default Dezobrabotka;