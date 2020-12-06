import create from '../utils/create';

export default function footer() {
  const footerRating = create('div', 'footer-rating', null);
  const footerButton = create('button', 'footer-button', 'START GAME');
  const footerElement = create('div', 'footer-wrapper', [footerButton, footerRating]);

  return {
    footerElement,
    footerButton,
    footerRating,
  };
}
