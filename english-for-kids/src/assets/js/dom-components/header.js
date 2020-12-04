import create from '../utils/create';

const header = create('div', 'header-wrapper', [
  create('button', 'button-burger', '<span class="material-icons">api</span>'),
  create('button', 'button-slider', '<span class="material-icons">aspect_ratio</span>'),
]);

export { header as default };
