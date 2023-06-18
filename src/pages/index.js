import Card from '../scripts/Cards.js';
import Section from '../scripts/Section.js';
import FormValidator from '../scripts/FormValidator.js';
import PopupWithForm from '../scripts/PopupWithForm.js';
import PopupWithImage from '../scripts/PopupWithImage.js';
import PopupWithConfirmation from '../scripts/PopupWithConfirmation.js';
import {listValidation, buttonOpenPopupProfile, buttonOpenPopupCardNew, buttonOpenPopupAvatarNew, buttonSaveProfileInfo, buttonSaveProfileAvatar, buttonAddCardNew, formProfile, formAvatarNew, formCardNew, imageProfile} from '../scripts/constants.js';
import UserInfo from '../scripts/UserInfo.js';
import Api from '../scripts/Api.js';
import './index.css';


const validationPopupProfile = new FormValidator(listValidation, formProfile);
const validationPopupCardNew = new FormValidator(listValidation, formCardNew);
const validationPopupAvatarNew = new FormValidator(listValidation, formAvatarNew);
const cardSection = new Section({renderer: createCard}, '.elements');
const userProfile = new UserInfo('.profile__name', '.profile__profession', '.profile__avatar');
const popupProfile = new PopupWithForm({
  selectorPopup:'.popup_type_profile-info',
  handleFormSubmit:(formData) => {
    userProfile.setUserInfo(formData);
    addLoadingInfo(buttonSaveProfileInfo);
    api.editProfileInfo(formData).then((result) => {
      userProfile.setUserInfo(result);
      popupProfile.closePopup();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        deleteLoadingInfo(buttonSaveProfileInfo)
      })
  }
})
const popupCardNew = new PopupWithForm({
  selectorPopup:'.popup_type_card-new',
  handleFormSubmit:(formData) => {    
    const item = {name: formData.title, link: formData.link};
    addLoadingInfo(buttonAddCardNew);
    api.addCardNew(item)
      .then((result) => {
        cardSection.addItem(createCard(result));
        popupCardNew.closePopup();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        deleteLoadingInfo(buttonAddCardNew)
      })
  }
});
const popupViewCard = new PopupWithImage('.popup_type_image-view');
const popupAvatarNew = new PopupWithForm({
  selectorPopup:'.popup_type_profile-avatar',
  handleFormSubmit:(formData) => {
    addLoadingInfo(buttonSaveProfileAvatar);
    api.editProfileAvatar(formData).then((result) => {
      userProfile.setUserAvatar(result);
      popupAvatarNew.closePopup();
    })
    .catch((err) => console.log(err))
    .finally(() => {
      deleteLoadingInfo(buttonSaveProfileAvatar)
    })
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
api.getInitialCards().then((result) => {
  cardSection.renderItems(result.reverse());
});

api.getUserInfo().then((result) => {
  userProfile.setUserInfo(result);
  userProfile.setUserAvatar(result);
});

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

function deleteCard(item, elemId) {
  const card = {}
}
function addLoadingInfo(item) {
  item.textContent = 'Сохранение...';
}

function deleteLoadingInfo(item) {
  item.textContent = "Сохранить";
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



popupViewCard.setEventListeners();
popupCardNew.setEventListeners();
popupProfile.setEventListeners();
popupAvatarNew.setEventListeners();
popupConfirmDelete.setEventListeners();
validationPopupProfile.enableValidation();
validationPopupCardNew.enableValidation();
validationPopupAvatarNew.enableValidation();
