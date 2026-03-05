import box390Buge from "../img/box390-beuge.png";
import papka11 from "../img/11-papka.png";
import papka13 from "../img/13-papka.png";
import papka18 from "../img/18-papka.png";
import papka15 from "../img/15-papka.png";
import box480Open from "../img/box480-open.png";
import papka08 from "../img/08-papka.png";
import papka09 from "../img/09-papka.png";
import papka10 from "../img/10-papka.png";
import box520 from "../img/box520.png";
import box506 from "../img/box506.png";
import papka12 from "../img/12-papka.png";
import papka07 from "../img/07-papka.png";
import papka06 from "../img/06-papka.png";
import papka17 from "../img/17-papka.png";
import papka16 from "../img/16-papka.png";
import box400 from "../img/box400.png";
import papka01 from "../img/01-papka.png";
import papka02 from "../img/02-papka.png";
import papka03 from "../img/03-papka.png";
import papka05 from "../img/05-papka.png";
import box390 from "../img/box390.png";
import papka04 from "../img/04-papka.png";
import box480 from "../img/box480.png";
  

const productsData = [
  {
    category: 'Папки-регистраторы',
    items: [
      { id: 1, name: '390', img: box390Buge, desc: 'Для хранения папок архивных и скоросшивателей. Вмещает:',
          folders: [
                    {cont: 3, size: 125, img: papka11},
                    {cont: 4, size: 90, img: papka13},
                    {cont: 5, size: 75, img: papka18},
                    {cont: 7, size: 50, img: papka15},
                  ]
      },
      { id: 2, name: '480', img: box480Open, desc: 'Для хранения папок архивных и скоросшивателей. Вмещает:',
          folders: [
                    {cont: 5, size: 90, img: papka08},
                    {cont: 6, size: 80, img: papka09},
                    {cont: 6, size: 75, img: papka10},
                    {cont: 9, size: 50, img: papka13},
                  ]
      },          
      { id: 3, name: '506', img: box506, desc: 'Для хранения папок архивных и скоросшивателей. Вмещает:',
          folders: [
                    {cont: 4, size: 125, img: papka11},
                    {cont: 6, size: 80, img: papka09},
                    {cont: 7, size: 70, img: papka12},
                    {cont: 10, size: 50, img: papka13},
                  ]
      },
      { id: 4, name: '520', img: box520, desc: 'Для хранения папок архивных и скоросшивателей. Вмещает:',
          folders: [
                    {cont: 4, size: 125, img: papka11},
                    {cont: 7, size: 70, img: papka12},
                    {cont: 10, size: 50, img: papka13},
                    {cont: 6, size: 80, img: papka09},
                  ]
      },
    ]
  },
  {
    category: 'Архивные папки и скоросшиватели',
    items: [
      { id: 5, name: '390', img: box390, desc: 'Для хранения папок архивных и скоросшивателей. Вмещает:',
          folders: [
                    {cont: 3, size: 120, img: papka11},
                    {cont: 5, size: 75, img: papka09},
                    {cont: 5, size: 70, img: papka12},
                    {cont: 7, size: 50, img: papka13},
                    {cont: 11, size: 35, img: papka13},
                  ]
      },
      { id: 6, name: '400', img: box400, desc: 'Для хранения папок архивных и скоросшивателей. Вмещает:',
          folders: [
                    {cont: 3, size: 120, img: papka01},
                    {cont: 4, size: 100, img: papka02},
                    {cont: 5, size: 80, img: papka03},
                    {cont: 8, size: 50, img: papka05},
                    {cont: 13, size: 30, img: papka04},
                  ]
      },
      { id: 7, name: '480', img: box480, desc: 'Для хранения папок архивных и скоросшивателей. Вмещает:',
          folders: [
                    {cont: 4, size: 120, img: papka06},
                    {cont: 6, size: 80, img: papka03},
                    {cont: 8, size: 50, img: papka05},
                    {cont: 13, size: 35, img: papka07},
                    {cont: 16, size: 30, img: papka04},
                  ]
      },
    ]
  }
];

export default productsData; 