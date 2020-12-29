import { createElement } from '@/helpers/createElement';

export const initElements = () => {
  const searchInput = createElement(
    'input',
    'searchInput',
    ['search-wrapper__input'],
    null,
    null,
    [
      { name: 'type', value: 'text' },
      { name: 'placeholder', value: 'Enter country name' },
    ]
  );

  const openKeyboardButton = createElement(
    'div',
    'openKeyboardButton',
    null,
    `<i class="material-icons">keyboard</i>`
  );

  openKeyboardButton.addEventListener('click', () =>
    document.getElementById('keyboard').classList.toggle('keyboard--hidden')
  );

  const cancelButton = createElement(
    'button',
    null,
    ['search-wrapper__button'],
    '<span class="material-icons"> cancel </span>'
  );

  const searchWrapper = createElement('div', null, ['search-wrapper'], null, [
    openKeyboardButton,
    searchInput,
    cancelButton,
  ]);

  const countriesTitleName = createElement(
    'div',
    null,
    ['countries-wrapper-title__name'],
    'Countries'
  );

  const countriesTitleCases = createElement(
    'div',
    null,
    ['countries-wrapper-title__cases'],
    'All cases'
  );

  const countriesTitles = createElement(
    'div',
    null,
    ['countries-wrapper-title'],
    null,
    [countriesTitleName, countriesTitleCases]
  );

  const countriesList = createElement('div', null, ['countries-wrapper-list']);

  const countriesWrapper = createElement(
    'div',
    null,
    ['countries-wrapper'],
    null,
    [countriesTitles, countriesList]
  );

  return {
    searchInput,
    cancelButton,
    openKeyboardButton,
    countriesTitleName,
    countriesTitleCases,
    countriesList,
    searchWrapper,
    countriesWrapper,
  };
};
