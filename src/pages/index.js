import Card from '../scripts/Cards.js';
import Section from '../scripts/Section.js';
import FormValidator from '../scripts/FormValidator.js';
import PopupWithForm from '../scripts/PopupWithForm.js';
import PopupWithImage from '../scripts/PopupWithImage.js';
import PopupWithConfirmation from '../scripts/PopupWithConfirmation.js';
import {listValidation, initialCards, buttonOpenPopupProfile, buttonOpenPopupCardNew, buttonOpenPopupAvatarNew, formProfile, formAvatarNew, formCardNew, imageProfile} from '../scripts/constants.js';
import UserInfo from '../scripts/UserInfo.js';
import Api from '../scripts/Api.js';
import './index.css';

const validationPopupProfile = new FormValidator(listValidation, formProfile);
const validationPopupCardNew = new FormValidator(listValidation, formCardNew);
const validationPopupAvatarNew = new FormValidator(listValidation, formAvatarNew);
const cardSection = new Section({items: initialCards, renderer: createCard}, '.elements');
const userProfile = new UserInfo('.profile__name', '.profile__profession');
const popupProfile = new PopupWithForm({
  selectorPopup:'.popup_type_profile-info',
  handleFormSubmit:(formData) => {
    userProfile.setUserInfo(formData);
  }
});
const popupCardNew = new PopupWithForm({
  selectorPopup:'.popup_type_card-new',
  handleFormSubmit:(formData) => {
    const name = formData.title;
    const link = formData.link;
    const title = formData.title;
    const card = createCard({name, link, title});
    cardSection.addItem(card)
  }
});
const popupViewCard = new PopupWithImage('.popup_type_image-view');
const popupAvatarNew = new PopupWithForm({
  selectorPopup:'.popup_type_profile-avatar',
  handleFormSubmit:(formData) => {
    imageProfile.link = formData.link;
  }
});
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-68/',
  headers: {
    authorization: 'fcd98cd3-4216-4409-b17a-f7511209a4fb',
    'Content-Type': 'application/json'
  }
}); 


const popupConfirmDelete = new PopupWithConfirmation('.popup_type_confirm-deletion');

function createCard(item) {
  const templateCard = new Card(item, '.card-template', handleCardClick, handleCardConfirm);
  const cardElement = templateCard.generateCard();
  return cardElement;
}

function handleCardClick(link, title, name) {
  popupViewCard.openPopup(link, title, name);
}

function handleCardConfirm() {
  popupConfirmDelete.openPopup();
}

buttonOpenPopupProfile.addEventListener('click', ()=> {
  popupProfile.setInputValues(userProfile.getUserInfo());
  popupProfile.openPopup();
  validationPopupProfile.clearErrorFull();
  validationPopupProfile.enableButtonSubmit();
})

buttonOpenPopupCardNew.addEventListener('click', ()=> {
  popupCardNew.openPopup();
  validationPopupCardNew.clearErrorFull();
  validationPopupCardNew.disableButtonSubmit();
})

buttonOpenPopupAvatarNew.addEventListener('click', ()=> {
  popupAvatarNew.openPopup();
  validationPopupAvatarNew.clearErrorFull();
  validationPopupAvatarNew.disableButtonSubmit();
})

api.getInitialCards();
cardSection.renderItems(initialCards.reverse());
popupViewCard.setEventListeners();
popupCardNew.setEventListeners();
popupProfile.setEventListeners();
popupAvatarNew.setEventListeners();
popupConfirmDelete.setEventListeners();
validationPopupProfile.enableValidation();
validationPopupCardNew.enableValidation();
validationPopupAvatarNew.enableValidation();
