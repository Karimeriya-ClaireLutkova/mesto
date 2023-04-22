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

const sectionPageCards = document.querySelector('.elements');
const cardTemplate = document.querySelector('#card').content;
const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
const closePopupButtons = document.querySelectorAll('.popup__button_close');

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
  sectionPageCards.prepend(cardElement);
}

function showForm(item) {
  item.classList.toggle('popup_opened');
}

editProfileButton.addEventListener('click', ()=> showForm(editProfilePopup,
  nameInput.value = profileName.textContent,
  jobInput.value = profileJob.textContent
));

addingCardButton.addEventListener('click', ()=> showForm(addingCardPopup));

formProfile.addEventListener('submit', function(evt){
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    showForm(editProfilePopup);
});

formCardNew.addEventListener('submit', function(evt){
  evt.preventDefault();
  const name = nameCard.value;
  const link = linkImageCard.value;
  const title = nameCard.value;
  assambleCard ({name, link, title}, sectionPageCards);
  nameCard.value = '';
  linkImageCard.value = '';
  showForm(addingCardPopup);
});

closePopupButtons.forEach(canselItem => {
  canselItem.addEventListener('click', function(evt){
    const elemTarget = evt.target;
    const elemCancel = elemTarget.closest('.popup');
    showForm(elemCancel);
  });
});