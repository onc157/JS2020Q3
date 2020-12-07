import create from '../utils/create';

export default function header() {
  const modeSwitcher = create('div', 'mode-switcher', null);
  const playButton = create('div', 'button-play', 'PLAY');
  const trainButton = create('div', 'button-train', 'TRAIN');
  const sliderButton = create('div', 'button-slider', [trainButton, playButton, modeSwitcher]);
  const burgerButton = create('button', 'button-burger', '<span class="material-icons">menu</span>');
  const headerElement = create('div', 'header-wrapper', [burgerButton, sliderButton]);

  return {
    headerElement,
    burgerButton,
    modeSwitcher,
    sliderButton,
    trainButton,
    playButton,
  };
}
