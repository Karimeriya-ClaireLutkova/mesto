import Popup from "./Popup";

export default class PopupWithImage extends Popup {
  constructor(selectorPopup) {
    super(selectorPopup);
    this._imageViewCard = this._popup.querySelector('.popup__image');
    this._imageViewSubtitle = this._popup.querySelector('.popup__subtitle');
  }

  openPopup(link, title, name) {
    this.imageViewCard.src = link;
    this.imageViewCard.alt = title;
    this.imageViewSubtitle.textContent = name;
    super.openPopup();
  }
}