import { createAction, createElement } from '@helpers';
import { SET_STATISTIC_TYPE_POSITION, statisticTypesData } from '@/constants';

export class Menu {
  constructor(state) {
    this.state = state;
    this.statisticTypePosition = this.state.getStatisticTypePosition();
    this._createMenu();
    this._addListeners();
  }

  _createMenu = () => {
    this.statisticsButtonLeft = createElement(
      'button',
      'menuButtonLeft',
      ['control-wrapper__left'],
      '<span class="material-icons">navigate_before</span>'
    );

    this.statisticsDisplay = createElement(
      'div',
      null,
      ['control-wrapper__display'],
      `${statisticTypesData[this.state.getStatisticTypePosition()][0]}`
    );

    this.statisticsButtonRight = createElement(
      'button',
      'menuButtonRight',
      ['control-wrapper__right'],
      '<span class="material-icons">keyboard_arrow_right</span>'
    );

    this.controlWrapper = createElement(
      'div',
      null,
      ['control-wrapper'],
      null,
      [
        this.statisticsButtonLeft,
        this.statisticsDisplay,
        this.statisticsButtonRight,
      ]
    );
  };

  render = () => {
    this.statisticTypePosition = this.state.getStatisticTypePosition();
    [this.statisticsDisplay.innerHTML] = statisticTypesData[
      this.statisticTypePosition
    ];
  };

  _addListeners = () => {
    [this.statisticsButtonLeft, this.statisticsButtonRight].forEach((button) =>
      button.addEventListener('click', (e) => {
        e.stopPropagation();
        document.getElementById('searchInput').value = '';
        const option =
          e.target.closest('button').id === 'menuButtonLeft' ? 'prev' : 'next';
        this._changeStatisticsOptions(option);
      })
    );
  };

  _changeStatisticsOptions = (option) => {
    this._setOptionsCounter(option);
    const flagsStatus = this._getFlagsStatuses();
    this.state.dispatch(
      createAction(SET_STATISTIC_TYPE_POSITION, {
        statisticTypePosition: this.statisticTypePosition,
        isOneDayStat: flagsStatus.isOneDayStat,
        is100Population: flagsStatus.is100Population,
      })
    );
  };

  _setOptionsCounter = (option) => {
    if (option === 'prev') {
      this.statisticTypePosition = !this.statisticTypePosition
        ? statisticTypesData.length - 1
        : (this.statisticTypePosition -= 1);
    } else {
      this.statisticTypePosition =
        this.statisticTypePosition === statisticTypesData.length - 1
          ? 0
          : (this.statisticTypePosition += 1);
    }
  };

  _getFlagsStatuses = () => {
    const position = this.statisticTypePosition;
    switch (position) {
      case 0:
      case 1:
      case 2:
        return {
          isOneDayStat: false,
          is100Population: false,
        };

      case 3:
      case 4:
      case 5:
        return {
          isOneDayStat: true,
          is100Population: false,
        };

      case 6:
      case 7:
      case 8:
        return {
          isOneDayStat: false,
          is100Population: true,
        };

      default:
        return {
          isOneDayStat: true,
          is100Population: true,
        };
    }
  };

  getMenu = () => this.controlWrapper;
}
