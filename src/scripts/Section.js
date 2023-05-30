export default class Section {
  constructor({items, renderer}, selectorContainer) {
    this._initialArray = items;
    this._renderer = renderer;
    this._container = document.querySelector(selectorContainer);
  }

  renderItems() {
    this._initialArray.forEach((item) => {
      const cardElement = this._renderer(item);
      this.addItem(cardElement);
    })
  }
  
  addItem(item) {
    this._container.prepend(item);
  }
}