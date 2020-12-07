import create from '../utils/create';

export default function lose() {
  const elementText = create('div', 'lose-content__text', 'YOU LOSE');
  const elementContent = create('div', 'lose-content', elementText);
  const element = create('div', 'lose', elementContent);

  return {
    element,
    elementText,
  };
}
