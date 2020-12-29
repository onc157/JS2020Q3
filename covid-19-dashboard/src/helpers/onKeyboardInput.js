const event = new Event('input', {
  bubbles: true,
  cancelable: true,
});

export const onKeyboardInput = (text, properties, setKeyLayout) => {
  const input = document.getElementById('searchInput');
  const keyboard = document.getElementById('keyboard');

  if (input.value === properties.value) {
    const start = input.selectionStart;
    const end = input.selectionEnd;
    const { length } = input.value;

    if (length > start) {
      properties.restValue = properties.value.substring(end, length);
      properties.value = properties.value.substring(0, start);
    }

    if (text === 'backspace') {
      properties.value = properties.value.substring(
        0,
        properties.value.length - 1
      );
    } else properties.value += text;

    input.value = properties.value + properties.restValue;
    properties.restValue = '';

    if (properties.shift) {
      properties.shift = false;
      setKeyLayout();
      keyboard.querySelector('.keyboard__key--shift').classList.remove('on');
    }
    input.focus();
    const position = start + (text === 'backspace' ? -1 : text.length);
    input.setSelectionRange(position, position);
    input.dispatchEvent(event);
  } else {
    properties.value = input.value;
    onKeyboardInput(text, properties, setKeyLayout);
  }
};
