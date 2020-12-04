import create from './utils/create';
// import { dictionary } from './data/dictionary';
// import { groups } from './data/groups';

// import * as storage from './utils/storage';

export default class Card {
  constructor(elem) {
    this.type = elem.type || null;
    this.group = elem.group || null;
    this.word = elem.word;
    this.translate = elem.translate || null;
    this.image = elem.img;
    this.sound = new Audio(elem.sound);
  }

  init() {
    if (this.type !== 'main') {
      this.createElement();
    }
  }

  createElement() {
    this.element = create('div', 'card', null);
    // FrontSide
    this.elementImgFront = create('div', 'card-img', create('img', null, null, null, ['src', `${this.image}`]));
    this.cardContentFront = create('div', 'card-content', null);
    this.cardWordFront = create('div', 'card-word', `${this.word}`, this.cardContentFront);
    // BackSide
    this.elementImgBack = create('div', 'card-img', create('img', null, null, null, ['src', `${this.image}`]));
    this.cardContentBack = create('div', 'card-content', null);
    this.cardWordBack = create('div', 'card-word', `${this.translate}`, this.cardContentBack);

    if (!this.type) {
      this.cardButtonFront = create('button', 'card-button', '<span class="material-icons">cached</span>', this.cardContentFront);

      this.cardFaceFront = create('div', 'card-face card-face__front', [this.elementImgFront, this.cardContentFront]);
      this.cardFaceBack = create('div', 'card-face card-face__back', [this.elementImgBack, this.cardContentBack]);

      this.elementInner = create('div', 'card-inner', [this.cardFaceFront, this.cardFaceBack], this.element);

      this.cardFaceFront.addEventListener('click', () => {
        this.sound.play();
      });

      this.cardButtonFront.addEventListener('click', (e) => {
        e.stopPropagation();
        this.elementInner.classList.add('is-flipped');
        this.element.addEventListener('mouseleave', () => {
          this.elementInner.classList.remove('is-flipped');
        });
      });
    } else {
      this.cardFaceFront = create('div', 'card-face card-face__front', [this.elementImgFront, this.cardContentFront]);
      this.elementInner = create('div', 'card-inner', this.cardFaceFront, this.element);
    }

    return this;
  }

  // playFront() {}
  // playBack() {}
  // trainFront() {}
  // trainBack() {}
}
