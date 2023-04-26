const formElement = document.querySelector('.popup__form');
const formInput = document.querySelector('.popup__input');
const formError = formElement.querySelector(`.${formInput.id}-error`);

const fillTextContentError = (element) => {
  formError.textContent = element;
};

const clearTextContentError = () => {
  formError.textContent = '';
};

const showMessageError = () => {
  formError.classList.add('popup__input-error_active');
};

const hideMessageError = () => {
  formError.classList.remove('popup__input-error_active');
}; 

const showInputError = (element, errorMessage) => {
  element.classList.add('popup__input_type_error');
  fillTextContentError(errorMessage);
  showMessageError();
};

const hideInputError = (element) => {
  element.classList.remove('popup__input_type_error');
  hideMessageError();
  clearTextContentError();
}

const isValid = () => {
  if (!formInput.validity.valid) {
    showInputError(formInput, formInput.validationMessage);
  } else {
    hideInputError(formInput);
  }
};

formInput.addEventListener('input', isValid);