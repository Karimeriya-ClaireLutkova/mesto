class FormValidator {
  constructor(listValidation, formElement) {
    this._formElement = formElement;
    this._formSelector = listValidation.formSelector;
    this._inputSelector = listValidation.inputSelector;
    this._submitButtonSelector = listValidation.submitButtonSelector;
    this._inactiveButtonClass = listValidation.inactiveButtonClass;
    this._inputErrorClass = listValidation.inputErrorClass;
    this._errorClass = listValidation.errorClass;
    this._fieldClass = listValidation.fieldClass;
    this._fieldSelector = listValidation.fieldSelector;
    this._errorSelector = listValidation.errorSelector;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
  }

  enableValidation() {
    this._setEventListeners();
  }

  _setEventListeners() {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(inputElement);
        this._toggleButtonState();
      });
    })
  }

  _isValid(inputElement) {
    if (!inputElement.validity.valid) {
      const errorMessage = inputElement.validationMessage;
      this._showInputError(inputElement, errorMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    console.log(inputElement);
    inputElement.classList.add(this._inputErrorClass);
    const fieldElement = inputElement.parentElement;
    console.log(fieldElement);
    errorElement.textContent = errorMessage;
    this._increaseFormView(fieldElement);
    errorElement.classList.add(this._errorClass)
  }

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    const fieldElement = inputElement.parentElement;
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
    this._restoreSizeForm(fieldElement)
  }

  _increaseFormView (fieldElement) {
    fieldElement.classList.add(this._fieldClass);
  }
  
  _restoreSizeForm (fieldElement) {
    fieldElement.classList.remove(this._fieldClass);
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  };

  _toggleButtonState() {
    if (this._hasInvalidInput(this._inputList)) {
      this._buttonElement.classList.add(this._inactiveButtonClass);
      this._buttonElement.setAttribute('disabled', true);
    } else {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.removeAttribute('disabled');
    }
  };

  clearErrorFull () {
    const fieldsetList = Array.from(this._formElement.querySelectorAll(this._fieldSelector));
    fieldsetList.forEach((fieldSet) => {
      const inputElement = fieldSet.querySelector(this._inputSelector);
      this._hideInputError(inputElement);
    });
  }
  
  disableButtonSubmit () {
    this._buttonElement.classList.add(this._inactiveButtonClass);
    this._buttonElement.setAttribute('disabled', true);
  }
  
  enableButtonSubmit () {
    this._buttonElement.classList.remove(this._inactiveButtonClass);
    this._buttonElement.removeAttribute('disabled');
  }
}

const listValidation = ({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active',
  fieldClass: 'popup__field_type_error',
  fieldSelector: '.popup__field',
  errorSelector: '.popup__input-error'
});

const formPopupProfile = document.querySelector('.popup__form_type_profile');
export const validationPopupProfile = new FormValidator(listValidation, formPopupProfile);
validationPopupProfile.enableValidation();
const formPopupCardNew = document.querySelector('.popup__form_type_new-card');
export const validationPopupCardNew = new FormValidator(listValidation, formPopupCardNew);
validationPopupCardNew.enableValidation();