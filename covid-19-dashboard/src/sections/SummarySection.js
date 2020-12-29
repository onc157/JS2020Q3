import { createElement, getSummarySectionBlock, getSpinner } from '@helpers';
import { Menu } from '@elements';

export class SummarySection {
  constructor(wrapper, state) {
    ({
      getLoadingStatus: this._getLoadingStatus,
      getGlobalSummary: this._getGlobalSummary,
      getCountries: this._getCountries,
      getIsLastDayStat: this._getIsLastDayStat,
      getCurrentCountry: this._getCurrentCountry,
      getIs100PopulationStat: this._getIs100PopulationStat,
    } = state);

    this.menu = new Menu(state);
    this.loading = getSpinner();
    this._createLayout(wrapper);
  }

  clearSection = () => {
    this.summarySectionWrapper.innerHTML = '';
  };

  render = () => {
    if (!this._getLoadingStatus()) {
      this._renderDataBlocks();
      this.summarySection.appendChild(this.menu.getMenu());
      this.menu.render();
    } else {
      this.summarySectionWrapper.appendChild(this.loading);
    }
  };

  _createLayout = (wrapper) => {
    this.summarySectionWrapper = createElement('div', null, [
      'summary-section-wrapper',
      'light-mode',
    ]);
    this.summarySection = createElement(
      'div',
      null,
      ['summary-section', 'light-mode'],
      null,
      [this.summarySectionWrapper]
    );
    wrapper.appendChild(this.summarySection);
  };

  _getBlockLocationData = () =>
    this._getCurrentCountry().Country
      ? this._getCurrentCountry()
      : this._getGlobalSummary();

  _renderDataBlocks = () => {
    ['cases', 'recovered', 'deaths'].forEach((blockName) => {
      const block = getSummarySectionBlock(
        blockName,
        this._getBlockLocationData(),
        this._getIs100PopulationStat(),
        this._getIsLastDayStat()
      );
      this.summarySectionWrapper.appendChild(block);
    });
  };
}
