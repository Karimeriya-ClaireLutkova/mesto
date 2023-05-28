import Card from './Cards.js';
import Section from './Section.js';
import FormValidator from './FormValidator.js';
import PopupWithForm from './PopupWithForm.js';
import PopupWithImage from './PopupWithImage.js';
import {listValidation, initialCards, buttonOpenPopupProfile, buttonOpenPopupCardNew, formProfile, nameInput, jobInput, formCardNew} from './constants.js';
import UserInfo from './UserInfo.js';

const validationPopupProfile = new FormValidator(listValidation, formProfile);
const validationPopupCardNew = new FormValidator(listValidation, formCardNew);
const cardPrimery = new Section({items: initialCards, renderer: createCard}, '.elements');
const userProfile = new UserInfo('.profile__name','.profile__profession');
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
    const cardNew = new Section({items:[{name, link, title}], renderer: createCard}, '.elements');
    cardNew.renderItems();
  }
});
const popupViewCard = new PopupWithImage('.popup_type_image-view');

function createCard(item) {
  const templateCard = new Card(item, '.card-template', handleCardClick);
  const cardElement = templateCard.generateCard();
  return cardElement;
}

function handleCardClick (link, title, name) {
  popupViewCard.openPopup(link, title, name);
}

function displayInfoProfile(item) {
  nameInput.value = item.name;
  jobInput.value = item.profession;
}

buttonOpenPopupProfile.addEventListener('click', ()=> {
  displayInfoProfile(userProfile.getUserInfo()),
  popupProfile.openPopup(),
  validationPopupProfile.clearErrorFull(),
  validationPopupProfile.enableButtonSubmit()
})

buttonOpenPopupCardNew.addEventListener('click', ()=> {
  popupCardNew.openPopup();
  validationPopupCardNew.clearErrorFull();
  validationPopupCardNew.disableButtonSubmit();  
})

cardPrimery.renderItems();
popupViewCard.setEventListeners();
popupCardNew.setEventListeners();
popupProfile.setEventListeners();
validationPopupProfile.enableValidation();
validationPopupCardNew.enableValidation();