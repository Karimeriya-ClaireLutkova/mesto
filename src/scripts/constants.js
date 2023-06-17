const imageKarachaevsk = new URL('../images/Карачаевск.jpg', import.meta.url);
const imageElbrus = new URL('../images/Гора_Эльбрус.jpg', import.meta.url);
const imageDombai = new URL('../images/Домбай.jpg', import.meta.url);

export const buttonOpenPopupProfile = document.querySelector('.profile__button_edit');
export const buttonOpenPopupCardNew = document.querySelector('.profile__button_add');
export const buttonOpenPopupAvatarNew = document.querySelector('.profile__button_edit-photo');
export const imageProfile = document.querySelector('.profile__avatar');

const popupProfile = document.querySelector('.popup_type_profile-info');
export const formProfile = popupProfile.querySelector('.popup__form_type_profile');
export const nameInput = formProfile.querySelector('.popup__input_type_name');
export const jobInput = formProfile.querySelector('.popup__input_type_profession');

const popupCardNew = document.querySelector('.popup_type_card-new');
export const formCardNew = popupCardNew.querySelector('.popup__form_type_new-card');

const popupAvatar = document.querySelector('.popup_type_profile-avatar');
export const formAvatarNew = popupAvatar.querySelector('.popup__form_type_new-avatar');

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