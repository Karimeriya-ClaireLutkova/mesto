const formElement = document.querySelector('.popup__form');
const formInput = document.querySelector('.popup__input');
const formError = formElement.querySelector(`.${formInput.id}-error`);

const showMessageError = () => {
  formError.classList.add('popup__input-error_active');
};

const hideMessageError = () => {
  formError.classList.remove('popup__input-error_active');
}; 

const showInputError = (element) => {
  element.classList.add('popup__input_type_error');
};

const hideInputError = (element) => {
  element.classList.remove('popup__input_type_error');
}

const isValid = () => {
  if (!formInput.validity.valid) {
    showInputError(formInput);
  } else {
    hideInputError(formInput);
  }
};

formInput.addEventListener('input', isValid);