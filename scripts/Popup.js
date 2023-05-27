export default class Popup {
  constructor(selectorPopup) {
    this._selector = selectorPopup;
    this._popup = document.querySelector(this._selector);
    this._buttonClosePopup = this._popup.querySelector('.popup__button_close');
  }

  openPopup() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this.closePopup);
  }

  closePopup() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this.closePopup);
  }

  _handleEscClose(evt) {
    if(evt.key === 'Escape') {
      this.closePopup();
    }
  }

  setEventListeners() {
    this._buttonClosePopup.addEventListener('click', this.closePopup);
    this._popup.addEventListener('click', this.closePopup);
  }
}