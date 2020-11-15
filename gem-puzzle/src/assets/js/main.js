/* eslint-disable no-param-reassign */
/* eslint-disable object-shorthand */
/* eslint-disable arrow-body-style */
import create from './utils/create';
import * as storage from './utils/storage';
import audioClick from '../audio/click-cell.wav';
import audioButton from '../audio/click-button.wav';
import bgGenerate from './utils/bgGenerate';

// Init DOM element
const main = create('div', 'game-wrapper',
  [create('div', 'title', 'Gem Puzzles!')]);
const counts = create('div', 'counts-wrapper', [
  create('div', 'count count-time', 'Moves: 0'),
  create('div', 'count count-move', 'Count time!'),
]);
const buttons = create('div', 'buttons-wrapper', [
  create('button', 'button new-game', 'New Game'),
  create('button', 'button save-game', 'Save Game'),
  create('button', 'button load-game', 'Load Game'),
  create('button', 'button sound', '<span class="material-icons">volume_up</span>'),
  create('button', 'button score', 'Score'),
  create('button', 'button field-size', 'Field Size'),
]);
const soundWrapper = create('div', 'sound-wrapper', [
  create('audio', null, null, null, ['src', audioClick]),
  create('audio', null, null, null, ['src', audioButton]),
]);

export default class Game {
  constructor(size) {
    this.size = size;
    this.field = create('div', 'field', null, main);
    this.menu = create('div', 'menu', [
      create('button', 'button new-game', 'New Game'),
      create('button', 'button save-game', 'Save Game'),
      create('button', 'button load-game', 'Load Game'),
      create('button', 'button sound', '<span class="material-icons">volume_up</span>'),
      create('button', 'button score', 'Score'),
      create('button', 'button field-size', 'Field Size'),
    ], this.field);
    this.score = create('div', 'score-wrapper', 'score');
    this.buttons = buttons;
    this.sizeCell = 100 / this.size;
    this.menuButton = create('div', 'count button-menu', '<span class="material-icons">build</span>', counts);
    this.soundOn = true;
    this.countMoves = 0;
    this.countTime = 0;
    this.backgroundImage = bgGenerate(1, 20);
  }

  // Add element on HTML markup
  init() {
    document.body.prepend(main, counts, buttons, soundWrapper, this.score);
    this.buttons.addEventListener('click', this.handlerEvent);
    this.menuButton.addEventListener('click', this.handlerEvent);
    this.menu.addEventListener('click', this.handlerEvent);
    return this;
  }

  generateField() {
    this.cells = [];
    this.backgroundImage = bgGenerate(1, 20);

    // Generate random solvable array
    const generateRandomArray = () => {
      const randomNumbers = [...Array(this.size ** 2 - 1).keys()].map((elem) => elem + 1)
        .sort(() => Math.random() - 0.5);
      randomNumbers.push(0);

      let count = 0;
      for (let i = 0; i < this.size ** 2; i += 1) {
        if (randomNumbers[i]) {
          for (let j = 0; j < i; j += 1) {
            if (randomNumbers[j] > randomNumbers[i]) {
              count += 1;
            }
          }
        }
      }

      for (let i = 0; i < this.size ** 2; i += 1) {
        if (randomNumbers[i] === 0) {
          count += Math.floor(1 + (i / Math.sqrt(this.size ** 2)));
        }
      }

      if (((this.size ** 2) % 2 === 0) && (count % 2 === 0)) {
        return randomNumbers;
      }
      if (((this.size ** 2) % 2 !== 0) && (count % 2 !== 0)) {
        return randomNumbers;
      }
      return generateRandomArray();
    };

    const randomNumbers = generateRandomArray();

    // Generate puzzle cells
    for (let i = 0; i < this.size ** 2 - 1; i += 1) {
      const left = i % this.size;
      const top = (i - left) / this.size;

      this.cell = create('div', 'cell-outer',
        create('div', 'cell-inner', `${randomNumbers[i]}`, null), this.field,
        ['id', `${randomNumbers[i]}`],
        ['style', `top: ${top * this.sizeCell}%; left: ${left * this.sizeCell}%;`]);

      // Set cells cizes
      this.cell.style.width = `${this.sizeCell}%`;
      this.cell.style.height = `${this.sizeCell}%`;

      // Push empty cell
      this.cells.push({
        number: randomNumbers[i],
        left: left,
        top: top,
        item: this.cell,
        active: false,
      });

      this.cell.firstChild.addEventListener('click', () => this.cellMove(i));

      // Add background img on cells
      this.cell.firstChild.style.backgroundImage = this.backgroundImage;
      this.cell.firstChild.style.backgroundRepiat = 'no-repeat';
      this.cell.firstChild.style.backgroundSize = `${100 * this.size}%`;
      const numberCell = this.cells[this.cells.length - 1].number - 1;
      const multiplier = 100 / (this.size - 1);
      this.cell.firstChild.style.backgroundPosition = `${(numberCell % this.size) * multiplier}% ${Math.floor(numberCell / this.size) * multiplier}%`;
    }

    this.emptyCell = {
      number: this.cells.length + 1,
      left: this.cells.length % this.size,
      top: (this.cells.length - (this.cells.length % this.size)) / this.size,
    };

    this.cells.push(this.emptyCell);
    console.log(this.cells);
    this.updateCountTimes();
  }

  handlerEvent = (e) => {
    console.log('e', e);
    console.log('e.target.className', e.target.className);
    // BUTTONS HANDLERS

    if (this.soundOn) {
      soundWrapper.childNodes[1].currentTime = 0;
      soundWrapper.childNodes[1].play();
    }

    if (e.target.className.match(/sound/)
        || e.target.innerText.match(/volume_up|volume_off/)) {
      this.switchSound(e);
    }
    if (e.target.className.match(/new-game/)) {
      this.newGame();
    }
    if (e.target.className.match(/button-menu/)
        || e.target.innerText.match(/build/)) {
      this.menu.classList.toggle('menu--active');
    }
    if (e.target.className.match(/save-game/)) {
      this.saveGame();
    }
    if (e.target.className.match(/load-game/)) {
      this.loadGame();
    }
    if (e.target.className.match(/test-move/)) {
      this.testMove();
    }
    if (e.target.className.match(/score/)) {
      this.getScore();
    }
  }

  cellMove(index) {
    const cell = this.cells[index];
    const leftDiff = Math.abs(this.emptyCell.left - cell.left);
    const topDiff = Math.abs(this.emptyCell.top - cell.top);

    if (this.soundOn) {
      soundWrapper.childNodes[0].currentTime = 0;
      soundWrapper.childNodes[0].play();
    }

    // We process click of only adjacent cells horizontall or verticall
    if (leftDiff + topDiff <= 1) {
      cell.item.style.left = `${this.emptyCell.left * this.sizeCell}%`;
      cell.item.style.top = `${this.emptyCell.top * this.sizeCell}%`;

      [this.emptyCell.left, cell.left] = [cell.left, this.emptyCell.left];
      [this.emptyCell.top, cell.top] = [cell.top, this.emptyCell.top];
    } else return;

    // Check is finish
    this.updateCountMove();
    this.checkFinish();
  }

  checkFinish() {
    // Add or remove --active class for cell on correct position
    this.cells.forEach((elem) => {
      if (elem.item) {
        if (elem.number - 1 === elem.top * this.size + elem.left) {
          elem.item.firstChild.classList.add('cell-inner--active');
          elem.active = true;
        } else if (elem.number - 1 !== elem.top * this.size + elem.left && elem.active === true) {
          elem.item.firstChild.classList.remove('cell-inner--active');
        }
      }
    });

    // Check all cells on correct position
    const isFinished = this.cells.every((cell) => {
      return cell.number - 1 === cell.top * this.size + cell.left;
    });

    if (isFinished) {
      // eslint-disable-next-line no-alert
      const name = prompt('Enter your name');
      // eslint-disable-next-line no-implied-eval
      setTimeout(`alert('${name}, you really good! Your results: ${this.minutes}m : ${this.seconds}s and ${this.countMoves} moves')`, 300);
      const localResult = {
        name: name,
        time: `${this.minutes}m : ${this.seconds}s`,
        moves: this.countMoves,
      };
      storage.set('Local result', localResult);
    }
  }

  getScore() {
    const { name, time, moves } = storage.get('Local result');
    this.score.innerHTML = `${name}, ${time}, ${moves}`;
  }

  // Start New Game without reload page
  newGame() {
    console.log('new game!');

    setTimeout(this.menu.classList.toggle('menu--active'), 100);
    this.field.remove();
    this.field = create('div', 'field', null, main);
    this.menu = create('div', 'menu', [
      create('button', 'button new-game', 'New Game'),
      create('button', 'button save-game', 'Save Game'),
      create('button', 'button load-game', 'Load Game'),
      create('button', 'button sound', '<span class="material-icons">volume_up</span>'),
      create('button', 'button score', 'Score'),
      create('button', 'button field-size', 'Field Size'),
    ], this.field);
    this.menu.addEventListener('click', this.handlerEvent);
    this.countTime = 0;
    this.countMoves = 0;
    counts.firstChild.innerHTML = `Moves: ${this.countMoves}`;
    clearTimeout(this.timeOut);
    this.generateField();
  }

  saveGame() {
    // this.storageCell = this.cells;
    storage.set('Save Game', this.cells);
    storage.set('Field Size', this.size);
    console.log('this.cells', this.cells);
    console.log('saved games');
  }

  loadGame() {
    this.cells = [];
    this.storageCell = [];
    this.storageCell = storage.get('Save Game');
    console.log(this.storageCell);
    // const storageNewArr = this.storageCell.map((elem) => elem.number);
    // console.log(storageNewArr);
    this.size = storage.get('Field Size');
    this.sizeCell = 100 / this.size;
    console.log(this.size);

    this.field.remove();
    this.field = create('div', 'field', null, main);
    this.storageCell.forEach((elem, i) => {
      if (i === this.storageCell.length - 1) {
        this.emptyCell = {
          number: elem.number,
          left: elem.left,
          top: elem.top,
        };

        this.cells.push(this.emptyCell);

        return;
      }
      this.cell = create('div', 'cell-outer',
        create('div', 'cell-inner', `${elem.number}`, null), this.field,
        ['id', `${elem.number}`],
        ['style', `top: ${elem.top * this.sizeCell}%; left: ${elem.left * this.sizeCell}%;`]);

      // this.cell = create('div', 'cell', `${elem.number}`, this.field, ['id', `${elem.number}`],
      //   ['style', `top: ${elem.top * this.sizeCell}%; left: ${elem.left * this.sizeCell}%;`]);

      this.cell.style.width = `${this.sizeCell}%`;
      this.cell.style.height = `${this.sizeCell}%`;

      this.cells.push({
        number: elem.number,
        left: elem.left,
        top: elem.top,
        item: this.cell,
        active: false,
      });

      this.cell.addEventListener('click', () => this.cellMove(i));
    });
    console.log('this.cells end', this.cells);
  }

  switchSound = (e) => {
    const soundButton = e.target;
    if (this.soundOn) {
      soundButton.innerHTML = '<span class="material-icons">volume_off</span>';
      this.soundOn = false;
    } else {
      soundButton.innerHTML = '<span class="material-icons">volume_up</span>';
      this.soundOn = true;
    }
  }

  updateCountMove() {
    this.countMoves += 1;
    counts.firstChild.innerHTML = `Moves: ${this.countMoves}`;
    console.log(this.countMoves);
  }

  updateCountTimes = () => {
    this.countTime += 1;
    this.seconds = this.countTime % 60;
    this.minutes = Math.floor(this.countTime / 60);

    counts.childNodes[1].innerHTML = `Time: ${this.minutes}m : ${this.seconds}s`;

    this.timeOut = setTimeout(this.updateCountTimes, 1000);
  }
}
