const editProfileButton = document.querySelector('.profile__button_edit');
const addingCardButton = document.querySelector('.profile__button_add');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__profession');

const editProfilePopup = document.querySelector('.popup_type_profile-info');
const formProfile = document.querySelector("[name='profile']");
const nameInput = formProfile.querySelector('.popup__input_type_name');
const jobInput = formProfile.querySelector('.popup__input_type_profession');

const addingCardPopup = document.querySelector('.popup_type_card-new');
const formCardNew = document.querySelector("[name='new-card']");
const nameCard = formCardNew.querySelector('.popup__input_type_place-name');
const linkImageCard = formCardNew.querySelector('.popup__input_type_link');

const viewCardPopup = document.querySelector('.popup_type_image-view');
const formCardView = document.querySelector('.popup__container_type_image');
const imageCardView = formCardView.querySelector('.popup__image');
const imageSubtitleView = formCardView.querySelector('.popup__subtitle');

const listPopups = document.querySelectorAll('.popup');
const sectionPageCards = document.querySelector('.elements');
const cardTemplate = document.querySelector('#card').content;
const cardElementTemplate = cardTemplate.querySelector('.element');
const fieldList = document.querySelectorAll('.popup__field');
const errorElements = document.querySelectorAll('.popup__input-error');
const listInputs = document.querySelectorAll('.popup__input');
const closePopupButtons = document.querySelectorAll('.popup__button_close');

function createCard ({name, link, title}) {
  const preparedCard = cardElementTemplate.cloneNode(true);
  const imageCard = preparedCard.querySelector('.element__image');
  const titleCard = preparedCard.querySelector('.element__title');
  titleCard.textContent = name;
  imageCard.src = link;
  imageCard.alt = title;
  const deleteCardButton = preparedCard.querySelector('.element__button_delete');
  deleteCardButton.addEventListener('click', function(evt) {
    const elemTarget = evt.target;
    const elemDel = elemTarget.closest('.element');
    elemDel.remove();
    });
  const likeCardButton = preparedCard.querySelector('.element__button_like');
  likeCardButton.addEventListener('click', function(evt) {
    const elemTarget = evt.target;
    elemTarget.classList.toggle('element__button_like_active');
  });
  imageCard.addEventListener('click', function(evt) {
    const elemTarget = evt.target;
    const elemView = elemTarget.closest('.element');
    elemSubtitleView = elemView.querySelector('.element__title');
    imageCardView.src = elemTarget.src;
    imageCardView.alt = elemTarget.alt;
    imageSubtitleView.textContent = elemSubtitleView.textContent;
    openPopup(viewCardPopup);
  });
  return preparedCard;
}

function showCard(item, sectionPageCards) {
  const preparedCard = createCard(item);
  sectionPageCards.append(preparedCard);
}

initialCards.forEach((item) => {
  showCard(item, sectionPageCards)
})

function assambleCard(item, sectionPageCards) {
  const preparedCard = createCard(item);
  sectionPageCards.prepend(preparedCard);
}

function openPopup(item) {
  item.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupKeydown);
}

function closePopup(item) {
  item.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupKeydown);
}

function clearError(errorElements) {
  errorElements.forEach((item) => {
    item.classList.remove('popup__input-error_active');
    item.textContent = '';
  });
}

function hideError(listInputs) {
  listInputs.forEach((item) => {
    item.classList.remove('popup__input_type_error');
  });
}

function restoringSizeField(fieldList) {
  fieldList.forEach((item) => {
    item.classList.remove('popup__field_type_error');
  });
}

function closePopupKeydown (evt) {
  if(evt.key === 'Escape') {
    const activePopup = document.querySelector('.popup_opened');
    clearError(errorElements);
    hideError(listInputs);
    restoringSizeField(fieldList);
    closePopup(activePopup);
  };
}

editProfileButton.addEventListener('click', ()=> openPopup(editProfilePopup,
  nameInput.value = profileName.textContent,
  jobInput.value = profileJob.textContent,
  formValidation(editProfilePopup)
))

addingCardButton.addEventListener('click', ()=> openPopup(addingCardPopup,
  nameCard.value = '',
  linkImageCard.value = '',
  formValidation(addingCardPopup)
))

formProfile.addEventListener('submit', function(evt){
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(editProfilePopup);
})

formCardNew.addEventListener('submit', function(evt){
  evt.preventDefault();
  const name = nameCard.value;
  const link = linkImageCard.value;
  const title = nameCard.value;
  assambleCard ({name, link, title}, sectionPageCards);
  closePopup(addingCardPopup);
})

closePopupButtons.forEach(canselItem => {
  canselItem.addEventListener('click', function(evt){
    const elemTarget = evt.target;
    const elemCancel = elemTarget.closest('.popup');
    clearError(errorElements);
    hideError(listInputs);
    restoringSizeField(fieldList);
    closePopup(elemCancel);
  });
})

document.addEventListener('click', function(evt) {
  if(evt.target.classList.contains('popup')) {
    const elemTarget = evt.target;
    clearError(errorElements);
    hideError(listInputs);
    restoringSizeField(fieldList);
    closePopup(elemTarget);
  };
})