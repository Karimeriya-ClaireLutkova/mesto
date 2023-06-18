import Popup from './Popup.js';

export default class PopupWithConfirmation extends Popup {
  constructor({selectorPopup, handleFormSubmit}) {
    super(selectorPopup);
    this._buttonAccept = this._popup.querySelector('.popup__button_accept');
    this._handleFormSubmit = handleFormSubmit;
    this._formAccept = this._formAccept.bind(this);
  }

  getCard(item) {
    this._data = item;
    this._formAccept(this._data)
  }

  _formAccept() {
    this._handleFormSubmit(this._data);
  }

  setEventListeners() {
    super.setEventListeners();
    this._buttonAccept.addEventListener('click', this._formAccept);
  }
}