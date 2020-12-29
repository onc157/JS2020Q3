import { createElement } from '@/helpers/createElement';
import {
  humanPopulation,
  lastDayCases,
  lastDayDeaths,
  lastDayRecovered,
  totalCases,
  totalDeaths,
  totalRecovered,
} from '@/constants';

const get100PopulationCoefficient = (locationData) =>
  100000 / (locationData.population || humanPopulation);

const getGlobalData = (type, is100PopulationStat, locationData) =>
  `${(
    locationData[type] *
    (is100PopulationStat ? get100PopulationCoefficient(locationData) : 1)
  ).toLocaleString('en-US', {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  })}${is100PopulationStat ? ` per 100K` : ''}`;

const getBlockMap = (location) => ({
  cases: {
    text: {
      true: `New ${location} Cases`,
      false: `Total ${location} Cases`,
    },
    data: {
      true: lastDayCases,
      false: totalCases,
    },
  },
  deaths: {
    text: {
      true: `New ${location} Deaths`,
      false: `Total ${location} Deaths`,
    },
    data: {
      true: lastDayDeaths,
      false: totalDeaths,
    },
  },
  recovered: {
    text: {
      true: `New ${location} Recovered`,
      false: `Total ${location} Recovered`,
    },
    data: {
      true: lastDayRecovered,
      false: totalRecovered,
    },
  },
});

const getLocationName = (locationData) => locationData.Country || `Global`;

export const getSummarySectionBlock = (
  blockName,
  locationData,
  is100PopulationStat,
  isLastDayStat
) => {
  const blockMap = getBlockMap(getLocationName(locationData));
  const casesBlock = createElement('div', null, [`${blockName}`]);

  const header = createElement(
    'p',
    null,
    null,
    `${blockMap[blockName].text[isLastDayStat]}`
  );

  const data = createElement(
    'span',
    null,
    null,
    `${getGlobalData(
      blockMap[blockName].data[isLastDayStat],
      is100PopulationStat,
      locationData
    )}`
  );

  casesBlock.appendChild(header);
  casesBlock.appendChild(data);

  return casesBlock;
};
