import create from './create';

export default function createStatisticsElement(currentArr, parent) {
  currentArr.forEach((elem) => {
    create('tr', 'statistics-table__body--row', [
      create('td', 'statistics-table__body--row-element', `${elem.group}`, parent),
      create('td', 'statistics-table__body--row-element', `${elem.word}`, parent),
      create('td', 'statistics-table__body--row-element', `${elem.translate}`, parent),
      create('td', 'statistics-table__body--row-element', `${elem.attempt}`, parent),
      create('td', 'statistics-table__body--row-element', `${elem.right}`, parent),
      create('td', 'statistics-table__body--row-element', `${elem.wrong}`, parent),
      create('td', 'statistics-table__body--row-element', `${elem.percent}`, parent),
    ], parent);
  });
}
