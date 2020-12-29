export class Render {
  addSections = (sections) => (this.sections = sections);

  _clearPage = () => this.sections.forEach((section) => section.clearSection());

  rerender = () => {
    this._clearPage();
    this.sections.forEach((section) => section.render());
  };
}
