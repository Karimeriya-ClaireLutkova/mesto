import Card from '../scripts/Cards.js';
import Section from '../scripts/Section.js';
import FormValidator from '../scripts/FormValidator.js';
import PopupWithForm from '../scripts/PopupWithForm.js';
import PopupWithImage from '../scripts/PopupWithImage.js';
import PopupWithConfirmation from '../scripts/PopupWithConfirmation.js';
import {listValidation, buttonOpenPopupProfile, buttonOpenPopupCardNew, buttonOpenPopupAvatarNew, buttonSaveProfileInfo, buttonSaveProfileAvatar, buttonAddCardNew, formProfile, formAvatarNew, formCardNew} from '../scripts/constants.js';
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
    addLoadingInfo(buttonSaveProfileInfo, 'Сохранение...');
    api.editProfileInfo(formData).then((result) => {
      userProfile.setUserInfo(result);
      popupProfile.closePopup();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        deleteLoadingInfo(buttonSaveProfileInfo, 'Сохранить')
      })
  }
})

const popupCardNew = new PopupWithForm({
  selectorPopup:'.popup_type_card-new',
  handleFormSubmit:(formData) => {
    const item = {name: formData.title, link: formData.link};
    addLoadingInfo(buttonAddCardNew, 'Сохранение...');
    api.addCardNew(item)
      .then((result) => {
        cardSection.addItem(createCard(result));
        popupCardNew.closePopup();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        deleteLoadingInfo(buttonAddCardNew, 'Создать')
      })
  }
});
const popupViewCard = new PopupWithImage('.popup_type_image-view');
const popupAvatarNew = new PopupWithForm({
  selectorPopup:'.popup_type_profile-avatar',
  handleFormSubmit:(formData) => {
    addLoadingInfo(buttonSaveProfileAvatar, 'Сохранение...');
    api.editProfileAvatar(formData).then((result) => {
      userProfile.setUserAvatar(result);
      popupAvatarNew.closePopup();
    })
    .catch((err) => console.log(err))
    .finally(() => {
      deleteLoadingInfo(buttonSaveProfileAvatar, 'Сохранить')
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

const popupConfirmDelete = new PopupWithConfirmation({
  selectorPopup: '.popup_type_confirm-deletion',
  handleFormSubmit:(card, cardId) => {
    api.deleteCard(cardId).then(() => {
      card.deleteCard();
      popupConfirmDelete.closePopup();
      })
      .catch((err) => console.log(err))
  },
});

const userInfoId = {};

function createCard(item) {
  const templateCard = new Card(item, userInfoId, handleCardLike, '.card-template', handleCardClick, handleCardConfirm);
  const cardElement = templateCard.generateCard();
  return cardElement;
}

function handleCardClick(link, title, name) {
  popupViewCard.openPopup(link, title, name);
}

function handleCardLike(cardId, isLikedInfo, card) {
  api.changeLike(cardId, isLikedInfo)
    .then(result => {
      card.checkLikeCard(result);
    })
    .catch((err) => console.error(err))  
}

function handleCardConfirm(card, cardId) {
  popupConfirmDelete.deleteCardInfo(card, cardId);
  popupConfirmDelete.openPopup();
}

function addLoadingInfo(item, text) {
  item.textContent = text;
}

function deleteLoadingInfo(item, text) {
  item.textContent = text;
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

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cards]) => {
    userInfoId._id = userData._id;
    userProfile.setUserInfo(userData);
    userProfile.setUserAvatar(userData);
    cardSection.renderItems(cards.reverse());
  })
  .catch((err) => console.log(err));