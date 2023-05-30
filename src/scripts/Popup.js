export default class Popup {
  constructor(selectorPopup) {
    this._selector = selectorPopup;
    this._popup = document.querySelector(this._selector);
    this._buttonClosePopup = this._popup.querySelector('.popup__button_close');
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  openPopup() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  closePopup() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose(evt) {
    if(evt.key === 'Escape') {
      this.closePopup();
    }
  }

  setEventListeners() {
    this._buttonClosePopup.addEventListener('click', () => {
      this.closePopup();
    });
    this._popup.addEventListener('click', (evt) => {
      if(evt.target.classList.contains('popup')) {
        const elemTarget = evt.target;
        this.closePopup(elemTarget);
      }
    });
  }
}