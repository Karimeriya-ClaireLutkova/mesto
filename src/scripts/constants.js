const imageKarachaevsk = new URL('../images/Карачаевск.jpg', import.meta.url);
const imageElbrus = new URL('../images/Гора_Эльбрус.jpg', import.meta.url);
const imageDombai = new URL('../images/Домбай.jpg', import.meta.url);

export const initialCards = [
  {
    name: 'Карачаевск',
    link: imageKarachaevsk,
    title: 'Церковь в Карачаевске',
    isCardPrimery: true
  },
  {
    name: 'Гора Эльбрус',
    link: imageElbrus,
    title: 'Степи у Эльбруса',
    isCardPrimery: true
  },
  {
    name: 'Домбай',
    link: imageDombai,
    title: 'Лес на горной территории Домбая',
    isCardPrimery: true
  },
  {
    name: 'Гора Эльбрус',
    link: imageElbrus,
    title: 'Степи у Эльбруса',
    isCardPrimery: true
  },
  {
    name: 'Домбай',
    link: imageDombai,
    title: 'Лес на горной территории Домбая',
    isCardPrimery: true
  },
  {
    name: 'Карачаево-Черкесcия',
    link: imageKarachaevsk,
    title: 'Церковь в Карачаевске',
    isCardPrimery: true
  }
];

export const buttonOpenPopupProfile = document.querySelector('.profile__button_edit');
export const buttonOpenPopupCardNew = document.querySelector('.profile__button_add');

const popupProfile = document.querySelector('.popup_type_profile-info');
export const formProfile = popupProfile.querySelector('.popup__form_type_profile');
export const nameInput = formProfile.querySelector('.popup__input_type_name');
export const jobInput = formProfile.querySelector('.popup__input_type_profession');

const popupCardNew = document.querySelector('.popup_type_card-new');
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