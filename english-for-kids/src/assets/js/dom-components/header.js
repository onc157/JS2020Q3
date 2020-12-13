import create from '../utils/create';
import burger from './burger';

export default function header() {
  const modeSwitcher = create('div', 'mode-switcher', null);
  const playButton = create('div', 'button-play', 'PLAY');
  const trainButton = create('div', 'button-train', 'TRAIN');
  const sliderButton = create('div', 'button-slider', [trainButton, playButton, modeSwitcher]);
  const { burgerBtn: burgerButton } = burger();
  const headerElement = create('div', 'header-wrapper section-outer', [burgerButton, sliderButton]);

  return {
    headerElement,
    burgerButton,
    modeSwitcher,
    sliderButton,
    trainButton,
    playButton,
  };
}
