import create from './utils/create';
// import * as storage from './utils/storage';
import dictionary from './data/dictionary';
import groups from './data/groups';

import header from './dom-components/header';
import burger from './dom-components/burger';
import field from './dom-components/field';
import footer from './dom-components/footer';
import win from './dom-components/win';
import lose from './dom-components/lose';

import Card from './Card';

import clearField from './utils/clearField';
import shuffle from './utils/shuffle';

export default class Main {
  constructor() {
    /* Create DOM element */
    [this.header, this.burgerButton, this.modeSwitcher] = Object.values(header());
    [this.burger, this.itemBurger, this.burgerScreen] = Object.values(burger());
    [this.footer, this.footerButton, this.footerRating] = Object.values(footer());
    [this.win, this.winText] = Object.values(win());
    [this.lose, this.loseText] = Object.values(lose());
    this.field = field;
    /* */
    this.playMode = false;
    this.menu = false;

    /* Play mode */
    this.correctCardCounter = 0;
    this.wrongCardCounter = 0;
  }

  init() {
    document.body.prepend(this.header, this.field);
    this.header.prepend(this.burger);
    this.burgerButton.addEventListener('click', () => {
      document.body.classList.toggle('lock-scroll');
      this.burger.classList.toggle('burger-wrapper--active');
      this.burgerButton.classList.toggle('button-burger--active');
      this.burgerScreen.classList.toggle('burger-inner--active');
    });

    this.itemBurger.forEach((elem) => {
      elem.addEventListener('click', (e) => {
        const burgerItemName = e.target.innerHTML;
        if (burgerItemName === 'Main') {
          clearField();
          setTimeout(() => {
            this.generateMain();
          }, 500);
          this.footer.remove();
        } else {
          this.generateCurrent(burgerItemName);
        }
        this.burgerItemsActive(burgerItemName);
        document.body.classList.toggle('lock-scroll');
        this.burger.classList.toggle('burger-wrapper--active');
        this.burgerButton.classList.toggle('button-burger--active');
        this.burgerScreen.classList.toggle('burger-inner--active');
      });
    });

    this.burger.addEventListener('click', () => {
      document.body.classList.toggle('lock-scroll');
      this.burger.classList.toggle('burger-wrapper--active');
      this.burgerButton.classList.toggle('button-burger--active');
      this.burgerScreen.classList.toggle('burger-inner--active');
    });

    this.burgerScreen.addEventListener('click', (e) => e.stopPropagation());

    this.modeSwitcher.onclick = () => {
      this.modeSwitcher.classList.toggle('mode-switcher--move');
      if (!this.playMode) {
        this.playMode = true;
        this.gameMode();
        console.log('включил');
      } else {
        this.playMode = false;
        this.gameModeOff();
        console.log('отключил');
      }
    };

    return this;
  }

  generateMain() {
    this.menu = true;
    this.burgerItemsActive('Main');
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

  generateCurrent(itemWord) {
    this.menu = false;
    clearField();

    const nameCategory = typeof itemWord === 'string' ? itemWord : itemWord.word;
    let currentArr = [];

    currentArr = dictionary.filter((elem) => elem.group === nameCategory);

    this.burgerItemsActive(nameCategory);

    this.currentCards = [];

    currentArr.forEach((elem) => {
      const item = new Card(elem).createElement();
      this.currentCards.push(item);

      setTimeout(() => {
        this.field.prepend(item.element);
      }, 500);
    });

    if (this.playMode) {
      this.gameModeOff();
      this.gameMode();
    }
  }

  gameMode() {
    this.playMode = true;
    if (!this.menu) {
      this.field.after(this.footer);

      this.currentCards.forEach((elem) => {
        elem.playMode('play');
        elem.cardContentFront.classList.add('card-content--disable');
        elem.cardFaceFront.classList.add('card-face--game-mode');
      });

      this.shuffleCards = shuffle(this.currentCards);

      this.start = () => {
        this.startGame(this.shuffleCards);
      };
      this.footerButton.addEventListener('click', this.start);
    }
  }

  startGame(shuffleCards) {
    console.log('check');
    this.footerButton.removeEventListener('click', this.start);
    let currentCard = shuffleCards[this.correctCardCounter];
    this.refreshCurrentCard = () => {
      currentCard = shuffleCards[this.correctCardCounter];
    };

    this.changeFooterButton('start');

    this.playWord();

    this.handlerEvent = (e) => {
      if (e.target.dataset.word === currentCard.word) {
        currentCard.cardFaceFront.classList.add('card-face--game-mode-right');
        this.playAudio('correct');
        this.playWord();
        this.footerRating.prepend(create('div', 'star', '<span class="material-icons">star</span>'));
        e.target.removeEventListener('click', this.handlerEvent);
        this.correctCardCounter += 1;
        this.refreshCurrentCard();
      } else {
        this.playAudio('wrong');
        this.wrongCardCounter += 1;
        this.footerRating.prepend(create('div', 'star', '<span class="material-icons">star_border</span>'));
      }

      if (this.correctCardCounter === 8) {
        if (this.wrongCardCounter) {
          this.playAudio('lose');
          document.body.prepend(this.lose);
          this.loseText.innerHTML = `YOU LOSE </br> YOU WRONG ANSWERS: ${this.wrongCardCounter}`;
          setTimeout(() => {
            this.gameModeOff();
            this.gameMode();
            this.lose.remove();
          }, 5000);
        } else {
          this.playAudio('win');
          document.body.prepend(this.win);
          setTimeout(() => {
            this.gameModeOff();
            this.gameMode();
            this.win.remove();
          }, 5000);
        }
      }
    };

    shuffleCards.forEach((card) => card.elementImgFront.addEventListener('click', this.handlerEvent));
  }

  gameModeOff() {
    if (!this.menu) {
      this.changeFooterButton('stop');
      this.footer.remove();
      this.footerRating.innerHTML = '';
      this.currentCards.forEach((elem) => {
        elem.playMode('train');
        elem.cardContentFront.classList.remove('card-content--disable');
        elem.cardFaceFront.classList.remove('card-face--game-mode-right');
        elem.cardFaceFront.classList.remove('card-face--game-mode');
        elem.elementImgFront.removeEventListener('click', this.handlerEvent);
      });
      this.correctCardCounter = 0;
      this.wrongCardCounter = 0;
    }
  }

  playAudio(sound) {
    this.audio = new Audio(`./assets/audio/${sound}.mp3`);
    this.audio.play();
  }

  playWord() {
    setTimeout(() => this.shuffleCards[this.correctCardCounter].sound.play(), 1000);
  }

  burgerItemsActive(word) {
    this.itemBurger.forEach((item) => {
      item.classList.remove('burger-list__item--active');
      if (item.innerHTML === word) {
        item.classList.toggle('burger-list__item--active');
      }
    });
  }

  changeFooterButton(active) {
    this.repeatWord = () => {
      this.playWord();
    };

    if (active === 'start') {
      this.footerButton.addEventListener('click', this.repeatWord);
      this.footerButton.classList.add('footer-button--repeater');
      this.footerButton.innerHTML = '<span class="material-icons">replay</span>';
    } else {
      this.footerButton.removeEventListener('click', this.repeatWord);
      this.footerButton.removeEventListener('click', this.start);
      this.footerButton.classList.remove('footer-button--repeater');
      this.footerButton.innerHTML = 'START GAME';
    }
  }
}
