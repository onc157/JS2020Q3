/* eslint-disable no-param-reassign */
import * as storage from './storage.js';
import create from './utils/create.js';
import language from './layouts/index.js';
import Key from './Key.js';

const main = create('main', '',
  [create('h1', 'title', 'RSS Virtual Keyboard'),
    create('h3', 'subtitle', 'Windows keyboard that has been made under Linux'),
    create('p', 'hint', 'Use left <kbd>Ctrl</kbd> + <kbd>Alt</kbd> to switch language. Last language saves in localStorage')
  ]);

export default class Keyboard {
  constructor(rowsOrder) {
    this.rowsOrder = rowsOrder;
    this.keysPressed = {};
    this.isCaps = false;
    this.shiftKey = false;
  }

  init(langCode) {
    this.keyBase = language[langCode]; // script.js: lang
    this.output = create('textarea', 'output', null, main,
      ['placeholder', 'Start type something:'],
      ['rows', 5],
      ['cols', 50],
      ['spellcheck', false],
      ['autocorrect', 'off']);
    this.container = create('div', 'keyboard', null, main, ['language', langCode]);
    document.body.prepend(main);
    return this;
  }

  generateLayout() {
    this.keyButtons = [];
    this.rowsOrder.forEach((row, i) => {
      const rowElement = create('div', 'keyboard__row', null, this.container, ['row', i + 1]);
      rowElement.style.gridTemplateColumns = `repeat(${row.length}, 1fr)`;
      row.forEach((code) => {
        const keyObj = this.keyBase.find((key) => key.code === code);
        if (keyObj) {
          const keyButton = new Key(keyObj);
          this.keyButtons.push(keyButton);
          rowElement.appendChild(keyButton.div);
        }
      });
    });

    document.addEventListener('keydown', this.handlerEvent);
    document.addEventListener('keyup', this.handlerEvent);
    this.container.onmousedown = this.preHandleEvent;
    this.container.onmouseup = this.preHandleEvent;
    document.querySelector('.button-switch').addEventListener('mousedown', () => this.hideKeyboard());
  }

  preHandleEvent = (e) => {
    e.stopPropagation();
    const keyDiv = e.target.closest('.keyboard__key');
    if (!keyDiv) return;
    const {
      dataset: {
        code
      }
    } = keyDiv;

    if (!code.match(/Caps/) && !code.match(/Shift/)) {
      keyDiv.addEventListener('mouseleave', this.resetButtonState);
    }

    this.handlerEvent({
      code,
      type: e.type
    });
  }

  resetButtonState = ({
    target: {
      dataset: {
        code
      }
    }
  }) => {
    const keyObj = this.keyButtons.find((key) => key.code === code);
    keyObj.div.classList.remove('active');
    keyObj.div.removeEventListener('mouseleave', this.resetButtonState);
  }

  // Обработчик событий
  handlerEvent = (e) => {
    if (e.stopPropagation) e.stopPropagation();
    const {
      code,
      type
    } = e;
    const keyObj = this.keyButtons.find((key) => key.code === code);
    if (!keyObj) return;
    this.output.focus();

    // Нажатие кнопок клавиатуры / мыши
    if (type.match(/keydown|mousedown/)) {
      if (type.match(/key/)) e.preventDefault();

      keyObj.div.classList.add('active');

      // Handle Caps down
      if (code.match(/Caps/) && !this.isCaps) {
        this.isCaps = true;
        this.switchUpperCase();
      } else if (code.match(/Caps/) && this.isCaps) {
        this.isCaps = false;
        this.switchUpperCase();

        keyObj.div.classList.remove('active');
      }

      // Handle Shift down
      if (code.match(/Shift/) && !this.shiftKey) {
        this.shiftKey = true;
        this.switchUpperCase();
      } else if (code.match(/Shift/) && this.shiftKey) {
        this.shiftKey = false;
        this.switchUpperCase();

        keyObj.div.classList.remove('active');
      }

      // Switch language
      // Switch Ctrl + Alt
      if (code.match(/Control/)) this.ctrlKey = true;
      if (code.match(/Alt/)) this.altKey = true;

      if (code.match(/Control/) && this.altKey) this.switchLanguage();
      if (code.match(/Alt/) && this.ctrlKey) this.switchLanguage();

      // Switch ppush LANG key
      if (code.match(/Lang/)) this.switchLanguage();


      // Определяем, какой символ мы пишем в консоль (спец или основной)
      if (!this.isCaps) {
        // если не зажат капс, смотрим не зажат ли шифт
        this.printToOutput(keyObj, this.shiftKey ? keyObj.shift : keyObj.small);
      } else if (this.isCaps) {
        // если зажат капс
        if (this.shiftKey) {
          // и при этом зажат шифт - то для кнопки со спецсимволом даем верхний регистр
          this.printToOutput(keyObj, keyObj.sub.innerHTML ? keyObj.shift : keyObj.small);
        } else {
          // и при этом НЕ зажат шифт - то для кнопки без спецсивмола даем верхний регистр
          this.printToOutput(keyObj, !keyObj.sub.innerHTML ? keyObj.shift : keyObj.small);
        }
      }

      // Release button
    } else if (type.match(/keyup|mouseup/)) {
      if (code.match(/Control/)) this.ctrlKey = false;
      if (code.match(/Alt/)) this.altKey = false;

      if (!code.match(/Caps/) && !code.match(/Shift/)) keyObj.div.classList.remove('active');
    }
  }

  // Show / Hide keyboard panel when click on the button
  hideKeyboard = () => {
    this.container.classList.toggle('keyboar--disabled');
    document.querySelector('.button-switch').classList.toggle('button-switch-keyboard--disabled');
  }

  switchLanguage = () => {
    const langAbbr = Object.keys(language); // ['en', 'ru']
    let langIdx = langAbbr.indexOf(this.container.dataset.language); // 0 = 'en' | 1 = 'ru'
    this.keyBase = langIdx + 1 < langAbbr.length ? language[langAbbr[langIdx += 1]] :
      language[langAbbr[langIdx -= langIdx]];

    this.container.dataset.language = langAbbr[langIdx];
    storage.set('kbLang', langAbbr[langIdx]);

    this.keyButtons.forEach((button) => {
      const keyObj = this.keyBase.find((key) => key.code === button.code);
      if (!keyObj) return;
      button.shift = keyObj.shift;
      button.small = keyObj.small;
      if (keyObj.shift && keyObj.shift.match(/[^a-zA-Zа-яА-ЯёЁ0-9]/g)) {
        button.sub.innerHTML = keyObj.shift;
      } else {
        button.sub.innerHTML = '';
      }
      button.letter.innerHTML = keyObj.small;
    });

    if (this.isCaps || this.shiftKey) this.switchUpperCase();
  }

  switchUpperCase() {
    // Если нажат капс и НЕ нажат шифт:
    if (this.isCaps && !this.shiftKey) {
      // Перебираем все кнопки
      this.keyButtons.forEach((button) => {
        // Убираем спецсимволы
        button.sub.classList.remove('sub-active');
        button.letter.classList.remove('sub-inactive');
        // Отрисовываем заглавные кнопки
        if (!button.isFnKey && this.isCaps && !this.shiftKey && !button.sub.innerHTML) {
          button.letter.innerHTML = button.shift;
        }
      });
      // Если НЕ нажат капс и нажат шифт:
    } else if (!this.isCaps && this.shiftKey) {
      // Перебираем все кнопки
      this.keyButtons.forEach((button) => {
        // Активируем спецсимволы
        button.sub.classList.add('sub-active');
        button.letter.classList.add('sub-inactive');
        // Отрисовываем заглавные символы
        if (!button.isFnKey && !this.isCaps && this.shiftKey && !button.sub.innerHTML) {
          button.letter.innerHTML = button.shift;
        } else if (!button.isFnKey && !button.sub.innerHTML) {
          button.letter.innerHTML = button.shift;
        }
      });
      // Если нажат капс и нажат шифт:
    } else if (this.isCaps && this.shiftKey) {
      // Перебираем все кнопки
      this.keyButtons.forEach((button) => {
        // Активируем спецсимволы и отрисовываем строчные символы
        button.sub.classList.add('sub-active');
        button.letter.classList.add('sub-inactive');
        button.letter.innerHTML = button.small;
      });
      // Если НЕ нажат капс и НЕ нажат шифт:
    } else if (!this.isCaps && !this.shiftKey) {
      // Перебираем все кнопки
      this.keyButtons.forEach((button) => {
        // Убираем спецсимволы и отрисовываем строчные символы
        button.sub.classList.remove('sub-active');
        button.letter.classList.remove('sub-inactive');
        button.letter.innerHTML = button.small;
      });
    }
  }

  printToOutput(keyObj, symbol) {
    let cursorPos = this.output.selectionStart;
    const left = this.output.value.slice(0, cursorPos);
    const right = this.output.value.slice(cursorPos);
    const fnButtonsHandler = {
      Tab: () => {
        this.output.value = `${left}\t${right}`;
        cursorPos += 1;
      },
      ArrowLeft: () => {
        cursorPos = cursorPos - 1 >= 0 ? cursorPos - 1 : 0;
      },
      ArrowRight: () => {
        cursorPos += 1;
      },
      Enter: () => {
        this.output.value = `${left}\n${right}`;
        cursorPos += 1;
      },
      Delete: () => {
        this.output.value = `${left}${right.slice(1)}`;
      },
      Backspace: () => {
        this.output.value = `${left.slice(0, -1)}${right}`;
        cursorPos -= 1;
      },
      Space: () => {
        this.output.value = `${left} ${right}`;
        cursorPos += 1;
      },
    }

    if (fnButtonsHandler[keyObj.code]) fnButtonsHandler[keyObj.code]();

    else if (!keyObj.isFnKey) {
      cursorPos += 1;
      this.output.value = `${left}${symbol || ''}${right}`;
    }
    this.output.setSelectionRange(cursorPos, cursorPos);
  }
}