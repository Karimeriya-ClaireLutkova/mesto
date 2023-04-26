const formElement = document.querySelector('.popup__form');
const formInput = document.querySelector('.popup__input');

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