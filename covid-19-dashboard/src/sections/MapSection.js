import { createElement, createMap, getSpinner } from '@helpers';
import Leaflet from 'leaflet';
import { Menu } from '@elements';

export class MapSection {
  constructor(wrapper, state, api) {
    this.state = state;
    this.menu = new Menu(state);
    this._createLayout(wrapper);
    this.map = null;
    this.api = api;
    this.loading = getSpinner();
    this.type = 0;
  }

  clearSection = () => {
    // lastDay or total
    // 100000 ?
    //
    if (this.map) {
      this.map.invalidateSize();
      if (this.state.getCurrentCountry().Country) {
        const bounds = Object.values(this.map._targets).filter(
          (item) =>
            item &&
            item.feature &&
            item.feature.properties &&
            item.feature.properties.ADMIN ===
              this.state.getCurrentCountry().Country
        );
        if (bounds) this.map.fitBounds(bounds[0]._bounds);
      } else {
        const bounds = new Leaflet.LatLngBounds(
          new Leaflet.LatLng(85, -180),
          new Leaflet.LatLng(-85, 180)
        );

        this.map.fitBounds(bounds);
      }
    }
  };

  render = () => {
    if (!this.state.getLoadingStatus()) {
      if (this.type !== this.state.getStatisticTypePosition()) {
        this.map.remove();
        this.map = createMap(this.state, this.api);

        this.type = this.state.getStatisticTypePosition();
      }

      this.menu.render();
    }

    if (!this.state.getLoadingStatus() && this.map === null) {
      const map = createElement('div', 'map', ['map']);

      this.mapSection.appendChild(map);
      this.map = createMap(this.state, this.api);
      this.mapSection.appendChild(this.menu.getMenu());
      this.menu.render();
    } else {
      this.mapSection.appendChild(this.loading);
    }
  };

  _createLayout = (wrapper) => {
    this.mapSection = createElement('div', null, ['map-section', 'light-mode']);
    this.mapSection.addEventListener('click', (e) => {
      if (!e.target.classList.contains('material-icons')) return;

      this.map.invalidateSize();
    });

    wrapper.appendChild(this.mapSection);
  };
}
