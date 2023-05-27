export default class Section {
  constructor({items, renderer}, selectorContainer) {
    this._initialArray = items;
    this._renderer = renderer;
    this._container = document.querySelector(selectorContainer);
  }

  renderItems() {
    this._initialArray.forEach((item) => {
      const sequenceDeterminant = item.isCardPrimery;
      const cardElement = this._renderer(item);
      this.addItem(cardElement, sequenceDeterminant);
    })
  }
  
  addItem(item, sequenceDeterminant) {
    if (sequenceDeterminant === true) {
      this._container.append(item);
    } else {
      this._container.prepend(item);
    }
  }
}