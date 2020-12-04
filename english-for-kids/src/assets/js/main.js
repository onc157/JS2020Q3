// import create from './utils/create';
// import * as storage from './utils/storage';
import dictionary from './data/dictionary';
import groups from './data/groups';
import header from './dom-components/header';
import burger from './dom-components/burger';
import field from './dom-components/field';
import Card from './Card';
import clearField from './utils/clearField';

export default class Main {
  constructor() {
    /* Create DOM element */
    this.header = header;
    this.burger = burger;
    this.field = field;
    [this.burgerButton] = header.children;

    [...this.itemBurger] = burger.children[1].children[0].children;
    console.log(this.itemBurger);
    /* */
    this.mode = 'train';
  }

  init() {
    document.body.prepend(this.header, this.field);
    this.header.prepend(this.burger);

    this.burgerButton.addEventListener('click', () => {
      burger.classList.toggle('burger-wrapper--active');
      this.burgerButton.classList.toggle('button-burger--active');
    });

    this.itemBurger.forEach((elem) => {
      elem.addEventListener('click', (e) => {
        let strangeObj = {};
        console.log(e);
        const words = e.target.innerHTML.toLowerCase();
        console.log(words);
        if (words === 'main') {
          clearField();
          setTimeout(() => {
            this.generateMain();
          }, 600);
        } else {
          const curArr = dictionary.filter((element) => element.group === words);
          console.log('currentsdfsdfArr', curArr);
          strangeObj = {
            word: words,
          };
        }
        this.generateCurrent(strangeObj);
      });
    });
    return this;
  }

  generateMain() {
    const mainCards = [];

    groups.forEach((elem) => {
      // console.log('elem', elem);

      const item = new Card(elem).createElement();
      mainCards.push(item);

      item.element.addEventListener('click', () => {
        this.generateCurrent(item);
        console.log('важно', item);
      });

      this.field.prepend(item.element);
    });

    console.log('mainCards:', mainCards);
  }

  generateCurrent(itemObj) {
    clearField();
    console.log('Current Item:', itemObj);

    const currentArr = dictionary.filter((elem) => elem.group === itemObj.word);
    console.log('currentArr', currentArr);

    const currentCards = [];

    currentArr.forEach((elem) => {
      const item = new Card(elem).createElement();
      currentCards.push(item);

      setTimeout(() => {
        this.field.prepend(item.element);
      }, 500);
    });
  }

  // play() {
  //   // запрашиваем карточки из new Card().play()
  //   // на карточки вешаем слушатели клика (скорее всего слушатели надо вешать в class Card)
  //   // при клике:
  // }
  // train() {
  //   // запрашиваем карточки из new Card().train()
  //   // на карточки вешаем слушатели клика (скорее всего слушатели надо вешать в class Card)
  //   // при клике: произношение на английском
  //   // при клике на кнопку оборота: карточка переворачивается, там указан перевод
  //   // при mouseleave переворачивается обратно
  // }

  // modeSelect() {
  //   // при клике на кнопку train / play инициализируем по новой
  // }
}
