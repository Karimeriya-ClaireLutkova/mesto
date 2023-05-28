export const initialCards = [
  {
    name: 'Карачаевск',
    link: './images/Карачаевск.jpg',
    title: 'Церковь в Карачаевске',
    isCardPrimery: true
  },
  {
    name: 'Гора Эльбрус',
    link: './images/Гора_Эльбрус.jpg',
    title: 'Степи у Эльбруса',
    isCardPrimery: true
  },
  {
    name: 'Домбай',
    link: './images/Домбай.jpg',
    title: 'Лес на горной территории Домбая',
    isCardPrimery: true
  },
  {
    name: 'Гора Эльбрус',
    link: './images/Гора_Эльбрус.jpg',
    title: 'Степи у Эльбруса',
    isCardPrimery: true
  },
  {
    name: 'Домбай',
    link: './images/Домбай.jpg',
    title: 'Лес на горной территории Домбая',
    isCardPrimery: true
  },
  {
    name: 'Карачаево-Черкесcия',
    link: './images/Карачаевск.jpg',
    title: 'Церковь в Карачаевске',
    isCardPrimery: true
  }
];

export const buttonOpenPopupProfile = document.querySelector('.profile__button_edit');
export const buttonOpenPopupCardNew = document.querySelector('.profile__button_add');

export const popupProfile = document.querySelector('.popup_type_profile-info');
export const formProfile = popupProfile.querySelector('.popup__form_type_profile');
export const nameInput = formProfile.querySelector('.popup__input_type_name');
export const jobInput = formProfile.querySelector('.popup__input_type_profession');

export const popupCardNew = document.querySelector('.popup_type_card-new');
export const formCardNew = popupCardNew.querySelector('.popup__form_type_new-card');

export const listValidation = ({
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