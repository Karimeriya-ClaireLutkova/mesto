/*const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(enableValidation.inputErrorClass);
  const fieldElement = inputElement.parentElement;
  errorElement.textContent = errorMessage;
  increaseFormView(fieldElement);
  errorElement.classList.add(enableValidation.errorClass)
};

function increaseFormView (formElement) {
  formElement.classList.add(enableValidation.fieldClass);
}

function restoreSizeForm (formElement) {
  formElement.classList.remove(enableValidation.fieldClass);
}

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  const fieldElement = inputElement.parentElement;
  inputElement.classList.remove(enableValidation.inputErrorClass);
  errorElement.classList.remove(enableValidation.errorClass);
  errorElement.textContent = '';
  restoreSizeForm(fieldElement)
};

function clearErrorFull (item) {
  const formPopup = item.querySelector(enableValidation.formSelector);
  const fieldsetList = Array.from(formPopup.querySelectorAll(enableValidation.fieldSelector));
  fieldsetList.forEach((fieldSet) => {
    const inputElement = fieldSet.querySelector(enableValidation.inputSelector);
    hideInputError(fieldSet, inputElement);
  });
}

function disableButtonSubmit (item) {
  const formPopup = item.querySelector(enableValidation.formSelector);
  const buttonElement = formPopup.querySelector(enableValidation.submitButtonSelector);
  buttonElement.classList.add(enableValidation.inactiveButtonClass);
  buttonElement.setAttribute('disabled', true);
}

function enableButtonSubmit (item) {
  const formPopup = item.querySelector(enableValidation.formSelector);
  const buttonElement = formPopup.querySelector(enableValidation.submitButtonSelector);
  buttonElement.classList.remove(enableValidation.inactiveButtonClass);
  buttonElement.removeAttribute('disabled');
}

const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(enableValidation.inactiveButtonClass);
    buttonElement.setAttribute('disabled', true);
  } else {
    buttonElement.classList.remove(enableValidation.inactiveButtonClass);
    buttonElement.removeAttribute('disabled');
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(enableValidation.inputSelector));
  const buttonElement = formElement.querySelector(enableValidation.submitButtonSelector);
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      isValid(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const runValidation = () => {
  const formPopup = Array.from(document.querySelectorAll(enableValidation.formSelector));
  formPopup.forEach((fieldSet) => {
    setEventListeners(fieldSet);
  });
};

const enableValidation = ({
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

runValidation(enableValidation);*/

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
const validationPopupProfile = new FormValidator(listValidation, formPopupProfile);
validationPopupProfile.enableValidation();
const formPopupCardNew = document.querySelector('.popup__form_type_new-card');
const validationPopupCardNew = new FormValidator(listValidation, formPopupCardNew);
validationPopupCardNew.enableValidation();