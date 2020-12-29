import { createElement } from '@/helpers/createElement';
import { createAction } from '@/helpers/createAction';
import { RESET_CURRENT_COUNTRY } from '@/constants';
import { get100Cef } from '@/helpers/get100Cef';

export const showCountries = (
  countries,
  setCountries,
  countriesList,
  clearCountriesList,
  currentDataType,
  clearInput,
  state,
  api,
  filteredCountries
) => {
  const shownCountries = filteredCountries || countries;
  clearCountriesList();
  shownCountries.forEach((country) => {
    const itemFlag = createElement(
      'div',
      null,
      ['countries-wrapper-list__item--flag'],
      null,
      [
        createElement('img', null, null, null, null, [
          { name: 'src', value: `${country.flag}` },
        ]),
      ]
    );

    const itemName = createElement(
      'div',
      null,
      ['countries-wrapper-list__item--name'],
      `${country.Country}`
    );

    const itemStats = createElement(
      'div',
      null,
      ['countries-wrapper-list__item--cases'],
      `${(
        country[currentDataType] *
        (state.getIs100PopulationStat() ? get100Cef(country) : 1)
      ).toLocaleString('en-US', {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
      })}`
    );

    const countriesWrapperItem = createElement(
      'div',
      null,
      ['countries-wrapper-list__item'],
      null,
      [itemFlag, itemName, itemStats]
    );

    countriesWrapperItem.addEventListener('click', () => {
      clearInput();
      if (!state.getCurrentCountry().Country) {
        setCountries([country]);
        api.getCountryDayOneData(country);
      } else {
        setCountries(state.getCountries());
        state.dispatch(createAction(RESET_CURRENT_COUNTRY));
      }
    });

    countriesList.prepend(countriesWrapperItem);
  });
};
