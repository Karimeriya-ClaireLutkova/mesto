let redactor = document.querySelector('.profile__button_edit');
function showForm() {
  let formEdit = document.querySelector('.popup');
  formEdit.style.visibility = 'visible';
}
redactor.addEventListener('click', showForm);

let cancel = document.querySelector('.popup__button_close');
function closingForm() {
  let formElement = document.querySelector('.popup__form');
  let nameInput = formElement.querySelector('.popup__input_type_name');
  let jobInput = formElement.querySelector('.popup__input_type_profession');
  nameInput.value = 'Жак-Ив Кусто'
  jobInput.value = 'Исследователь океана'
  let formEdit = document.querySelector('.popup');
  formEdit.style.visibility = 'hidden';
}
cancel.addEventListener('click', closingForm);

let formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__input_type_name');
let jobInput = formElement.querySelector('.popup__input_type_profession');
function handleFormSubmit (evt) {
    evt.preventDefault();
    nameInput.value;
    jobInput.value;
    let profileName = document.querySelector('.profile__name');
    let profileJob = document.querySelector('.profile__profession');
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;    
}
formElement.addEventListener('submit', handleFormSubmit);
function closeSaveInfo() {
  document.querySelector('.popup').style.visibility = 'hidden';
}
formElement.addEventListener('submit', closeSaveInfo);

