import { KEY_LAYOUT, KEYS_FG1, KEYS_WITH_ICONS } from '@/constants';
import { addKeyboardKeyEventListener } from '@/helpers/addKeyboardKeyEventListener';
import { addKeyboardKeyClickEffect } from '@/helpers/addKeyboardKeyClickEffect';

export const createKeys = (properties, setKeyLayout) => {
  const fragment = document.createDocumentFragment();

  KEY_LAYOUT[properties.language].base.forEach((keysRow, rowIndex) => {
    const row = document.createElement('div');
    row.classList.add('keyboard__row');

    keysRow.forEach((keyValue, index) => {
      const key = document.createElement('button');
      key.setAttribute('type', 'button');
      key.classList.add('keyboard__key');
      key.dataset.code = `${rowIndex}-${index}`;

      if (~KEYS_WITH_ICONS.findIndex((keyI) => keyI === keyValue)) {
        if (keyValue === 'language') {
          key.classList.add('keyboard__key--language');
          key.innerHTML = properties.language.toUpperCase();
        } else {
          key.innerHTML = `<i class="material-icons">${keyValue}</i>`;

          switch (keyValue) {
            case 'keyboard_capslock':
              key.classList.add('keyboard__key--caps');
              key.dataset.key = 'keyboard_capslock';
              break;

            case 'upgrade':
              key.dataset.key = 'upgrade';
              key.classList.add('keyboard__key--shift');
              break;

            case 'backspace':
              key.dataset.key = 'backspace';
              break;

            case 'keyboard_return':
              key.dataset.key = 'keyboard_return';
              break;

            case 'music_note':
              key.classList.add('keyboard__key--sound');
              break;

            case 'keyboard_voice':
              key.classList.add('keyboard__key--recognizer');
              break;

            default:
              break;
          }
        }
      } else {
        key.innerHTML = keyValue;
        key.dataset.key = properties.language;
      }

      if (~KEYS_FG1.findIndex((keyI) => keyI === keyValue)) {
        key.classList.add('keyboard__key--fg1');
      }

      addKeyboardKeyEventListener(key, keyValue, properties, setKeyLayout);
      addKeyboardKeyClickEffect(key);

      row.appendChild(key);
    });

    fragment.appendChild(row);
  });

  return fragment;
};
