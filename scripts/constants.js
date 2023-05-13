export const initialCards = [
  {
    name: 'Карачаевск',
    link: './images/Карачаевск.jpg',
    title: 'Церковь в Карачаевске'
  },
  {
    name: 'Гора Эльбрус',
    link: './images/Гора_Эльбрус.jpg',
    title: 'Степи у Эльбруса'
  },
  {
    name: 'Домбай',
    link: './images/Домбай.jpg',
    title: 'Лес на горной территории Домбая'
  },
  {
    name: 'Гора Эльбрус',
    link: './images/Гора_Эльбрус.jpg',
    title: 'Степи у Эльбруса'
  },
  {
    name: 'Домбай',
    link: './images/Домбай.jpg',
    title: 'Лес на горной территории Домбая'
  },
  {
    name: 'Карачаево-Черкесcия',
    link: './images/Карачаевск.jpg',
    title: 'Церковь в Карачаевске'
  }
];

export const buttonOpenPopupProfile = document.querySelector('.profile__button_edit');
export const buttonOpenPopupCardNew = document.querySelector('.profile__button_add');
export const profileName = document.querySelector('.profile__name');
export const profileJob = document.querySelector('.profile__profession');

export const popupProfile = document.querySelector('.popup_type_profile-info');
export const formProfile = popupProfile.querySelector('.popup__form_type_profile');
export const nameInput = formProfile.querySelector('.popup__input_type_name');
export const jobInput = formProfile.querySelector('.popup__input_type_profession');

export const popupCardNew = document.querySelector('.popup_type_card-new');
export const formCardNew = popupCardNew.querySelector('.popup__form_type_new-card');
export const nameCard = formCardNew.querySelector('.popup__input_type_place-name');
export const linkImageCard = formCardNew.querySelector('.popup__input_type_link');

export const popupViewCard = document.querySelector('.popup_type_image-view');
export const formViewCard = document.querySelector('.popup__container_type_image');
export const imageViewCard = formViewCard.querySelector('.popup__image');
export const imageViewSubtitle = formViewCard.querySelector('.popup__subtitle');

export const sectionCardsPage = document.querySelector('.elements');
export const buttonsClosePopup = document.querySelectorAll('.popup__button_close');