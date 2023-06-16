import Popup from './Popup.js';

export default class PopupWithConfirmation extends Popup {
  constructor(selectorPopup) {
    super(selectorPopup);
    this._form = this._popup.querySelector('.popup__container');
  }

  openPopup() {
    super.openPopup();
  }

  closePopup() {
    super.closePopup();
  }

  setEventListeners() {
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.closePopup();
    });
    super.setEventListeners();
  }
}