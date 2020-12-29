import { createElement, get100Cef, getSpinner } from '@helpers';

import Chart from 'chart.js';
import { Menu } from '@elements';
import { statisticTypesData } from '@/constants';

export class GraphSection {
  constructor(wrapper, state) {
    this.state = state;
    this._createLayout(wrapper);
    this.loading = getSpinner();
    this.menu = new Menu(state);
  }

  clearSection = () => {
    this.graphSectionWrapper.innerHTML = '';
  };

  render = () => {
    if (!this.state.getLoadingStatus()) {
      this.menu.render();
      [
        ,
        this.currentDataType,
        this.countryDataType,
        this.globalDataType,
      ] = statisticTypesData[this.state.getStatisticTypePosition()];

      if (!this.state.getCurrentCountry().Country) {
        this._getWorldStats();

        const { cases } = this.state.getWorldDateStatistics(); // TODO: Delete this element

        this.arrDateOfCountries = Object.keys(cases);
      } else {
        this._getCurrentCountryStats();
      }

      this._initElement();
      this._initGraph();
    } else {
      this.graphSectionWrapper.appendChild(this.loading);
    }
  };

  _createLayout = (wrapper) => {
    this.graphSectionWrapper = createElement('div', null, [
      'countries-section-wrapper',
      'light-mode',
    ]);
    this.graphSection = createElement('div', null, ['graph-section'], null, [
      this.graphSectionWrapper,
    ]);

    wrapper.appendChild(this.graphSection);
  };

  _getWorldStats = () => {
    this.objDataStats = this.state.getWorldDateStatistics()[
      this.globalDataType
    ];
    if (!this.state.getIsLastDayStat()) {
      this.dataStats = Object.keys(this.objDataStats).map(
        (key) =>
          +(
            this.objDataStats[key] *
            (this.state.getIs100PopulationStat()
              ? get100Cef(this.state.getGlobalSummary())
              : 1)
          ).toFixed(2)
      );
    } else {
      this.dataStats = Object.keys(this.objDataStats)
        .map(
          (key) =>
            this.objDataStats[key] *
            (this.state.getIs100PopulationStat()
              ? get100Cef(this.state.getGlobalSummary())
              : 1)
        )
        .reduce(
          (acc, casesData, i, arr) =>
            !i
              ? [casesData]
              : [
                  ...acc.concat(
                    Math.abs(arr[i] - arr[i - 1]) > 2000000
                      ? 365254
                      : +Math.abs(arr[i] - arr[i - 1]).toFixed(2)
                  ),
                ],
          []
        );
    }
  };

  _getCurrentCountryStats() {
    this.objDataStats = this.state.getCurrentCountry()[this.countryDataType];

    if (!this.state.getIsLastDayStat()) {
      this.dataStats = this.objDataStats.map(
        (elem) =>
          +(
            elem.Cases *
            (this.state.getIs100PopulationStat()
              ? get100Cef(this.state.getGlobalSummary())
              : 1)
          ).toFixed(2)
      );
    } else {
      this.dataStats = this.objDataStats
        .map(
          (elem) =>
            elem.Cases *
            (this.state.getIs100PopulationStat()
              ? get100Cef(this.state.getGlobalSummary())
              : 1)
        )
        .reduce(
          (acc, casesData, i, arr) =>
            !i
              ? [casesData]
              : [
                  ...acc.concat(
                    Math.abs(arr[i] - arr[i - 1]) > 2000000
                      ? 365254
                      : +Math.abs(arr[i] - arr[i - 1]).toFixed(2)
                  ),
                ],
          []
        );
    }
  }

  _initElement = () => {
    const myChart = createElement('canvas', 'myChart', null, null, null);
    const container = createElement(
      'div',
      null,
      ['container'],
      null,
      [myChart],
      [
        {
          name: 'style',
          value: 'height:90%; width:90%',
        },
      ]
    );

    this.graphSectionWrapper.prepend(container, this.menu.getMenu());
  };

  _initGraph = () => {
    const myChart = document.getElementById('myChart').getContext('2d');

    new Chart(myChart, {
      type: 'bar',
      data: {
        labels: this.arrDateOfCountries,
        datasets: [
          {
            data: this.dataStats,
            backgroundColor: '#005d97',
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        scales: {
          xAxes: [
            {
              ticks: {
                display: false,
              },
              gridLines: {
                display: false,
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                callback(value) {
                  if (value > 999999) {
                    return `${value / 1e6}M`;
                  }
                  if (value > 999) {
                    return `${value / 1e3}k`;
                  }
                  return value;
                },
                maxTicksLimit: 5,
                fontColor: '#fff',
                // stepSize: 100,
                // display: false,
              },
              gridLines: {
                display: false,
              },
            },
          ],
        },
      },
    });
  };
}
