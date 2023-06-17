import Popup from './Popup.js';

export default class PopupWithConfirmation extends Popup {
  constructor(selectorPopup) {
    super(selectorPopup);
    this._buttonAccept = this._popup.querySelector('.popup__button_accept');
  }

  setEventListeners() {
    super.setEventListeners();
    this._buttonAccept.addEventListener('click', () => {
      this.closePopup();
    });
  }
}