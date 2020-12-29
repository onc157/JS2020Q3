import { humanPopulation } from '@/constants';

export const get100Cef = (locationData) =>
  100000 / (locationData.population || humanPopulation);
