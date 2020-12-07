import create from '../utils/create';

export default function win() {
  const elementText = create('div', 'win-content__text', 'YOU WIN');
  const elementContent = create('div', 'win-content', elementText);
  const element = create('div', 'win', elementContent);

  return {
    element,
    elementText,
  };
}
