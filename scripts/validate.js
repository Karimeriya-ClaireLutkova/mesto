const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(enableValidation.inputErrorClass);
  errorElement.textContent = errorMessage;
  increaseFormView (formElement);  
  errorElement.classList.add(enableValidation.errorClass)
};

function increaseFormView (formElement) {
  formElement.classList.add(enableValidation.fieldClass);
 }

function restoreSizeForm (formElement) {
  formElement.classList.remove(enableValidation.fieldClass);
}

function clearErrorFull (item) {
  const formPopup = item.querySelector(enableValidation.formSelector);
  const fieldsetList = formPopup.querySelectorAll(enableValidation.fieldElementSelector);
  fieldsetList.forEach((fieldSet) => {
    restoreSizeForm (fieldSet);
  });
  const inputList = formPopup.querySelectorAll(enableValidation.inputSelector);
  inputList.forEach((inputElement) => {
    inputElement.classList.remove(enableValidation.inputErrorClass);
  });
  const errorsList = formPopup.querySelectorAll(enableValidation.errorSelector);
  errorsList.forEach((errorElement) => {
    errorElement.classList.remove(enableValidation.errorClass);
    errorElement.textContent = '';
  });
}

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(enableValidation.inputErrorClass);
  errorElement.classList.remove(enableValidation.errorClass);
  errorElement.textContent = '';
  restoreSizeForm(formElement)
};

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
  } else {
    buttonElement.classList.remove(enableValidation.inactiveButtonClass);
  }
};

const setEventListeners = (formPopup, formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(enableValidation.inputSelector));
  const buttonElement = formPopup.querySelector(enableValidation.submitButtonSelector);
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      isValid(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const runValidation = (item) => {
  const formPopup = item.querySelector(enableValidation.formSelector);
  const fieldsetList = Array.from(formPopup.querySelectorAll(enableValidation.fieldElementSelector));
  fieldsetList.forEach((fieldSet) => {
    setEventListeners(formPopup, fieldSet);
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
  fieldElementSelector: '.popup__field',
  errorSelector: '.popup__input-error'
});