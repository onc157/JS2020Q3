// import create from './utils/create';
// import * as storage from './utils/storage';
import dictionary from './data/dictionary';
import groups from './data/groups';
import header from './dom-components/header';
import burger from './dom-components/burger';
import field from './dom-components/field';
import footer from './dom-components/footer';
import Card from './Card';
import clearField from './utils/clearField';

export default class Main {
  constructor() {
    /* Create DOM element */
    [this.header, this.burgerButton, this.modeSwitcher] = Object.values(header());
    [this.burger, this.itemBurger] = Object.values(burger());
    [this.footer, this.footerButton] = Object.values(footer());
    this.field = field;
    /* */

    this.playMode = false;
    this.menu = false;
  }

  init() {
    document.body.prepend(this.header, this.field);
    this.header.prepend(this.burger);

    this.burgerButton.addEventListener('click', () => {
      this.burger.classList.toggle('burger-wrapper--active');
      this.burgerButton.classList.toggle('button-burger--active');
    });

    this.itemBurger.forEach((elem) => {
      elem.addEventListener('click', (e) => {
        const burgerItemName = e.target.innerHTML;
        if (burgerItemName === 'Main') {
          clearField();
          setTimeout(() => {
            this.generateMain();
          }, 500);
        } else {
          this.generateCurrent(burgerItemName);
        }

        this.burger.classList.toggle('burger-wrapper--active');
        this.burgerButton.classList.toggle('button-burger--active');
      });
    });

    this.modeSwitcher.onclick = () => {
      this.modeSwitcher.classList.toggle('mode-switcher--move');
      if (!this.playMode) {
        this.playMode = true;
        this.gameMode();
      } else {
        this.playMode = false;
        this.gameModeOff();
      }
    };

    return this;
  }

  generateMain() {
    this.menu = true;
    const mainCards = [];

    groups.forEach((elem) => {
      const item = new Card(elem).createElement();
      mainCards.push(item);

      item.element.addEventListener('click', () => {
        this.generateCurrent(item);
      });

      this.field.prepend(item.element);
    });
  }

  generateCurrent(itemObj) {
    this.menu = false;
    console.log('this.menu', this.menu, 'this.playMode', this.playMode);
    clearField();

    let currentArr = [];

    if (typeof itemObj === 'string') {
      currentArr = dictionary.filter((elem) => elem.group === itemObj);
    } else {
      currentArr = dictionary.filter((elem) => elem.group === itemObj.word);
    }

    this.currentCards = [];

    currentArr.forEach((elem) => {
      const item = new Card(elem).createElement();
      this.currentCards.push(item);

      setTimeout(() => {
        this.field.prepend(item.element);
      }, 500);
    });

    if (this.playMode) {
      this.gameMode();
    }
  }

  gameMode() {
    if (!this.menu) {
      this.field.after(this.footer);
      this.currentCards.forEach((elem) => {
        elem.playMode('play');
        elem.cardContentFront.classList.add('card-content--disable');
        elem.cardFaceFront.classList.add('card-face--game-mode');
      });
      console.log(this.currentCards);
    }
  }

  gameModeOff() {
    if (!this.menu) {
      this.footer.remove();
      this.currentCards.forEach((elem) => {
        elem.playMode('train');
        elem.cardContentFront.classList.remove('card-content--disable');
        elem.cardFaceFront.classList.remove('card-face--game-mode');
      });
    }
  }
}
