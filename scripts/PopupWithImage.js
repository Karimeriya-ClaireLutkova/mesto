import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(selectorPopup) {
    super(selectorPopup);
    this._imageViewCard = this._popup.querySelector('.popup__image');
    this._imageViewSubtitle = this._popup.querySelector('.popup__subtitle');
  }

  openPopup(link, title, name) {
    this._imageViewCard.src = link;
    this._imageViewCard.alt = title;
    this._imageViewSubtitle.textContent = name;
    super.openPopup();
  }
}