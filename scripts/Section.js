export default class Section {
  constructor({items, renderer}, selector) {
    this._initialArray = items;
    this._renderer = renderer;
    this._container = document.querySelector(selector);
  }

  addItem(item) {
    this._container.append(item);
  }

  renderItems() {
    this._initialArray.forEach((item) => {
      const cardElement = this._renderer(item);
      this.addItem(cardElement);
    })
  } 
}