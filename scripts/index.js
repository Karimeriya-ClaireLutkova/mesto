const redactor = document.querySelector('.profile__button_edit');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__profession');
const elementsPage = document.querySelector('.elements');
const formEdit = document.querySelector('.popup');
const cancel = document.querySelector('.popup__button_close');
const formElement = document.querySelector('.popup__form');
const nameInput = formElement.querySelector('.popup__input_type_name');
const jobInput = formElement.querySelector('.popup__input_type_profession');
const cardTemplate = document.querySelector('#card').content;
const cardElement = cardTemplate.querySelector('.element').cloneNode(true);


const initialCards = [
  {
    name: 'Карачаевск',
    link: './images/Карачаевск.jpg',
    title: 'Церковь в Карачаевске'
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
    name: 'Домбай',
    link: './images/Домбай.jpg',
    title: 'Лес на горной территории Домбая'
  },
  {
    name: 'Карачаево-Черкесcия',
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

function render() {
  cardInfo.forEach(showCard);
}

function showCard({ name, link, title }) {
  const cardTemplate = document.querySelector('#card').content;
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  cardElement.querySelector('.element__title').textContent = name;
  cardElement.querySelector('.element__image').src = link;
  cardElement.querySelector('.element__image').alt = title;
  elementsPage.append(cardElement);
}
render();

function showForm() {  
  formEdit.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function closingForm() {
  formEdit.classList.remove('popup_opened');
}

function handleFormSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closingForm();
};

redactor.addEventListener('click', showForm);
cancel.addEventListener('click', closingForm);
formElement.addEventListener('submit', handleFormSubmit);
const deleteCard = elementsPage.querySelectorAll('.element__button_delete');
deleteCard.forEach(deleteCardItem => {
  deleteCardItem.addEventListener('click', function(evt){
    const elemTarget = evt.target;
    const elemDel = elemTarget.closest('.element');
    elemDel.remove();
  });
});