import {
  KEY_LAYOUT,
  KEYS_WITH_ICONS,
  KEYBOARD_SPECIAL_KEYS_MAP,
} from '@/constants';
import { createElement, createKeys, onKeyboardInput } from '@helpers';

export class Keyboard {
  constructor(input) {
    this.properties = {
      value: '',
      restValue: '',
      capsLock: false,
      shift: false,
      language: 'en',
      audio: {},
      isRecognizerOn: false,
      recognizer: null,
    };
    this.input = input;
    this._createLayout();
  }

  _createLayout = () => {
    this.keyboard = createElement(
      'div',
      'keyboard',
      ['keyboard', 'keyboard--hidden'],
      null,
      [createKeys(this.properties, this._setKeyLayout)]
    );
    this.keys = this.keyboard.querySelectorAll('.keyboard__key');
    document.body.appendChild(this.keyboard);
    this._addKeyboardHandlers();
    this._addTextareaKeyHandlers();
    this._setRecognizer();
  };

  _setKeyLayout = () => {
    let i = 0;
    const shift =
      (!this.properties.capsLock && this.properties.shift) ||
      (this.properties.capsLock && !this.properties.shift)
        ? 'shift'
        : 'base';

    KEY_LAYOUT[this.properties.language][shift].forEach((keysRow) =>
      keysRow.forEach((keyValue) => {
        if (~KEYS_WITH_ICONS.findIndex((key) => key === keyValue)) {
          if (keyValue === 'language') {
            this.keys[i].innerHTML = this.properties.language.toUpperCase();
          } else {
            this.keys[
              i
            ].innerHTML = `<i class="material-icons">${keyValue}</i>`;
          }
        } else {
          this.keys[i].innerHTML = keyValue;
        }
        if (
          ![
            'backspace',
            'keyboard_capslock',
            'keyboard_return',
            'upgrade',
          ].includes(keyValue)
        ) {
          this.keys[i].dataset.key = this.properties.language;
        }
        i += 1;
      })
    );
  };

  _addTextareaKeyHandlers() {
    const relevantKeyValue = (key) => KEYBOARD_SPECIAL_KEYS_MAP[key] || key;

    const keyHandler = (e, classHandler) => {
      const { key } = e;
      const handleActiveClass = () => {
        const keyCandidateIndex = Array.from(this.keys).findIndex(
          (keyButton) => relevantKeyValue(keyButton.innerText) === key
        );
        if (~keyCandidateIndex) {
          this.keys[keyCandidateIndex].classList[classHandler](
            'keyboard__key--active'
          );
        }
      };

      switch (key) {
        case 'Tab':
          e.preventDefault();
          if (classHandler === 'add') this._onInput('    ');
          handleActiveClass();
          break;

        case 'CapsLock':
          if (classHandler === 'add') {
            this.properties.capsLock = !this.properties.capsLock;
            this._setKeyLayout();
            document
              .querySelector('.keyboard__key--caps')
              .classList.toggle('on');
          }
          handleActiveClass();
          break;

        case 'Shift':
          this.properties.shift = classHandler === 'add';
          this._setKeyLayout();
          document
            .querySelector('.keyboard__key--shift')
            .classList[classHandler]('on');
          handleActiveClass();
          break;

        default:
          handleActiveClass();
          break;
      }
    };

    // this.input.addEventListener('focus', () =>
    //   this._openKeyboard(this.elements.textField.value)
    // );

    this.input.addEventListener('click', (e) => {
      if (!this.keyboard.classList.contains('keyboard--hidden')) {
        if (this.properties.capsLock !== e.getModifierState('CapsLock')) {
          document.querySelector('.keyboard__key--caps').classList.toggle('on');
        }
        this.properties.capsLock = e.getModifierState('CapsLock');
        this._setKeyLayout();
      }
    });

    this.input.addEventListener('keydown', (e) => keyHandler(e, 'add'));
    this.input.addEventListener('keyup', (e) => keyHandler(e, 'remove'));
  }

  _addKeyboardHandlers = () => {
    this.keyboard.addEventListener('click', () => {
      if (!this.keyboard.classList.contains('keyboard--hidden')) {
        const start = this.input.selectionStart;
        this.input.focus();
        this.input.setSelectionRange(start, start);
      }
    });
  };

  _setRecognizer = () => {
    window.SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const language = this.properties.language === 'en' ? 'en-US' : 'ru-RU';
    this.properties.recognizer = new window.SpeechRecognition();
    this.properties.recognizer.lang = language;
    this.properties.recognizer.continuous = true;

    this.properties.recognizer.addEventListener('result', (e) => {
      this._onInput(`${e.results[e.results.length - 1][0].transcript}`);
    });

    this.properties.recognizer.addEventListener(
      'end',
      this.properties.recognizer.stop
    );
  };

  _onInput = (text) =>
    onKeyboardInput(text, this.properties, this._setKeyLayout);
}
