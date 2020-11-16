/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
/* eslint-disable object-shorthand */
/* eslint-disable arrow-body-style */
import create from './utils/create';
import * as storage from './utils/storage';
import audioClick from '../audio/click-cell.wav';
import audioButton from '../audio/click-button.wav';
import bgGenerate from './utils/bgGenerate';

export default class Game {
  constructor(size) {
    this.size = size;
    // Init DOM element
    this.main = create('div', 'game-wrapper',
      [create('div', 'title', 'Gem Puzzles by onc157')]);
    this.fieldWrapper = create('div', 'field-wrapper', null, this.main);
    this.field = create('div', 'field', null, this.fieldWrapper);
    this.counts = create('div', 'counts-wrapper', [
      create('div', 'count count-time', 'Moves: 0'),
      create('div', 'count count-move', 'Count time!'),
    ]);
    this.soundWrapper = create('div', 'sound-wrapper', [
      create('audio', null, null, null, ['src', audioClick]),
      create('audio', null, null, null, ['src', audioButton]),
    ]);
    this.menu = create('div', 'menu', [
      create('button', 'button new-game', 'New Game'),
      create('button', 'button save-game', 'Save Game'),
      create('button', 'button load-game', 'Load Game'),
      create('button', 'button sound', '<span class="material-icons">volume_up</span>'),
      create('button', 'button score', 'Score'),
      create('button', 'button field-size', 'Field Size'),
      create('button', 'button show-numbers', 'Show Numbers'),
    ], this.fieldWrapper);
    this.menuFieldSize = create('div', 'menu-field-size', [
      create('button', 'button button-size', '3 x 3', null, ['id', '3']),
      create('button', 'button button-size', '4 x 4', null, ['id', '4']),
      create('button', 'button button-size', '5 x 5', null, ['id', '5']),
      create('button', 'button button-size', '6 x 6', null, ['id', '6']),
      create('button', 'button button-size', '7 x 7', null, ['id', '7']),
      create('button', 'button button-size', '8 x 8', null, ['id', '8']),
      create('button', 'button back', 'Back'),
    ], this.fieldWrapper);
    this.buttonPress = create('div', 'button-press', null, this.fieldWrapper);
    // this.score = create('div', 'score-wrapper', 'score');
    this.sizeCell = 100 / this.size;
    this.menuButton = create('div', 'count button-menu', '<span class="material-icons">build</span>', this.counts);
    this.soundOn = true;
    this.numbersOn = false;
    this.menuFieldSizeOn = false;
    this.countMoves = 0;
    this.countTime = 0;
    this.backgroundImage = bgGenerate(1, 20);
  }

  // Add element on HTML markup
  init() {
    document.body.prepend(this.main, this.counts, this.soundWrapper);
    this.menuButton.addEventListener('click', this.handlerEvent);
    this.menu.addEventListener('mousedown', this.handlerEvent);
    this.menuFieldSize.addEventListener('mousedown', this.handlerEvent);
    return this;
  }

  // Generate random solvable array
  generateRandomArray() {
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
    return this.generateRandomArray();
  }

  // Generate random field
  generateField() {
    this.cells = [];
    this.randomNumbers = this.generateRandomArray();

    // Generate puzzle cells
    for (let i = 0; i < this.size ** 2 - 1; i += 1) {
      const left = i % this.size;
      const top = (i - left) / this.size;

      this.cell = create('div', 'cell-outer',
        create('div', 'cell-inner', `${this.randomNumbers[i]}`, null), this.field,
        ['id', `${this.randomNumbers[i]}`],
        ['style', `top: ${top * this.sizeCell}%; left: ${left * this.sizeCell}%;`]);

      // Set cells cizes
      this.cell.style.width = `${this.sizeCell}%`;
      this.cell.style.height = `${this.sizeCell}%`;

      this.cells.push({
        number: this.randomNumbers[i],
        left: left,
        top: top,
        item: this.cell,
        active: false,
      });

      // Set font size cells depend with cell size
      this.cell.firstChild.style.fontSize = `${8 / this.size}rem`;

      this.cell.firstChild.addEventListener('click', () => this.cellMove(i));
      this.cell.addEventListener('mousedown', (e) => this.cellDrag(e, i));

      // Add background img on cells
      this.cell.firstChild.style.backgroundImage = this.backgroundImage;
      this.cell.firstChild.style.backgroundSize = `${100 * this.size}%`;
      const numberCell = this.cells[this.cells.length - 1].number - 1;
      const multiplier = 100 / (this.size - 1);
      this.cell.firstChild.style.backgroundPosition = `${(numberCell % this.size) * multiplier}% ${Math.floor(numberCell / this.size) * multiplier}%`;
    }

    // Push empty cell
    this.emptyCell = {
      number: this.cells.length + 1,
      left: this.cells.length % this.size,
      top: (this.cells.length - (this.cells.length % this.size)) / this.size,
    };
    this.cells.push(this.emptyCell);

    this.updateCountTimes();
  }

  handlerEvent = (e) => {
    // BUTTONS HANDLERS
    const playSound = () => {
      if (this.soundOn) {
        this.soundWrapper.childNodes[1].currentTime = 0;
        this.soundWrapper.childNodes[1].play();
      }
    };

    if (e.target.className.match(/button|material/)) playSound();

    if (e.target.className.match(/sound/)
        || e.target.innerText.match(/^volume_up$|^volume_off$/)) {
      this.switchSound(e);
    }
    if (e.target.className.match(/new-game/)) {
      this.newGame();
    }
    if (e.target.className.match(/button-menu/)
        || e.target.innerText.match(/build/)) {
      this.menu.classList.toggle('menu--active');
      if (this.menuFieldSizeOn) {
        this.menuFieldSizeOn = false;
        this.menuFieldSize.classList.toggle('menu-field-size--active');
      }
    }
    if (e.target.className.match(/save-game/)) {
      this.saveGame();
    }
    if (e.target.className.match(/load-game/)) {
      this.loadGame();
    }
    if (e.target.className.match(/score/)) {
      this.getScore();
    }
    if (e.target.className.match(/field-size/)) {
      this.changeFieldSize();
    }
    if (e.target.className.match(/back/)) {
      if (this.menuFieldSizeOn) {
        this.menuFieldSizeOn = false;
        this.menuFieldSize.classList.toggle('menu-field-size--active');
      }
    }
    if (e.target.className.match(/button-size/)) {
      this.size = e.target.id;
      this.sizeCell = 100 / this.size;
      this.newGame();
      this.menuFieldSize.classList.toggle('menu-field-size--active');
    }
    if (e.target.className.match(/show-numbers/)) {
      this.showNumbers(e);
    }
  }

  cellMove(index) {
    const cell = this.cells[index];
    const leftDiff = Math.abs(this.emptyCell.left - cell.left);
    const topDiff = Math.abs(this.emptyCell.top - cell.top);

    if (this.soundOn) {
      this.soundWrapper.childNodes[0].currentTime = 0;
      this.soundWrapper.childNodes[0].play();
    }

    // We process click of only adjacent cells horizontall or verticall
    if (leftDiff + topDiff <= 1) {
      cell.item.style.left = `${this.emptyCell.left * this.sizeCell}%`;
      cell.item.style.top = `${this.emptyCell.top * this.sizeCell}%`;

      [this.emptyCell.left, cell.left] = [cell.left, this.emptyCell.left];
      [this.emptyCell.top, cell.top] = [cell.top, this.emptyCell.top];

      this.field.onmouseup = null;
      this.field.onmousemove = null;
      this.field.onmouseleave = null;
    } else return;

    // Check is finish
    this.checkFinish();
    this.updateCountMove();
  }

  cellDrag(edrag, index) {
    const cell = this.cells[index];
    const leftDiff = Math.abs(this.emptyCell.left - cell.left);
    const topDiff = Math.abs(this.emptyCell.top - cell.top);

    if (leftDiff + topDiff <= 1) {
      cell.item.style.zIndex = '50';
      cell.item.style.transition = '0s';

      this.field.onmouseleave = () => {
        cell.item.style.transition = '.5s';
        setTimeout(() => {
          cell.item.style.zIndex = null;
        }, 500);
        this.cellMove(index);
      };

      const dragMove = (left, top) => {
        cell.item.style.left = `${left}%`;
        cell.item.style.top = `${top}%`;
      };

      this.field.onmousemove = (event) => {
        const left = ((event.pageX - this.field.offsetLeft - edrag.offsetX - this.field.getBoundingClientRect().x - edrag.target.clientLeft) / this.field.clientWidth) * 100;
        const top = ((event.pageY - this.field.offsetTop - edrag.offsetY - this.field.getBoundingClientRect().y - edrag.target.clientTop) / this.field.clientHeight) * 100;
        dragMove(left, top);
      };

      this.field.onmouseup = () => {
        cell.item.style.transition = '.5s';
        setTimeout(() => {
          cell.item.style.zIndex = null;
        }, 500);
        this.field.onmouseup = null;
        this.field.onmousemove = null;
      };
    }
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
    this.menu.classList.toggle('menu--active');

    const newField = () => {
      this.field.remove();
      this.field = create('div', 'field', null, this.fieldWrapper);
      this.countTime = 0;
      this.countMoves = 0;
      this.counts.firstChild.innerHTML = `Moves: ${this.countMoves}`;
      clearTimeout(this.timeOut);
      this.backgroundImage = bgGenerate(1, 20);
      this.generateField();
      this.btnPress('NEW GAME');

      if (this.numbersOn === true) {
        this.menu.lastChild.innerText = 'Hide Numbers';
        this.cells.forEach((elem) => {
          if (!elem.item) return;
          elem.item.firstChild.classList.add('cell-inner--show-numbers');
        });
      }
    };

    setTimeout(newField, 500);
  }

  saveGame() {
    storage.set('Save Game', this.cells);
    storage.set('Field Size', this.size);
    storage.set('Background Image', this.backgroundImage);
    storage.set('numbersOn', this.numbersOn);
    this.btnPress('GAME SAVED');
  }

  loadGame() {
    if (!storage.get('Save Game')) {
      this.btnPress('NO SAVED GAME');
      return;
    }
    this.cells = [];
    this.storageCells = [];
    this.storageCells = storage.get('Save Game');
    this.size = storage.get('Field Size');
    this.sizeCell = 100 / this.size;
    this.backgroundImage = storage.get('Background Image');
    this.numbersOn = storage.get('numbersOn');

    this.menu.classList.toggle('menu--active');

    setTimeout(() => {
      this.field.remove();
      this.field = create('div', 'field', null, this.fieldWrapper);
      this.storageCells.forEach((elem, i) => {
        if (i === this.storageCells.length - 1) {
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

        // Set font size cells depend with cell size
        this.cell.firstChild.style.fontSize = `${8 / this.size}rem`;

        this.cell.style.width = `${this.sizeCell}%`;
        this.cell.style.height = `${this.sizeCell}%`;
        if (this.numbersOn === true) {
          this.menu.lastChild.innerText = 'Hide Numbers';
          this.cell.firstChild.classList.add('cell-inner--show-numbers');
        }

        this.cells.push({
          number: elem.number,
          left: elem.left,
          top: elem.top,
          item: this.cell,
          active: false,
        });

        this.cell.addEventListener('click', () => this.cellMove(i));
        this.cell.onmousedown = (e) => {
          this.cellDrag(e, i);
        };

        this.cell.firstChild.style.backgroundImage = this.backgroundImage;
        this.cell.firstChild.style.backgroundRepiat = 'no-repeat';
        this.cell.firstChild.style.backgroundSize = `${100 * this.size}%`;
        const numberCell = this.cells[this.cells.length - 1].number - 1;
        const multiplier = 100 / (this.size - 1);
        this.cell.firstChild.style.backgroundPosition = `${(numberCell % this.size) * multiplier}% ${Math.floor(numberCell / this.size) * multiplier}%`;
      });
    }, 500);

    this.btnPress('GAME LOADED');
  }

  changeFieldSize() {
    if (this.menuFieldSizeOn) {
      this.menuFieldSizeOn = false;
      this.menuFieldSize.classList.toggle('menu-field-size--active');
    } else {
      this.menuFieldSizeOn = true;
      this.menuFieldSize.classList.toggle('menu-field-size--active');
    }
  }

  switchSound = (e) => {
    const soundButton = e.target;
    if (this.soundOn) {
      soundButton.innerHTML = '<span class="material-icons">volume_off</span>';
      this.soundOn = false;
      this.btnPress('SOUND OFF');
    } else {
      soundButton.innerHTML = '<span class="material-icons">volume_up</span>';
      this.soundOn = true;
      this.btnPress('SOUND ON');
    }
  }

  showNumbers = (e) => {
    if (!this.numbersOn) {
      this.numbersOn = true;
      e.target.innerText = 'Hide Numbers';
      this.btnPress('NUMBERS ADDED');
      this.cells.forEach((elem) => {
        if (!elem.item) return;
        elem.item.firstChild.classList.add('cell-inner--show-numbers');
      });
    } else {
      this.numbersOn = false;
      e.target.innerText = 'Show Numbers';
      this.btnPress('NUMBERS REMOVED');
      this.cells.forEach((elem) => {
        if (!elem.item) return;
        elem.item.firstChild.classList.remove('cell-inner--show-numbers');
      });
    }
  }

  updateCountMove() {
    this.countMoves += 1;
    this.counts.firstChild.innerHTML = `Moves: ${this.countMoves}`;
  }

  updateCountTimes = () => {
    this.countTime += 1;
    this.seconds = this.countTime % 60;
    this.minutes = Math.floor(this.countTime / 60);

    this.counts.childNodes[1].innerHTML = `Time: ${this.minutes}m : ${this.seconds}s`;

    this.timeOut = setTimeout(this.updateCountTimes, 1000);
  }

  // Show message when we click on buttons in menu
  btnPress(str) {
    this.buttonPress.classList.toggle('button-press--active');
    this.buttonPress.innerText = `${str}`;
    setTimeout(() => {
      this.buttonPress.classList.toggle('button-press--active');
      this.buttonPress.innerText = '';
    }, 1000);
  }
}
