const buttonOpenPopupProfile = document.querySelector('.profile__button_edit');
const buttonOpenPopupCardNew = document.querySelector('.profile__button_add');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__profession');

const popupProfile = document.querySelector('.popup_type_profile-info');
const formProfile = popupProfile.querySelector('.popup__form_type_profile');
const nameInput = formProfile.querySelector('.popup__input_type_name');
const jobInput = formProfile.querySelector('.popup__input_type_profession');

const popupCardNew = document.querySelector('.popup_type_card-new');
const formCardNew = popupCardNew.querySelector('.popup__form_type_new-card');
const nameCard = formCardNew.querySelector('.popup__input_type_place-name');
const linkImageCard = formCardNew.querySelector('.popup__input_type_link');

const popupViewCard = document.querySelector('.popup_type_image-view');
const formViewCard = document.querySelector('.popup__container_type_image');
const imageViewCard = formViewCard.querySelector('.popup__image');
const imageViewSubtitle = formViewCard.querySelector('.popup__subtitle');

const listPopups = document.querySelectorAll('.popup');
const sectionCardsPage = document.querySelector('.elements');
const fieldList = document.querySelectorAll('.popup__field');
const errorElements = document.querySelectorAll('.popup__input-error');
const listInputs = document.querySelectorAll('.popup__input');
const buttonsClosePopup = document.querySelectorAll('.popup__button_close');
class Card {
  constructor(item) {
    this._name = item.name;
    this._link = item.link;
    this._title = item.title;
  }

  _getTemplate() {
    const cardElement = document
    .querySelector('.card-template')
    .content
    .querySelector('.element')
    .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._buttonDeleteCard = this._element.querySelector('.element__button_delete');
    this._buttonLikeCard = this._element.querySelector('.element__button_like');
    this._imageCard = this._element.querySelector('.element__image');
    this._titleCard = this._element.querySelector('.element__title');
    this._setEventListeners();

    this._titleCard.textContent = this._name;
    this._imageCard.src = this._link;
    this._imageCard.alt = this._title;

    return this._element;
  }

  _openPopupImage() {
    imageViewCard.src = this._link;
    imageViewCard.alt = this._title;
    imageViewSubtitle.textContent = this._name;
    openPopup(popupViewCard);
  }

  _likeCard() {
    this._buttonLikeCard.classList.toggle('element__button_like_active');
  }

  _deleteCard() {
    this._element.remove();
  }

  _setEventListeners() {
    this._imageCard.addEventListener('click', () => {
      this._openPopupImage();
    });
    this._buttonLikeCard.addEventListener('click', () => {
      this._likeCard();
    });
    this._buttonDeleteCard.addEventListener('click', () => {
      this._deleteCard();
    });
  }
}

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

function openPopupImage (name, link, title) {
  imageViewCard.src = link;
  imageViewCard.alt = title;
  imageViewSubtitle.textContent = name;
  openPopup(popupViewCard);
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