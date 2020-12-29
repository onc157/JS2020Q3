import Leaflet from 'leaflet';
import {
  mapboxAccessToken,
  RESET_CURRENT_COUNTRY,
  statisticTypesData,
} from '@/constants';
import { createAction } from '@/helpers/createAction';
import { getColor } from '@/helpers/getColor';

const polygons = require('../sections/countries.json');

export const createMap = (state, api) => {
  const bounds = new Leaflet.LatLngBounds(
    new Leaflet.LatLng(85, -180),
    new Leaflet.LatLng(-85, 180)
  );

  const map = Leaflet.map('map', {
    center: bounds.getCenter(),
    minZoom: 2,
    maxBounds: bounds,
    maxBoundsViscosity: 0.8,
  });

  Leaflet.tileLayer(
    `https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${mapboxAccessToken}`,
    {
      id: 'mapbox/light-v10',
      attribution: '',
      tileSize: 512,
      zoomOffset: -1,
    }
  ).addTo(map);

  map.fitBounds(bounds, { padding: [100, 100] });
  map.on('resize', () =>
    map.fitBounds(bounds, { reset: true, padding: [100, 100] })
  );

  const getCountry = (country) =>
    state.getCountries().find(({ Country }) => country === Country);

  const getCases = (countryName, type) => {
    const country = getCountry(countryName);

    return country ? country[type] : -1;
  };

  const style = (poly) => {
    const country = poly.properties.ADMIN;
    const type = statisticTypesData[state.getStatisticTypePosition()][1];
    const cases = getCases(country, type);

    return {
      fillColor: getColor(cases),
      interactive: true,
      weight: 1,
      opacity: 1,
      color: 'white',
      dashArray: '2',
      fillOpacity: 0.7,
    };
  };

  // Events

  let geojson;

  const info = Leaflet.control();
  info.onAdd = function addInfo() {
    this._div = Leaflet.DomUtil.create('div', 'info');
    this.update();

    return this._div;
  };

  info.update = function updateInfo(props) {
    if (!props) {
      this._div.innerHTML = '<h4>Hover over a country</h4>';
      return;
    }

    const country = props.ADMIN;
    const data = getCountry(country) || {};
    let total;
    let deaths;
    let recovered;

    const {
      Date: updated,
      TotalConfirmed,
      TotalDeaths,
      TotalRecovered,
      population,
      NewConfirmed,
      NewDeaths,
      NewRecovered,
    } = data;

    if (state.getIs100PopulationStat() && !state.getIsLastDayStat()) {
      total = population
        ? (100000 / (population / TotalConfirmed)).toFixed(2)
        : population;
      deaths = population
        ? (100000 / (population / TotalDeaths)).toFixed(2)
        : population;
      recovered = population
        ? (100000 / (population / TotalRecovered)).toFixed(2)
        : population;
    } else if (!state.getIs100PopulationStat() && state.getIsLastDayStat()) {
      total = NewConfirmed;
      deaths = NewDeaths;
      recovered = NewRecovered;
    } else if (state.getIs100PopulationStat() && state.getIsLastDayStat()) {
      total = population
        ? (100000 / (population / NewConfirmed)).toFixed(2)
        : population;
      deaths = population
        ? (100000 / (population / NewDeaths)).toFixed(2)
        : population;
      recovered = population
        ? (100000 / (population / NewRecovered)).toFixed(2)
        : population;
    } else {
      total = TotalConfirmed;
      deaths = TotalDeaths;
      recovered = TotalRecovered;
    }

    const updatedFormatted = updated
      ? new Date(updated).toLocaleString()
      : 'No Data';

    this._div.innerHTML = country
      ? `
        <h3>${country}</h3>
        <h4>Confirmed: ${total || 'No Data'}</h4>
        <h4>Deaths: ${deaths || 'No Data'}</h4>
        <h4>Recovered: ${recovered || 'No Data'}</h4>
        <h4>Last Update: ${updatedFormatted}</h4>
      `
      : 'Hover over a country';
  };

  info.addTo(map);

  const highlightFeature = (e) => {
    const layer = e.target;

    layer.setStyle({
      weight: 1,
      color: '#bada55',
      dashArray: '',
      fillOpacity: 0.7,
    });

    info.update(layer.feature.properties);
  };

  const resetHighlight = (e) => {
    geojson.resetStyle(e.target);
    info.update();
  };

  const zoomToFeature = (e) => {
    const countryClick = e.target.feature.properties.ADMIN;

    if (
      !state.getCurrentCountry().Country ||
      state.getCurrentCountry().Country !== countryClick
    ) {
      api.getCountryDayOneData(getCountry(countryClick));
    } else {
      state.dispatch(createAction(RESET_CURRENT_COUNTRY));
      // return map.flyToBounds(bounds);
    }
    // return map.flyToBounds(e.target.getBounds());
  };

  const onEachFeature = (feature, layer) => {
    layer.on({
      mouseover: highlightFeature,
      mouseout: resetHighlight,
      click: zoomToFeature,
    });
  };

  // legend

  const legend = Leaflet.control({ position: 'bottomright' });
  legend.onAdd = () => {
    const div = Leaflet.DomUtil.create('div', 'info legend');
    const grades = [0, 100, 1000, 10000, 100000, 1000000, 10000000];

    for (let i = 0; i < grades.length; i += 1) {
      div.innerHTML += `<p><i style="background: ${getColor(
        grades[i] + 1
      )}"></i><span>${grades[i]} ${
        grades[i + 1] ? `&ndash; ${grades[i + 1]}` : '+'
      }</span></p>`;
    }

    return div;
  };

  legend.addTo(map);

  geojson = Leaflet.geoJson(polygons, { style, onEachFeature }).addTo(map);

  return map;
};
