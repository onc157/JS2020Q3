import { onKeyboardInput } from '@/helpers/onKeyboardInput';

export const addKeyboardKeyEventListener = (
  key,
  value,
  properties,
  setKeyLayout
) => {
  const input = document.getElementById('searchInput');
  const onInput = (text) => onKeyboardInput(text, properties, setKeyLayout);

  const close = () => {
    properties.value = '';
    setTimeout(
      () =>
        document.getElementById('keyboard').classList.add('keyboard--hidden'),
      0
    );
  };

  switch (value) {
    case 'language':
      key.addEventListener('click', () => {
        properties.language = properties.language === 'en' ? 'ru' : 'en';
        properties.recognizer.lang =
          properties.language === 'en' ? 'en-US' : 'ru-RU';
        setTimeout(() => setKeyLayout(), 0);
      });
      break;

    case 'keyboard_capslock':
      key.addEventListener('click', () => {
        properties.capsLock = !properties.capsLock;
        key.classList.toggle('on');
        setTimeout(() => setKeyLayout(), 0);
      });
      break;

    case 'upgrade':
      key.addEventListener('click', () => {
        properties.shift = !properties.shift;
        key.classList.toggle('on');
        setTimeout(() => setKeyLayout(), 0);
      });
      break;

    case 'backspace':
      key.addEventListener('click', () => onInput('backspace'));
      break;

    case 'keyboard_return':
      key.addEventListener('click', () => onInput(''));
      break;

    case 'space_bar':
      key.addEventListener('click', () => onInput(' '));
      break;

    case 'keyboard_tab':
      key.addEventListener('click', () => onInput('    '));
      break;

    case 'keyboard_hide':
      key.addEventListener('click', () => close());
      break;

    case 'keyboard_arrow_left':
      key.addEventListener('click', () => {
        const start = input.selectionStart;
        input.focus();
        if (start > 0) input.setSelectionRange(start - 1, start - 1);
      });
      break;

    case 'keyboard_arrow_right':
      key.addEventListener('click', () => {
        const start = input.selectionStart;
        input.focus();
        if (start < properties.value.length)
          input.setSelectionRange(start + 1, start + 1);
      });
      break;

    case 'keyboard_arrow_down':
      key.addEventListener('click', () => {
        input.focus();
        input.setSelectionRange(
          properties.value.length,
          properties.value.length
        );
      });
      break;

    case 'keyboard_arrow_up':
      key.addEventListener('click', () => {
        input.focus();
        input.setSelectionRange(0, 0);
      });
      break;

    case 'keyboard_voice':
      key.addEventListener('click', () => {
        properties.isRecognizerOn = !properties.isRecognizerOn;
        key.classList.toggle('on');
        if (key.classList.contains('on')) {
          properties.recognizer.start();
        } else properties.recognizer.stop();
      });
      break;

    default:
      key.addEventListener('click', () => {
        onInput(key.innerText);
      });
      break;
  }
};
