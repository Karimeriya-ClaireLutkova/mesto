export default class Section {
  constructor({renderer}, selectorContainer) {
    this._renderer = renderer;
    this._container = document.querySelector(selectorContainer);
  }

  renderItems(items) {
    items.forEach((item) => {
      const cardElement = this._renderer(item);
      this.addItem(cardElement);
    })
  }
 
  addItem(item) {
    this._container.prepend(item);
  }
}