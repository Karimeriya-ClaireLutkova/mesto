const editProfileButton = document.querySelector('.profile__button_edit');
const addingCardButton = document.querySelector('.profile__button_add');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__profession');
const sectionPageCards = document.querySelector('.elements');
const editProfilePopup = document.querySelector('.popup_type_profile-info');
const addingCardPopup = document.querySelector('.popup_type_card-new');
const viewCardPopup = document.querySelector('.popup_type_image-view');
const closePopupButtons = document.querySelectorAll('.popup__button_close');
const listFofmsPopup = document.querySelectorAll('.popup__form');
const formProfile = document.querySelector("[name='profile']");
const formCardNew = document.querySelector("[name='new-card']");
const formCardView = document.querySelector('.popup__container_type_image');
const nameInput = formProfile.querySelector('.popup__input_type_name');
const jobInput = formProfile.querySelector('.popup__input_type_profession');
const nameCard = formCardNew.querySelector('.popup__input_type_place-name');
const linkImageCard = formCardNew.querySelector('.popup__input_type_link');
const imageCardView = formCardView.querySelector('.popup__image');
const imageSubtitleView = formCardView.querySelector('.popup__subtitle');
const cardTemplate = document.querySelector('#card').content;
const cardElement = cardTemplate.querySelector('.element').cloneNode(true);


function createCard ({name, link, title}) {
  const cardTemplate = document.querySelector('#card').content;
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  cardElement.querySelector('.element__title').textContent = name;
  cardElement.querySelector('.element__image').src = link;
  cardElement.querySelector('.element__image').alt = title;
  const deleteCardButton = cardElement.querySelector('.element__button_delete');
  deleteCardButton.addEventListener('click', function(evt){
    const elemTarget = evt.target;
    const elemDel = elemTarget.closest('.element');
    elemDel.remove();
    });
  const likeCardButton = cardElement.querySelector('.element__button_like');
  likeCardButton.addEventListener('click', function(evt){
    const elemTarget = evt.target;
    elemTarget.classList.toggle('element__button_like_active');
  });
  const viewImageCard = cardElement.querySelector('.element__image');
  viewImageCard.addEventListener('click', function(evt){
    const elemTarget = evt.target;
    const elemView = elemTarget.closest('.element');
    elemSubtitleView = elemView.querySelector('.element__title');
    imageCardView.src = elemTarget.src;
    imageSubtitleView.textContent = elemSubtitleView.textContent;
    showForm(viewCardPopup);
  });
  return cardElement;
}


function showCard(item, sectionPageCards) {
  const cardElement = createCard(item);
  sectionPageCards.append(cardElement);
}

initialCards.forEach((item) => { 
  showCard(item, sectionPageCards);
});

function assambleCard(item, sectionPageCards) {
  const cardElement = createCard(item);
  cardElement.name = nameCard.value;
  cardElement.link = linkImageCard.value;
  cardElement.title = nameCard.value;
  sectionPageCards.prepend(cardElement);
  nameCard.value = '';
  linkImageCard.value = '';
}

function showForm(item) {
  item.classList.toggle('popup_opened');
}

editProfileButton.addEventListener('click', ()=> showForm(editProfilePopup,
  nameInput.value = profileName.textContent,
  jobInput.value = profileJob.textContent
));

addingCardButton.addEventListener('click', ()=> showForm(addingCardPopup));

listFofmsPopup.forEach(listFofmsPopupItem => {
  listFofmsPopupItem.addEventListener('submit', function(evt){
    evt.preventDefault();
    const elemTarget = evt.target;
    const elemPopup = elemTarget.closest('.popup');
    if (elemPopup.classList === editProfilePopup.classList) {
      profileName.textContent = nameInput.value;
      profileJob.textContent = jobInput.value;
    } else if (elemPopup.classList === addingCardPopup.classList) {
      const name = nameCard.value;
      const link = linkImageCard.value;
      const title = nameCard.value;
      assambleCard(name, link, title);
      nameCard.value = '';
      linkImageCard.value = '';
    };    
    showForm(elemPopup);
  });
});
/*
const deleteCard = sectionPageCards.querySelectorAll('.element__button_delete');
deleteCard.forEach(deleteCardItem => {
  deleteCardItem.addEventListener('click', function(evt){
    const elemTarget = evt.target;
    const elemDel = elemTarget.closest('.element');
    elemDel.remove();
  });
});

const preference = sectionPageCards.querySelectorAll('.element__button_like');
  preference.forEach(preferenceItem => {
    preferenceItem.addEventListener('click', function(evt){
      const elemTarget = evt.target;
      elemTarget.classList.toggle('element__button_like_active');
  });
});

const viewing = sectionPageCards.querySelectorAll('.element__image');
viewing.forEach(viewingItem => {
  viewingItem.addEventListener('click', function(evt){
    const elemTarget = evt.target;
    const elemView = elemTarget.closest('.element');
    elemSubtitleView = elemView.querySelector('.element__title');
    imageCardView.src = elemTarget.src;
    imageSubtitleView.textContent = elemSubtitleView.textContent;
    showForm(viewCardPopup);
  });
});
*/
closePopupButtons.forEach(canselItem => {
  canselItem.addEventListener('click', function(evt){
    const elemTarget = evt.target;
    const elemCancel = elemTarget.closest('.popup');
    showForm(elemCancel);
  });
});