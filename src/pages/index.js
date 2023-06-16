import Card from '../scripts/Cards.js';
import Section from '../scripts/Section.js';
import FormValidator from '../scripts/FormValidator.js';
import PopupWithForm from '../scripts/PopupWithForm.js';
import PopupWithImage from '../scripts/PopupWithImage.js';
import PopupWithConfirmation from '../scripts/PopupWithConfirmation.js';
import {listValidation, initialCards, buttonOpenPopupProfile, buttonOpenPopupCardNew, formProfile, formCardNew} from '../scripts/constants.js';
import UserInfo from '../scripts/UserInfo.js';
import './index.css';

const validationPopupProfile = new FormValidator(listValidation, formProfile);
const validationPopupCardNew = new FormValidator(listValidation, formCardNew);
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
const popupConfirmDelete = new PopupWithConfirmation('.popup_type_confirm-deletion');

function createCard(item) {
  const templateCard = new Card(item, '.card-template', handleCardClick, handleCardDelete);
  const cardElement = templateCard.generateCard();
  return cardElement;
}

function handleCardClick(link, title, name) {
  popupViewCard.openPopup(link, title, name);
}

function handleCardDelete() {
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

cardSection.renderItems(initialCards.reverse());
popupViewCard.setEventListeners();
popupCardNew.setEventListeners();
popupProfile.setEventListeners();
popupConfirmDelete.setEventListeners();
validationPopupProfile.enableValidation();
validationPopupCardNew.enableValidation();