let redactor = document.querySelector('.profile__button_edit');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__profession');
let formEdit = document.querySelector('.popup');
let cancel = document.querySelector('.popup__button_close');
let formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__input_type_name');
let jobInput = formElement.querySelector('.popup__input_type_profession');
let nameProfileValue = profileName.getAttribute('value');
let jobProfileValue = profileJob.getAttribute('value');


function showForm() {  
  formEdit.classList.add('popup_visible');
  nameInput.setAttribute('value', nameProfileValue);
  jobInput.setAttribute('value', jobProfileValue);
}

function closingForm() {
  formEdit.classList.remove('popup_visible');
  nameInput.value = nameProfileValue;
  jobInput.value = jobProfileValue;
}

function handleFormSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closingForm()
}

redactor.addEventListener('click', showForm);
cancel.addEventListener('click', closingForm);
formElement.addEventListener('submit', handleFormSubmit);







