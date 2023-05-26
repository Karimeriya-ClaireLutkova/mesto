export default class Section {
  constructor({items, renderer}, selector) {
    this._initialArray = items;
    this._renderer = renderer;
    this._container = document.querySelector(selector);
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
      console.log(sequenceDeterminant);
      this._container.append(item);
    } else {
      this._container.prepend(item);
      console.log(sequenceDeterminant);
    }
  }
}