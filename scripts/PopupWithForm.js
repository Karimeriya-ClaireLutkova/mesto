import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor({selectorPopup, handleFormSubmit}) {
    super(selectorPopup);
    this._form = this._popup.querySelector('.popup__form');
    this._inputList = Array.from(this._form.querySelectorAll('.popup__input'));
    this._handleFormSubmit = handleFormSubmit;
    this._formValues = {};
  }

  _getInputValues() {
    this._inputList.forEach(input => {
      console.log(input);
      this._formValues[input.name] = input.value;
      console.log(this._formValues[input.name]);
    });
    return this._formValues;
  }

  openPopup() {
    super.openPopup();
  }

  closePopup() {
    this._form.reset();
    super.closePopup();
  }

  setEventListeners() {
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues())
      this.closePopup();
    });
    super.setEventListeners();
  }
}