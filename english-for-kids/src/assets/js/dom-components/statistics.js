import create from '../utils/create';

const specialItems = ['Category', 'Word', 'Translate', 'Attempt', 'Right', 'Wrong', '%'];

export default function lose() {
  const statisticsBody = create('tbody', 'statistics-table__body', null);
  const statisticsTitle = create('tr', 'statistics-table__header', [
  ]);
  specialItems.forEach((elem) => {
    create('th', 'statistics-table__header--element', `${elem}`, statisticsTitle);
  });
  const statistics = create('table', 'statistics-table', [statisticsTitle, statisticsBody]);
  const resetButton = create('button', 'button__reset', 'Reset score');
  const repeatButton = create('button', 'button__repeat', 'Repeat words');
  const statisticsButtons = create('div', 'statistics-buttons', [repeatButton, resetButton]);
  const statisticsElement = create('div', 'statistics-wrapper section-outer', [statisticsButtons, statistics]);

  return {
    statisticsElement,
    statisticsBody,
    repeatButton,
    resetButton,
  };
}
