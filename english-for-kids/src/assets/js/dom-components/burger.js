import create from '../utils/create';

const burger = create('div', 'burger-wrapper', [
  create('div', 'burger-header'),
  create('div', 'burger-main', [
    create('nav', 'burger-list', [
      create('li', 'burger-list__item', 'Main'),
      create('li', 'burger-list__item', 'Actions'),
      create('li', 'burger-list__item', 'Animals'),
      create('li', 'burger-list__item', 'Clothes'),
      create('li', 'burger-list__item', 'Emotions'),
      create('li', 'burger-list__item', 'Food'),
      create('li', 'burger-list__item', 'Places'),
      create('li', 'burger-list__item', 'Sport'),
      create('li', 'burger-list__item', 'Transport'),
      create('li', 'burger-list__item', 'Statistics'),
    ]),
  ]),
]);

export { burger as default };
