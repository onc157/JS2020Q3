import { createElement, initFooter } from '@helpers';
import { fullScreenButton } from '@elements';
import { State, APIHandler, Render } from '@services';
import { initialState } from '@/constants';
import {
  CountriesSection,
  GraphSection,
  MapSection,
  SummarySection,
} from '@/sections';

export class App {
  constructor() {
    this._createLayout();

    const renderer = new Render();
    const state = new State(initialState, renderer);
    const api = new APIHandler(state);

    const countriesSection = new CountriesSection(this.wrapper, state, api);
    const graphSection = new GraphSection(this.wrapper, state);
    const mapSection = new MapSection(this.wrapper, state, api);
    const summarySection = new SummarySection(this.wrapper, state);

    renderer.addSections([
      countriesSection,
      graphSection,
      mapSection,
      summarySection,
    ]);
    renderer.rerender();

    api.getSummaryCases();
  }

  _createLayout = () => {
    this.wrapper = createElement('div', null, ['wrapper']);
    fullScreenButton(this.wrapper);
    document.body.insertBefore(this.wrapper, document.body.firstChild);
    document.body.append(initFooter());
  };
}
