/* eslint-disable max-len */
/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
import create from './utils/create';
import * as storage from './utils/storage';
import createStatisticsElement from './utils/createStatisticsElement';

import dictionary from './data/dictionary';
import groups from './data/groups';

import header from './dom-components/header';
import burger from './dom-components/burger';
import field from './dom-components/field';
import footer from './dom-components/footer';
import win from './dom-components/win';
import lose from './dom-components/lose';
import description from './dom-components/description';
import statistics from './dom-components/statistics';

import Card from './Card';

import clearField from './utils/clearField';
import shuffle from './utils/shuffle';

export default class Main {
  constructor() {
    /* Create DOM element */
    ({ headerElement: this.header, burgerButton: this.burgerButton, modeSwitcher: this.modeSwitcher } = header());
    ({ burgerElement: this.burger, burgerListArr: this.itemBurger, burgerScreen: this.burgerScreen } = burger());
    ({ footerElement: this.footer, footerButton: this.footerButton, footerRating: this.footerRating } = footer());
    ({ element: this.win, elementText: this.winText } = win());
    ({ element: this.lose, elementText: this.loseText } = lose());
    ({
      statisticsElement: this.statistics,
      statisticsBody: this.statisticsBody,
      repeatButton: this.statisticsRepeatButton,
      resetButton: this.statisticsResetButton,
      statisticsTitle: this.statisticsTitle,
    } = statistics());
    this.field = field;
    this.description = description();
    /* */
    this.playMode = false;
    this.menu = false;
    this.sortFlag = false;

    /* Play mode */
    this.correctCardCounter = 0;
    this.wrongCardCounter = 0;

    this.dictionaryObj = [...dictionary];
  }

  init() {
    document.body.prepend(this.header, this.field, this.description);
    this.header.prepend(this.burger);
    this.burgerButton.addEventListener('click', () => {
      this.changeBurgerState();
    });

    this.itemBurger.forEach((elem) => {
      const burgerItemName = elem.innerHTML;
      elem.addEventListener('click', () => {
        if (burgerItemName === 'Main') {
          clearField();
          setTimeout(() => {
            this.generateMain();
          }, 500);
          this.footer.remove();
        } else if (burgerItemName === 'Statistics') {
          this.showStatistics();
        } else {
          this.generateCurrent(burgerItemName);
        }
        this.burgerItemsActive(burgerItemName);
        this.changeBurgerState();
      });
    });

    this.burger.addEventListener('click', () => {
      this.changeBurgerState();
    });

    this.burgerScreen.addEventListener('click', (e) => e.stopPropagation());

    this.modeSwitcher.onclick = () => {
      this.modeSwitcher.classList.toggle('mode-switcher--move');
      if (!this.playMode) {
        this.gameMode();
      } else {
        this.playMode = false;
        this.gameModeOff();
      }
    };

    this.statisticsObj = this.dictionaryObj.map((elem) => ({
      ...elem, attempt: 0, right: 0, wrong: 0, percent: 0,
    }));

    if (!storage.get('Statistics')) {
      storage.set('Statistics', this.statisticsObj);
    }

    this.statisticsResetButton.addEventListener('click', () => {
      storage.set('Statistics', this.statisticsObj);
      this.showStatistics();
    });

    this.statisticsTitle.addEventListener('click', (e) => {
      this.statisticsSort(e.target.innerHTML);
    });

    this.statisticsRepeatButton.addEventListener('click', () => {
      this.generateDifficult();
    });

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
        this.setStorageObj(currentCard.word, 'Right');
        this.footerRating.prepend(create('div', 'star', '<span class="material-icons">star</span>'));
        e.target.removeEventListener('click', this.handlerEvent);
        this.correctCardCounter += 1;
        this.refreshCurrentCard();
      } else {
        this.playAudio('wrong');
        this.setStorageObj(currentCard.word, 'Wrong');
        this.wrongCardCounter += 1;
        this.footerRating.prepend(create('div', 'star', '<span class="material-icons">star_border</span>'));
      }

      if (this.correctCardCounter === 8) {
        if (this.wrongCardCounter) {
          this.playAudio('lose');
          document.body.prepend(this.lose);
          this.loseText.innerHTML = `YOU LOSE </br> YOU WRONG ANSWERS: ${this.wrongCardCounter}`;
          setTimeout(() => {
            this.clearGameResult(this.lose);
          }, 5000);
        } else {
          this.playAudio('win');
          document.body.prepend(this.win);
          setTimeout(() => {
            this.clearGameResult(this.win);
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

  showStatistics() {
    clearField();
    this.footer.remove();
    setTimeout(() => {
      this.field.prepend(this.statistics);
    }, 500);
    this.statisticsBody.innerHTML = '';
    const currentStorage = storage.get('Statistics');
    createStatisticsElement(currentStorage, this.statisticsBody);
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

  changeBurgerState() {
    document.body.classList.toggle('lock-scroll');
    this.burger.classList.toggle('burger-wrapper--active');
    this.burgerButton.classList.toggle('button-burger--active');
    this.burgerScreen.classList.toggle('burger-inner--active');
  }

  clearGameResult(type) {
    this.gameModeOff();
    this.gameMode();
    type.remove();
    clearField();
    this.footer.remove();
    setTimeout(() => {
      this.generateMain();
    }, 500);
  }

  // eslint-disable-next-line class-methods-use-this
  setStorageObj(word, action) {
    const currentStorage = storage.get('Statistics');
    currentStorage.forEach((elem) => {
      if (elem.word === word) {
        switch (action) {
          case 'Attempt':
            elem.attempt += 1;
            break;
          case 'Right':
            elem.right += 1;
            elem.percent = Math.floor(((elem.right * 100) / elem.wrong) * 100) / 100;
            break;
          case 'Wrong':
            elem.wrong += 1;
            elem.percent = Math.floor(((elem.right * 100) / elem.wrong) * 100) / 100;
            break;
          default:
            console.log('bad action');
        }
        if (elem.wrong === 0 && elem.right > 0) elem.percent = 100;
      }
    });

    storage.set('Statistics', currentStorage);
  }

  statisticsSort(title) {
    if (title === '%') title = 'percent';

    const currentStorage = storage.get('Statistics');

    if (!this.sortFlag) {
      this.sortFlag = true;
      currentStorage.sort((a, b) => (a[title.toLowerCase()] > b[title.toLowerCase()] ? 1 : -1));
      this.statisticsBody.innerHTML = '';

      createStatisticsElement(currentStorage, this.statisticsBody);
    } else {
      this.sortFlag = false;
      currentStorage.sort((a, b) => (a[title.toLowerCase()] < b[title.toLowerCase()] ? 1 : -1));
      this.statisticsBody.innerHTML = '';
      createStatisticsElement(currentStorage, this.statisticsBody);
    }
  }

  generateDifficult() {
    this.menu = false;
    clearField();

    const currentStorage = storage.get('Statistics');

    let currentArr = [];
    currentArr = currentStorage.filter((elem) => (elem.wrong !== 0));
    currentArr.sort((a, b) => (a.wrong < b.wrong ? 1 : -1));

    this.currentCards = [];

    currentArr.forEach((elem, i) => {
      if (i > 7) return;
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
}
