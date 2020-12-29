import { createElement, get100Cef, getSpinner, showCountries } from '@helpers';
import { statisticTypesData } from '@/constants';
import { initElements } from '@helpers/initElements';
import { Keyboard, Menu } from '@elements';

export class CountriesSection {
  constructor(wrapper, state, api) {
    this.state = state;
    this.api = api;
    this.menu = new Menu(state);
    this.loading = getSpinner();
    this.titleSortMultiplier = 1;
    this.searchWord = '';
    this.countries = null;

    ({
      searchInput: this.searchInput,
      cancelButton: this.cancelButton,
      countriesTitleName: this.countriesTitleName,
      countriesTitleCases: this.countriesTitleCases,
      countriesList: this.countriesList,
      searchWrapper: this.searchWrapper,
      countriesWrapper: this.countriesWrapper,
    } = initElements());

    this._createLayout(wrapper);
    this.keyboard = new Keyboard(this.searchInput);
    this._addListener();
  }

  clearSection = () => {
    this.countriesList.innerHTML = '';
    this.countriesSectionWrapper.innerHTML = '';
  };

  _clearCountriesList = () => {
    this.countriesList.innerHTML = '';
  };

  render = () => {
    if (!this.state.getLoadingStatus()) {
      if (this._isUpdateNeeded()) {
        this._setSectionCountries();
      }
      this._setCurrentDataType();
      this._prependElem();
      this._showCountries();
      this.menu.render();
      this._setCountriesTitleCases();
    } else {
      this._prependElem();
      this.countriesList.appendChild(this.loading);
      this.menu.render();
    }
  };

  _createLayout = (wrapper) => {
    this.countriesSectionWrapper = createElement('div', null, [
      'countries-section-wrapper',
      'light-mode',
    ]);
    this.countriesSection = createElement(
      'div',
      null,
      ['countries-section'],
      null,
      [this.countriesSectionWrapper]
    );

    wrapper.appendChild(this.countriesSection);
  };

  _prependElem = () => {
    this.countriesSectionWrapper.prepend(
      this.searchWrapper,
      this.countriesWrapper,
      this.menu.getMenu()
    );
  };

  _addListener = () => {
    this.searchInput.addEventListener('input', (e) => {
      this.searchWord = e.target.value;
      this._filterCountries(this.searchWord.toLowerCase());
    });

    this.cancelButton.addEventListener('click', () => {
      this.searchInput.value = '';
      this._showCountries();
    });

    this.countriesTitleName.addEventListener('click', () =>
      this._sortTitles('Country')
    );

    this.countriesTitleCases.addEventListener('click', () =>
      this._sortTitles(
        this.currentDataType,
        this.state.getIs100PopulationStat()
      )
    );
  };

  _showCountries(filteredCountries) {
    showCountries(
      this.countries,
      this._setCountries,
      this.countriesList,
      this._clearCountriesList,
      this.currentDataType,
      this._clearInput,
      this.state,
      this.api,
      filteredCountries
    );
  }

  _sortTitles = (sortField, is100Cef = false) => {
    this.titleSortMultiplier *= -1;
    this.countries.sort((a, b) => {
      const leftHand = !is100Cef ? a[sortField] : a[sortField] * get100Cef(a);
      const RightHand = !is100Cef ? b[sortField] : b[sortField] * get100Cef(b);
      return leftHand < RightHand
        ? this.titleSortMultiplier * -1
        : this.titleSortMultiplier;
    });

    this._showCountries(this.countries, this.currentDataType);
  };

  _filterCountries = (word) => {
    const filteredCounties = this.countries.filter((elem) =>
      elem.Country.toLowerCase().includes(word)
    );
    this._showCountries(filteredCounties);
  };

  _setCurrentDataType = () =>
    ([this.currentDataTitle, this.currentDataType] = statisticTypesData[
      this.state.getStatisticTypePosition()
    ]);

  _setCountriesTitleCases = () =>
    (this.countriesTitleCases.innerHTML = this.currentDataTitle);

  _setSectionCountries = () =>
    (this.countries = !this.state.getCurrentCountry().Country
      ? this.state.getCountries()
      : [this.state.getCurrentCountry()]);

  _setCountries = (countriesArray) => (this.countries = countriesArray);

  _clearInput = () => (this.searchInput.value = '');

  _isUpdateNeeded = () =>
    !this.countries ||
    (this.state.getCurrentCountry().Country && this.countries.length > 1) ||
    (!this.state.getCurrentCountry().Country && this.countries.length === 1) ||
    this.state.getCurrentCountry().Country !== this.countries[0].Country;
}
