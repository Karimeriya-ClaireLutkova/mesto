import Card from './cards.js';
import { validationPopupCardNew } from './FormValidator.js';
import { validationPopupProfile } from './FormValidator.js';
import {initialCards, buttonOpenPopupProfile, buttonOpenPopupCardNew, profileName, profileJob, popupProfile, formProfile, nameInput, jobInput, popupCardNew , formCardNew,
nameCard, linkImageCard, popupViewCard, imageViewSubtitle, sectionCardsPage, buttonsClosePopup} from './constants.js';

function showCardNew(item, sectionCardsPage) {
  const templateCard = new Card(item);
  const cardElement = templateCard.generateCard();
  sectionCardsPage.prepend(cardElement);
}

function showCardPrimary(item, sectionCardsPage) {
  const templateCard = new Card(item);
  const cardElement = templateCard.generateCard();
  sectionCardsPage.append(cardElement);
}

initialCards.forEach((item) => {
  showCardPrimary(item, sectionCardsPage);
})

export function openPopup(item) {
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
}

buttonOpenPopupProfile.addEventListener('click', ()=> openPopup(popupProfile,
  nameInput.value = profileName.textContent,
  jobInput.value = profileJob.textContent,
  validationPopupProfile.clearErrorFull(),
  validationPopupProfile.enableButtonSubmit()
))

buttonOpenPopupCardNew.addEventListener('click', ()=> openPopup(popupCardNew,
  nameCard.value = '',
  linkImageCard.value = '',
  validationPopupCardNew.clearErrorFull(),
  validationPopupCardNew.disableButtonSubmit()
))

formProfile.addEventListener('submit', function(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(popupProfile);
})

formCardNew.addEventListener('submit', function(evt) {
  evt.preventDefault();
  const name = nameCard.value;
  const link = linkImageCard.value;
  const title = nameCard.value;
  showCardNew ({name, link, title}, sectionCardsPage);
  closePopup(popupCardNew);
})

buttonsClosePopup.forEach(canselItem => {
  canselItem.addEventListener('click', function(evt) {
    const elemTarget = evt.target;
    const elemCancel = elemTarget.closest('.popup');
    closePopup(elemCancel);
  });
})