import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor({selectorPopup, handleFormSubmit}) {
    super(selectorPopup);
    this._form = this._popup.querySelector('.popup__form');
    this._inputList = this._form.querySelectorAll('.popup__input');
    this._handleFormSubmit = handleFormSubmit;
    this._formValues = {};
  }

  _getInputValues() {
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
      console.log(this._formValues)
    });    
    console.log(this._formValues);
    return this._formValues;
  }
  
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', function(evt) {
      evt.preventDefault();
      this._handleFormSubmit();
    });
  }

  openPopup() {
    super.openPopup();
  }

  closePopup() {
    super.closePopup();
    this._form.reset();
  }
}