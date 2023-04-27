const formElement = document.querySelector('.popup__form');
const formInput = document.querySelector('.popup__input');
const errorElement = formElement.querySelector(`.${formInput.id}-error`);

const fillTextContentError = (errorElement, errorMessage) => {
  errorElement.textContent = errorMessage;
};

const clearTextContentError = (errorElement) => {
  errorElement.textContent = '';
};

const showMessageError = (errorElement) => {
  errorElement.classList.add('popup__input-error_active');
};

const hideMessageError = (errorElement) => {
  errorElement.classList.remove('popup__input-error_active');
}; 

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${formInput.id}-error`);
  inputElement.classList.add('popup__input_type_error');
  fillTextContentError(errorElement, errorMessage);
  showMessageError(errorElement);
};

const hideInputError = (formElement, inputElement) => {
  const errorElement= formElement.querySelector(`.${formInput.id}-error`);
  inputElement.classList.remove('popup__input_type_error');
  hideMessageError(errorElement);
  clearTextContentError(errorElement);  
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
    buttonElement.classList.add('popup__button_inactive');
  } else {
    buttonElement.classList.remove('popup__button_inactive');
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  const buttonElement = formElement.querySelector('.popup__button');
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      isValid(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup__form'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    const fieldsetList = Array.from(formElement.querySelectorAll('.popup__form-info'));
    fieldsetList.forEach((fieldSet) => {
      setEventListeners(fieldSet);
    }); 
  });
};
enableValidation();
