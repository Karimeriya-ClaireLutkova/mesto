import Card from './Cards.js';
import Section from './section.js';
import FormValidator from './FormValidator.js';
import {listValidation, initialCards, buttonOpenPopupProfile, buttonOpenPopupCardNew, profileName, profileJob, popupProfile, formProfile, nameInput, jobInput, popupCardNew , formCardNew,
nameCard, linkImageCard, buttonsClosePopup, imageViewCard, imageViewSubtitle, popupViewCard} from './constants.js';

const validationPopupProfile = new FormValidator(listValidation, formProfile);
const validationPopupCardNew = new FormValidator(listValidation, formCardNew);
const cardPrimery = new Section({items: initialCards, renderer: createCard}, '.elements');

function createCard(item) {
  const templateCard = new Card(item, '.card-template', handleCardClick);
  const cardElement = templateCard.generateCard();
  return cardElement;
}

function showCardNew(item) {
  sectionCardsPage.prepend(createCard(item));
}

/*function showCardPrimary(item) {
  sectionCardsPage.append(createCard(item));
}

initialCards.forEach((item) => {
  showCardPrimary(item);
})
*/

function handleCardClick (link, title, name) {
  imageViewCard.src = link;
  imageViewCard.alt = title;
  imageViewSubtitle.textContent = name;
  openPopup(popupViewCard);
}

function openPopup(item) {
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
  const cardNew = new Section({items: [{name, link, title}], renderer: createCard}, '.elements');
  cardNew.renderItems();
  closePopup(popupCardNew);
})

buttonsClosePopup.forEach(canselItem => {
  canselItem.addEventListener('click', function(evt) {
    const elemTarget = evt.target;
    const elemCancel = elemTarget.closest('.popup');
    closePopup(elemCancel);
  });
})

validationPopupProfile.enableValidation();
validationPopupCardNew.enableValidation();
cardPrimery.renderItems();