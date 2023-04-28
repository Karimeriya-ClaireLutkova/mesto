const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(enableValidation.inputErrorClass);
  errorElement.textContent = errorMessage;
  if (errorMessage.length > 70) {
    increaseFormView (formElement);
  };
  errorElement.classList.add(enableValidation.errorClass);
};

function increaseFormView (formElement) {
const listFieldForm = formElement.querySelectorAll(enableValidation.fieldElementSelector);
listFieldForm.forEach((elem) => {
  elem.classList.add(enableValidation.fieldClass);
 });
}

function restoringSizeForm (formElement) {
  const listFieldForm = formElement.querySelectorAll(enableValidation.fieldElementSelector);
  listFieldForm.forEach((elem) => {
    elem.classList.remove(enableValidation.fieldClass);
  });
}

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(enableValidation.inputErrorClass);
  errorElement.classList.remove(enableValidation.errorClass);
  errorElement.textContent = '';
  restoringSizeForm(formElement)
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

const formValidation = (item) => {
  const formList = Array.from(item.querySelectorAll(enableValidation.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    const fieldsetList = Array.from(formElement.querySelectorAll(enableValidation.fieldFormSelector));
    fieldsetList.forEach((fieldSet) => {
      setEventListeners(fieldSet);
    });
  })
};

const enableValidation = ({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active',
  fieldFormSelector: '.popup__form-info',
  fieldClass: 'popup__field_type_error',
  fieldElementSelector: '.popup__field'
});