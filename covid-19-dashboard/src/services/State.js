import {
  FETCH_COUNTRY_DAY_ONE_DATA_FAILED,
  FETCH_COUNTRY_DAY_ONE_DATA_REQUEST,
  FETCH_COUNTRY_DAY_ONE_DATA_SUCCESS,
  FETCH_COVID_CASES_FAILED,
  FETCH_COVID_CASES_REQUEST,
  FETCH_COVID_CASES_SUCCESS,
  RESET_CURRENT_COUNTRY,
  SET_CURRENT_COUNTRY,
  SET_STATISTIC_TYPE_POSITION,
  TOGGLE_IS_100_POPULATION,
  TOGGLE_IS_LAST_DAY_STAT,
} from '@/constants';
import { createAction } from '@helpers';

export class State {
  constructor(initialState, renderer) {
    this._state = initialState;
    this._renderer = renderer;
  }

  _reducer = (state, { type, payload }) => {
    switch (type) {
      case FETCH_COVID_CASES_SUCCESS:
        return {
          ...state,
          global: payload.global,
          countries: payload.countries,
          message: payload.message,
          isLoading: false,
          worldDateStatistics: payload.worldDateStatistics,
        };

      case FETCH_COVID_CASES_REQUEST:
        return {
          ...state,
          isLoading: true,
        };

      case FETCH_COVID_CASES_FAILED:
        return {
          ...state,
          isLoading: false,
        };

      case FETCH_COUNTRY_DAY_ONE_DATA_REQUEST:
        return {
          ...state,
          isLoading: true,
        };

      case FETCH_COUNTRY_DAY_ONE_DATA_SUCCESS:
        return {
          ...state,
          currentCountry: payload,
          isLoading: false,
        };

      case FETCH_COUNTRY_DAY_ONE_DATA_FAILED:
        return {
          ...state,
          isLoading: false,
        };

      case SET_CURRENT_COUNTRY:
        return {
          ...state,
          currentCountry: payload.currentCountry,
        };

      case RESET_CURRENT_COUNTRY:
        return {
          ...state,
          currentCountry: {},
        };

      case SET_STATISTIC_TYPE_POSITION:
        return {
          ...state,
          statisticTypePosition: payload.statisticTypePosition,
          isOneDayStat: payload.isOneDayStat,
          is100Population: payload.is100Population,
        };

      case TOGGLE_IS_LAST_DAY_STAT:
        return {
          ...state,
          isOneDayStat: !state.isOneDayStat,
        };

      case TOGGLE_IS_100_POPULATION:
        return {
          ...state,
          is100Population: !state.is100Population,
        };

      default:
        return state;
    }
  };

  updateState = (action) => {
    this._state = this._reducer(this._state, action);
  };

  dispatch = (action) => {
    this._state = this._reducer(this._state, action);
    this._renderer.rerender();
  };

  getCases = (location, caseType) => this._state[location][caseType];

  getCountrySummary = (country) =>
    this._state.find(({ Country }) => country === Country);

  getGlobalSummary = () => this._state.global;

  getCountries = () => [...this._state.countries];

  getLoadingStatus = () => this._state.isLoading;

  getIsLastDayStat = () => this._state.isOneDayStat;

  toggleIsLastDayStat = () =>
    this.dispatch(createAction(TOGGLE_IS_LAST_DAY_STAT));

  getIs100PopulationStat = () => this._state.is100Population;

  toggleIs100PopulationStat = () =>
    this.dispatch(createAction(TOGGLE_IS_100_POPULATION));

  getCurrentCountry = () => this._state.currentCountry;

  getStatisticTypePosition = () => this._state.statisticTypePosition;

  getWorldDateStatistics = () => this._state.worldDateStatistics;
}
