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

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(enableValidation.inputErrorClass);
  errorElement.classList.remove(enableValidation.errorClass);
  errorElement.textContent = '';
  restoreSizeForm(formElement)
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
  buttonElement.setAttribute('disabled', true);
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
runValidation(enableValidation);