import {
  BASE_COUNTRIES_ADDITIONAL_DATA_URL,
  BASE_COVID_API_URL,
  FETCH_COUNTRY_DAY_ONE_DATA_FAILED,
  FETCH_COUNTRY_DAY_ONE_DATA_REQUEST,
  FETCH_COUNTRY_DAY_ONE_DATA_SUCCESS,
  FETCH_COVID_CASES_FAILED,
  FETCH_COVID_CASES_REQUEST,
  FETCH_COVID_CASES_SUCCESS,
  totalCases,
  WORLD_DATE_STATISTICS_API_URL,
} from '@/constants';
import { createAction } from '@helpers';

export class APIHandler {
  constructor(state) {
    this.baseCovidApiURL = BASE_COVID_API_URL;
    this.baseCountriesAdditionalDataURL = BASE_COUNTRIES_ADDITIONAL_DATA_URL;
    this.baseWorldDateStatisticsURL = WORLD_DATE_STATISTICS_API_URL;
    this.state = state;
  }

  getSummaryCases = async () => {
    try {
      this.state.dispatch(createAction(FETCH_COVID_CASES_REQUEST));

      const covidResponseData = await fetch(`${this.baseCovidApiURL}/summary`);
      const covidSummary = await covidResponseData.json();

      const countriesAdditionalDataResponseData = await fetch(
        `${this.baseCountriesAdditionalDataURL}?fields=name;population;flag;alpha2Code;latlng`
      );
      const countriesAdditionalData = await countriesAdditionalDataResponseData.json();

      covidSummary.Countries = this._joinData(
        covidSummary,
        countriesAdditionalData
      );

      const worldDateStatisticsResponse = await fetch(
        `${this.baseWorldDateStatisticsURL}/historical/all?lastdays=366`
      );
      const worldDateStatisticsData = await worldDateStatisticsResponse.json();

      this.state.dispatch(
        createAction(FETCH_COVID_CASES_SUCCESS, {
          global: covidSummary.Global,
          countries: covidSummary.Countries.sort((a, b) =>
            a[totalCases] < b[totalCases] ? -1 : 1
          ),
          message: covidSummary.Message,
          worldDateStatistics: worldDateStatisticsData,
        })
      );
    } catch (e) {
      console.log(e);
      this.state.dispatch(createAction(FETCH_COVID_CASES_FAILED));
    }
  };

  getCountryDayOneData = async (country) => {
    try {
      this.state.dispatch(createAction(FETCH_COUNTRY_DAY_ONE_DATA_REQUEST));

      const responseCountryDayOneConfirmed = await fetch(
        `${this.baseCovidApiURL}/total/country/${country.CountryCode}/status/confirmed`
      );
      const countryDayOneConfirmedData = await responseCountryDayOneConfirmed.json();

      const responseCountryDayOneRecovered = await fetch(
        `${this.baseCovidApiURL}/total/country/${country.CountryCode}/status/recovered`
      );
      const countryDayOneRecoveredData = await responseCountryDayOneRecovered.json();

      const responseCountryDayOneDeaths = await fetch(
        `${this.baseCovidApiURL}/total/country/${country.CountryCode}/status/deaths`
      );
      const countryDayOneDeathsData = await responseCountryDayOneDeaths.json();

      this.state.dispatch(
        createAction(FETCH_COUNTRY_DAY_ONE_DATA_SUCCESS, {
          ...country,
          confirmed: countryDayOneConfirmedData,
          recovered: countryDayOneRecoveredData,
          deaths: countryDayOneDeathsData,
        })
      );
    } catch (e) {
      console.log(e);
      this.state.dispatch(createAction(FETCH_COUNTRY_DAY_ONE_DATA_FAILED));
    }
  };

  _joinData = ({ Countries }, countriesAdditionalData) =>
    Countries.map((country) => {
      const flagPopulationLatlng = countriesAdditionalData.find(
        ({ alpha2Code }) => alpha2Code === country.CountryCode
      );

      return {
        ...country,
        flag: flagPopulationLatlng && flagPopulationLatlng.flag,
        population: flagPopulationLatlng && flagPopulationLatlng.population,
        latlng: flagPopulationLatlng && flagPopulationLatlng.latlng,
      };
    });
}
