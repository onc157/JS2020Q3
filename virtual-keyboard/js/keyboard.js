/* eslint-disable no-unused-expressions */
/* eslint-disable comma-dangle */
/* eslint-disable prefer-destructuring */
/* eslint-disable import/extensions */
/* eslint-disable no-param-reassign */
import * as storage from './storage.js';
import create from './utils/create.js';
import language from './layouts/index.js';
import Key from './key.js';

// Init DOM element
const main = create('main', '',
  [create('h1', 'title', 'Virtual Keyboard by onc157')]);
const soundWrapper = create('div', 'sound-wrapper', [
  create('audio', null, null, null, ['src', './assets/audio/ru-click.wav']),
  create('audio', null, null, null, ['src', './assets/audio/ru-shift.wav']),
  create('audio', null, null, null, ['src', './assets/audio/ru-caps-lock.wav']),
  create('audio', null, null, null, ['src', './assets/audio/ru-enter.wav']),
  create('audio', null, null, null, ['src', './assets/audio/ru-backspace.wav']),
  create('audio', null, null, null, ['src', './assets/audio/en-click.wav']),
  create('audio', null, null, null, ['src', './assets/audio/en-shift.wav']),
  create('audio', null, null, null, ['src', './assets/audio/en-caps-lock.wav']),
  create('audio', null, null, null, ['src', './assets/audio/en-enter.wav']),
  create('audio', null, null, null, ['src', './assets/audio/en-backspace.wav']),
  create('audio', null, null, null, ['src', './assets/audio/hide-keyboard.ogg'])
]);
const keyboardShowButton = create('button', 'button-switch switch--active', [
  create('span', 'material-icons md-48', 'loop')
]);

export default class Keyboard {
  constructor(rowsOrder) {
    this.rowsOrder = rowsOrder;
    this.keysPressed = {};
    this.isCaps = false;
    this.shiftKey = false;
    this.keyboardShow = true;
    this.soundButtons = true;
    this.voiceRecording = false;

    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    this.recognition = new SpeechRecognition();
    this.recognition.interimResults = true;
  }

  // Create DOM element
  init(langCode) {
    this.keyBase = language[langCode]; // script.js: lang
    this.output = create('textarea', 'output', null, main,
      ['placeholder', ''],
      ['rows', 5],
      ['cols', 50],
      ['spellcheck', false],
      ['autocorrect', 'off']);
    this.container = create('div', 'keyboard', null, main, ['language', langCode]);
    document.body.prepend(main, soundWrapper, keyboardShowButton);
    return this;
  }

  // Draw keyboard
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
    keyboardShowButton.addEventListener('mousedown', () => this.hideKeyboard());
  }

  // Add event listener mouselave
  preHandleEvent = (e) => {
    e.stopPropagation();
    const keyDiv = e.target.closest('.keyboard__key');
    if (!keyDiv) return;
    const { dataset: { code } } = keyDiv;

    if (!code.match(/Caps/) && !code.match(/Shift/) && !code.match(/Voice/)) {
      keyDiv.addEventListener('mouseleave', this.resetButtonState);
    }

    this.handlerEvent({ code, type: e.type });
  }

  // Remove event listener mouselave
  resetButtonState = ({ target: { dataset: { code } } }) => {
    const keyObj = this.keyButtons.find((key) => key.code === code);
    keyObj.div.classList.remove('active');
    keyObj.div.removeEventListener('mouseleave', this.resetButtonState);
  }

  // Handler event
  handlerEvent = (e) => {
    if (e.stopPropagation) e.stopPropagation();
    const { code, type } = e;
    const keyObj = this.keyButtons.find((key) => key.code === code);
    if (!keyObj) return;
    this.output.focus();

    // Mouse or keyboard click
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

      // Sound keyboard
      if (this.soundButtons) {
        if (this.container.dataset.language === 'ru') {
          if (code.match(/Shift/)) {
            soundWrapper.childNodes[1].currentTime = 0;
            soundWrapper.childNodes[1].play();
          } else if (code.match(/Caps/)) {
            soundWrapper.childNodes[2].currentTime = 0;
            soundWrapper.childNodes[2].play();
          } else if (code.match(/Enter/)) {
            soundWrapper.childNodes[3].currentTime = 0;
            soundWrapper.childNodes[3].play();
          } else if (code.match(/Backspace/)) {
            soundWrapper.childNodes[4].currentTime = 0;
            soundWrapper.childNodes[4].play();
          } else {
            soundWrapper.childNodes[0].currentTime = 0;
            soundWrapper.childNodes[0].play();
          }
        } else if (this.container.dataset.language === 'en') {
          if (code.match(/Shift/)) {
            soundWrapper.childNodes[6].currentTime = 0;
            soundWrapper.childNodes[6].play();
          } else if (code.match(/Caps/)) {
            soundWrapper.childNodes[7].currentTime = 0;
            soundWrapper.childNodes[7].play();
          } else if (code.match(/Enter/)) {
            soundWrapper.childNodes[8].currentTime = 0;
            soundWrapper.childNodes[8].play();
          } else if (code.match(/Backspace/)) {
            soundWrapper.childNodes[9].currentTime = 0;
            soundWrapper.childNodes[9].play();
          } else {
            soundWrapper.childNodes[5].currentTime = 0;
            soundWrapper.childNodes[5].play();
          }
        }
      }

      // Switch language
      // Switch Ctrl + Alt
      if (code.match(/Control/)) this.ctrlKey = true;
      if (code.match(/Alt/)) this.altKey = true;

      if (code.match(/Control/) && this.altKey) this.switchLanguage();
      if (code.match(/Alt/) && this.ctrlKey) this.switchLanguage();

      // Switch push LANG key
      if (code.match(/Lang/)) this.switchLanguage();

      // Switch Sound keyboard
      if (code.match(/Sound/)) this.switchSound();

      // Handle Voice down
      if (code.match(/Voice/) && !this.voiceRecording) {
        this.voiceRecording = true;
        this.setRecognition(true);
      } else if (code.match(/Voice/) && this.voiceRecording) {
        console.log('this.voiceRecording', this.voiceRecording);
        this.voiceRecording = false;
        this.setRecognition(false);
        keyObj.div.classList.remove('active');
      }

      // Which symbol we write in console
      if (!this.isCaps) {
        this.printToOutput(keyObj, this.shiftKey ? keyObj.shift : keyObj.small);
      } else if (this.isCaps) {
        if (this.shiftKey) {
          this.printToOutput(keyObj, keyObj.sub.innerHTML ? keyObj.shift : keyObj.small);
        } else {
          this.printToOutput(keyObj, !keyObj.sub.innerHTML ? keyObj.shift : keyObj.small);
        }
      }

      // Release button
    } else if (type.match(/keyup|mouseup/)) {
      if (code.match(/Control/)) this.ctrlKey = false;
      if (code.match(/Alt/)) this.altKey = false;

      if (!code.match(/Caps/) && !code.match(/Shift/) && !code.match(/Voice/)) keyObj.div.classList.remove('active');
    }
  }

  // Voice text input
  setRecognition = (isTrue) => {
    this.recognition.onresult = e => {
      let cursorPos = this.output.selectionStart;
      const left = this.output.value.slice(0, cursorPos);
      const right = this.output.value.slice(cursorPos);

      const transcript = e.results[0][0].transcript;

      if (e.results[0].isFinal) {
        this.output.value = `${left} ${transcript}${right}`;
        cursorPos = left.length + transcript.length + 1;

        this.output.setSelectionRange(cursorPos, cursorPos);
      }
    };

    if (isTrue) {
      if (this.container.dataset.language === 'ru') {
        this.recognition.lang = 'ru-Latn';
      } else {
        this.recognition.lang = 'en-US';
      }

      this.recognition.onend = () => this.recognition.start();
      this.recognition.start();
    } else {
      this.recognition.onresult = null;
      this.recognition.onend = null;
      this.recognition.stop();
    }
  }

  // Show / Hide keyboard panel when click on the button
  hideKeyboard = () => {
    soundWrapper.childNodes[10].currentTime = 0;
    soundWrapper.childNodes[10].play();

    this.container.classList.toggle('keyboar--disabled');
    document.querySelector('.button-switch').classList.toggle('button-switch-keyboard--disabled');
    this.keyboardShow === true ? this.keyboardShow = false : this.keyboardShow = true;
    if (this.keyboardShow === false) {
      this.output.addEventListener('click', this.hideKeyboard);
    } else if (this.keyboardShow === true) {
      this.output.removeEventListener('click', this.hideKeyboard);
    }
  }

  // Switch language on keyboard
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

  // Mute buttons
  switchSound = () => {
    const soundSwitch = this.keyButtons.find(key => key.code === 'Sound').div.lastChild;

    if (this.soundButtons) {
      this.soundButtons = false;
      soundSwitch.innerHTML = '<span class="material-icons">music_off</span>';
    } else {
      this.soundButtons = true;
      soundSwitch.innerHTML = '<span class="material-icons">music_note</span>';
    }
  }

  // Switch symbol in upper case
  switchUpperCase() {
    if (this.isCaps && !this.shiftKey) {
      this.keyButtons.forEach((button) => {
        button.sub.classList.remove('sub-active');
        button.letter.classList.remove('sub-inactive');

        if (!button.isFnKey && this.isCaps && !this.shiftKey && !button.sub.innerHTML) {
          button.letter.innerHTML = button.shift;
        }
      });
    } else if (!this.isCaps && this.shiftKey) {
      this.keyButtons.forEach((button) => {
        button.sub.classList.add('sub-active');
        button.letter.classList.add('sub-inactive');

        if (!button.isFnKey && !this.isCaps && this.shiftKey && !button.sub.innerHTML) {
          button.letter.innerHTML = button.shift;
        } else if (!button.isFnKey && !button.sub.innerHTML) {
          button.letter.innerHTML = button.shift;
        }
      });
    } else if (this.isCaps && this.shiftKey) {
      this.keyButtons.forEach((button) => {
        button.sub.classList.add('sub-active');
        button.letter.classList.add('sub-inactive');

        if (button.code.match(/Sound/)) return;
        button.letter.innerHTML = button.small;
      });
    } else if (!this.isCaps && !this.shiftKey) {
      this.keyButtons.forEach((button) => {
        button.sub.classList.remove('sub-active');
        button.letter.classList.remove('sub-inactive');
        if (button.code.match(/Sound/)) return;
        button.letter.innerHTML = button.small;
      });
    }
  }

  // Print symbol in keyboard output
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
    };

    if (fnButtonsHandler[keyObj.code]) fnButtonsHandler[keyObj.code]();

    else if (!keyObj.isFnKey) {
      cursorPos += 1;
      this.output.value = `${left}${symbol || ''}${right}`;
    }
    this.output.setSelectionRange(cursorPos, cursorPos);
  }
}