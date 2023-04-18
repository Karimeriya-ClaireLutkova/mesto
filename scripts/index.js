
const cardInfo = initialCards.map(function (item) {
  return {
    name: item.name,
    link: item.link,
    title: item.title,
  };
});

const editProfileButton = document.querySelector('.profile__button_edit');
const addingCardButton = document.querySelector('.profile__button_add');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__profession');
const sectionPageCards = document.querySelector('.elements');
const formsPopupAll = [];
const formPopupEdit = document.querySelector('.popup_type_profile-info');
const formPopupCard = document.querySelector('.popup_type_card-new');
const formPopupView = document.querySelector('.popup_type_image-view');
const closePopupButtons = document.querySelectorAll('.popup__button_close');
const formElement = document.querySelectorAll('.popup__form');
const formCardEdit = document.querySelector("[name='profile']");
const formCardNew = document.querySelector("[name='new-card']");
const formCardView = document.querySelector('.popup__container_type_image');
const nameInput = formCardEdit.querySelector('.popup__input_type_name');
const jobInput = formCardEdit.querySelector('.popup__input_type_profession');
const nameCard = formCardNew.querySelector('.popup__input_type_place-name');
const linkImageCard = formCardNew.querySelector('.popup__input_type_link');
const imageCardView = formCardView.querySelector('.popup__image');
const imageSubtitleView = formCardView.querySelector('.popup__subtitle');
const cardTemplate = document.querySelector('#card').content;
const cardElement = cardTemplate.querySelector('.element').cloneNode(true);

//formsPopupAll.push(formPopupEdit, formPopupCard, formPopupView);

function render() {
  cardInfo.forEach(showCard);
}

function showCard({ name, link, title }) {
  const cardTemplate = document.querySelector('#card').content;
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  cardElement.querySelector('.element__title').textContent = name;
  cardElement.querySelector('.element__image').src = link;
  cardElement.querySelector('.element__image').alt = title;
  sectionPageCards.prepend(cardElement);
}
render();

function assambleCard(name, link, title) {
  const cardTemplate = document.querySelector('#card').content;
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  cardElement.querySelector('.element__title').textContent = name;
  cardElement.querySelector('.element__image').src = link;
  cardElement.querySelector('.element__image').alt = title;
  const buttonDelNew = cardElement.querySelectorAll('.element__button_delete');
  buttonDelNew.forEach(buttonDelNewItem => {
    buttonDelNewItem.addEventListener('click', function(evt){
      const elemTarget = evt.target;
      const elemDel = elemTarget.closest('.element');
      elemDel.remove();
    });
  });
  const buttonLikeNew = cardElement.querySelectorAll('.element__button_like');
  buttonLikeNew.forEach(buttonLikeNewItem => {
    buttonLikeNewItem.addEventListener('click', function(evt){
      const elemTarget = evt.target;
      elemTarget.classList.toggle('element__button_like_active');
    });
  });
  sectionPageCards.prepend(cardElement);
  const imgViewNew = sectionPageCards.querySelectorAll('.element__image');
  imgViewNew.forEach(imgViewNewItem => {
    imgViewNewItem.addEventListener('click', function(evt){
      const elemTarget = evt.target;
      const elemView = elemTarget.closest('.element');
      elemSubtitleView = elemView.querySelector('.element__title');
      imageCardView.src = elemTarget.src;
      imageSubtitleView.textContent = elemSubtitleView.textContent;
      showForm(formPopupView);
    });
  });
}

function showForm(item) {
  item.classList.add('popup_opened');
}

editProfileButton.addEventListener('click', ()=> showForm(formPopupEdit,
  nameInput.value = profileName.textContent,
  jobInput.value = profileJob.textContent
));

addingCardButton.addEventListener('click', ()=> showForm(formPopupCard));

formElement.forEach(formElementItem => {
  formElementItem.addEventListener('submit', function(evt){
    evt.preventDefault();
    const elemTarget = evt.target;
    const elemProfile = elemTarget.querySelector('.popup__input_type_name');
    if (elemProfile !== null) {
      profileName.textContent = nameInput.value;
      profileJob.textContent = jobInput.value;
    };
    const elemCardNew = elemTarget.querySelector('.popup__input_type_place-name');
    if (elemCardNew !== null) {
      const name = nameCard.value;
      const link = linkImageCard.value;
      const title = nameCard.value;
      assambleCard(name, link, title);
      nameCard.value = '';
      linkImageCard.value = '';
    };
    const elemCancel = elemTarget.closest('.popup');
    elemCancel.classList.remove('popup_opened');
  });
});

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
    showForm(formPopupView);
  });
});

closePopupButtons.forEach(canselItem => {
  canselItem.addEventListener('click', function(evt){
    const elemTarget = evt.target;
    const elemCancel = elemTarget.closest('.popup');
    elemCancel.classList.remove('popup_opened');
  });
});