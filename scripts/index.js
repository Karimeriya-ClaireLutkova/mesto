import Card from './Cards.js';
import Section from './Section.js';
import FormValidator from './FormValidator.js';
import PopupWithForm from './PopupWithForm.js';
import PopupWithImage from './PopupWithImage.js';
import {listValidation, initialCards, buttonOpenPopupProfile, buttonOpenPopupCardNew, profileName, profileJob, formProfile, nameInput, jobInput, formCardNew,
nameCard, linkImageCard} from './constants.js';
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

/*
  const name = nameCard.value;
  const link = linkImageCard.value;
  const title = nameCard.value;
  
  popupCardNew.closePopup();


function showCardNew(item) {
  sectionCardsPage.prepend(createCard(item));
}

function showCardPrimary(item) {
  sectionCardsPage.append(createCard(item));
}

initialCards.forEach((item) => {
  showCardPrimary(item);
})
*/

function handleCardClick (link, title, name) {
  popupViewCard.openPopup(link, title, name);
}

function displayInfoProfile(item) {
  nameInput.value = item.name;
  jobInput.value = item.profession;
}
/*function openPopup(item) {
  item.classList.add('popup_opened');
  item.addEventListener('click', closePopupClick);
  document.addEventListener('keydown', closePopupKeydown);
}

function closePopup(item) {
  item.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupKeydown);
  item.removeEventListener('click', closePopupClick)
}

function closePopupKeydown (evt) {
  if(evt.key === 'Escape') {
    const activePopup = document.querySelector('.popup_opened');
    closePopup(activePopup);
  };
}

function closePopupClick (evt) {
  if(evt.target.classList.contains('popup')) {
    const elemTarget = evt.target;
    closePopup(elemTarget);
  };
}*/

buttonOpenPopupProfile.addEventListener('click', ()=> {
  displayInfoProfile(userProfile.getUserInfo()),
  popupProfile.openPopup(),
  validationPopupProfile.clearErrorFull(),
  validationPopupProfile.enableButtonSubmit()
})
/*validationPopupProfile.clearErrorFull()
validationPopupProfile.enableButtonSubmit()*/

buttonOpenPopupCardNew.addEventListener('click', ()=> {
  popupCardNew.openPopup();
  validationPopupCardNew.clearErrorFull();
  validationPopupCardNew.disableButtonSubmit();  
})
/*
formProfile.addEventListener('submit', function(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    popupProfile.closePopup();
})

formCardNew.addEventListener('submit', function(evt) {
  evt.preventDefault();
  const name = nameCard.value;
  const link = linkImageCard.value;
  const title = nameCard.value;
  const cardNew = new Section({items: [{name, link, title}], renderer: createCard}, '.elements');
  cardNew.renderItems();
  popupCardNew.closePopup();
})
/*
buttonsClosePopup.forEach(canselItem => {
  canselItem.addEventListener('click', function(evt) {
    const elemTarget = evt.target;
    const elemCancel = elemTarget.closest('.popup');
    closePopup(elemCancel);
  });
})*/

cardPrimery.renderItems();
popupViewCard.setEventListeners();
popupCardNew.setEventListeners();
popupProfile.setEventListeners();
validationPopupProfile.enableValidation();
validationPopupCardNew.enableValidation();