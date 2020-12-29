import { createElement } from '@helpers';

export class TestSection {
  constructor(parent, state) {
    this.state = state;
    this._createLayout(parent);
  }

  clearSection = () => {
    this.testSection.innerHTML = '';
  };

  render = () => {
    const loading = createElement(
      'p',
      null,
      null,
      JSON.stringify(this.state.getLoadingStatus())
    );
    const global = createElement(
      'p',
      null,
      null,
      JSON.stringify(this.state.getGlobalSummary())
    );
    const countries = createElement(
      'p',
      null,
      null,
      JSON.stringify(this.state.getCountries())
    );

    this.testSection.appendChild(loading);
    this.testSection.appendChild(global);
    this.testSection.appendChild(countries);
  };

  _createLayout = (parent) => {
    this.testSection = createElement('div');
    parent.appendChild(this.testSection);
  };
}
