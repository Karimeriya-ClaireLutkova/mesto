const initialCards = [
  {
    name: 'Карачаево-Черкесcия',
    link: './images/Карачаевск.jpg',
    title: 'Церковь в Карачаевске'
  },
  {
    name: 'Домбай',
    link: './images/Домбай.jpg',
    title: 'Лес на горной территории Домбая'
  },
  {
    name: 'Гора Эльбрус',
    link: './images/Гора_Эльбрус.jpg',
    title: 'Степи у Эльбруса'
  },
  {
    name: 'Домбай',
    link: './images/Домбай.jpg',
    title: 'Лес на горной территории Домбая'
  },
  {
    name: 'Гора Эльбрус',
    link: './images/Гора_Эльбрус.jpg',
    title: 'Степи у Эльбруса'
  },
  {
    name: 'Карачаевск',
    link: './images/Карачаевск.jpg',
    title: 'Церковь в Карачаевске'
  }
];

const cardInfo = initialCards.map(function (item) {
  return {
    name: item.name,
    link: item.link,
    title: item.title,
  };
});

const redactor = document.querySelector('.profile__button_edit');
const adding = document.querySelector('.profile__button_add');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__profession');
const elementsPage = document.querySelector('.elements');
const formsPopupAll = [];
const formPopupEdit = document.querySelector('.popup-info');
const formPopupCard = document.querySelector('.popup-cardNew');
const cancel = document.querySelectorAll('.popup__button_close');
const formElement = document.querySelectorAll('.popup__form');
const formCardEdit = document.querySelector("[name='profile']");
const formCardNew = document.querySelector("[name='new-card']");
const nameInput = formCardEdit.querySelector('.popup__input_type_name');
const jobInput = formCardEdit.querySelector('.popup__input_type_profession');
const cardTemplate = document.querySelector('#card').content;
const cardElement = cardTemplate.querySelector('.element').cloneNode(true);

formsPopupAll.push(formPopupEdit, formPopupCard);
console.log(formsPopupAll);

function render() {
  cardInfo.forEach(showCard);
}

function showCard({ name, link, title }) {
  const cardTemplate = document.querySelector('#card').content;
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  cardElement.querySelector('.element__title').textContent = name;
  cardElement.querySelector('.element__image').src = link;
  cardElement.querySelector('.element__image').alt = title;
  elementsPage.prepend(cardElement);
}
render();

function showForm(index) {  
  formsPopupAll[index].classList.add('popup_opened');
  if (index === 0) {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
  }
}

redactor.addEventListener('click', ()=> showForm(0));
adding.addEventListener('click', ()=> showForm(1));

formElement.forEach(formElementItem => {
  formElementItem.addEventListener('submit', function(evt){
    evt.preventDefault();
    const elemTarget = evt.target;
    const elemProfile = elemTarget.querySelector('.popup__input_type_name');
    if (elemProfile !== null) {
      profileName.textContent = nameInput.value;
      profileJob.textContent = jobInput.value;
    };
    const elemCancel = elemTarget.closest('.popup');
    elemCancel.classList.remove('popup_opened');
  });
});

const deleteCard = elementsPage.querySelectorAll('.element__button_delete');
deleteCard.forEach(deleteCardItem => {
  deleteCardItem.addEventListener('click', function(evt){
    const elemTarget = evt.target;
    const elemDel = elemTarget.closest('.element');
    elemDel.remove();
  });
});

cancel.forEach(canselItem => {
  canselItem.addEventListener('click', function(evt){
    const elemTarget = evt.target;
    const elemCancel = elemTarget.closest('.popup');
    elemCancel.classList.remove('popup_opened');
  });
});