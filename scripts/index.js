const buttonOpenPopupProfile = document.querySelector('.profile__button_edit');
const buttonOpenPopupCardNew = document.querySelector('.profile__button_add');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__profession');

const popupProfile = document.querySelector('.popup_type_profile-info');
const formProfile = document.querySelector("[name='profile']");
const nameInput = formProfile.querySelector('.popup__input_type_name');
const jobInput = formProfile.querySelector('.popup__input_type_profession');

const popupCardNew = document.querySelector('.popup_type_card-new');
const formCardNew = document.querySelector("[name='new-card']");
const nameCard = formCardNew.querySelector('.popup__input_type_place-name');
const linkImageCard = formCardNew.querySelector('.popup__input_type_link');

const popupViewCard = document.querySelector('.popup_type_image-view');
const formViewCard = document.querySelector('.popup__container_type_image');
const imageViewCard = formViewCard.querySelector('.popup__image');
const imageViewSubtitle = formViewCard.querySelector('.popup__subtitle');

const listPopups = document.querySelectorAll('.popup');
const sectionCardsPage = document.querySelector('.elements');
const cardTemplate = document.querySelector('#card').content;
const cardElementTemplate = cardTemplate.querySelector('.element');
const fieldList = document.querySelectorAll('.popup__field');
const errorElements = document.querySelectorAll('.popup__input-error');
const listInputs = document.querySelectorAll('.popup__input');
const buttonsClosePopup = document.querySelectorAll('.popup__button_close');

function createCard ({name, link, title}) {
  const templateCard = cardElementTemplate.cloneNode(true);
  const imageCard = templateCard.querySelector('.element__image');
  const titleCard = templateCard.querySelector('.element__title');
  titleCard.textContent = name;
  imageCard.src = link;
  imageCard.alt = title;
  const buttonDeleteCard = templateCard.querySelector('.element__button_delete');
  buttonDeleteCard.addEventListener('click', function(evt) {
    const elemTarget = evt.target;
    const elemDel = elemTarget.closest('.element');
    elemDel.remove();
    });
  const buttonLikeCard = templateCard.querySelector('.element__button_like');
  buttonLikeCard.addEventListener('click', function(evt) {
    const elemTarget = evt.target;
    elemTarget.classList.toggle('element__button_like_active');
  });
  imageCard.addEventListener('click', () => openPopupImage(name, link));
  return templateCard;
}

function showCardNew(item, sectionCardsPage) {
  const templateCard = createCard(item);
  sectionCardsPage.append(templateCard);
}

initialCards.forEach((item) => {
  showCardNew(item, sectionCardsPage)
})

function showCardPrimary(item, sectionCardsPage) {
  const templateCard = createCard(item);
  sectionCardsPage.prepend(templateCard);
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
  clearErrorFull(popupProfile)),
  enableButtonSubmit(popupProfile)
)

buttonOpenPopupCardNew.addEventListener('click', ()=> openPopup(popupCardNew,
  nameCard.value = '',
  linkImageCard.value = '',
  clearErrorFull(popupCardNew),
  disableButtonSubmit(popupCardNew)
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
  showCardPrimary ({name, link, title}, sectionCardsPage);
  closePopup(popupCardNew);
})

buttonsClosePopup.forEach(canselItem => {
  canselItem.addEventListener('click', function(evt) {
    const elemTarget = evt.target;
    const elemCancel = elemTarget.closest('.popup');
    closePopup(elemCancel);
  });
})