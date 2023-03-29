let redactor = document.querySelector('.profile__button_edit')
function showForm() {
  let formEdit = document.querySelector('.popup')
  formEdit.style.visibility = 'visible';
}
redactor.addEventListener('click', showForm);

let cancel = document.querySelector('.popup__button_close')
function closingForm() {
  let formEdit = document.querySelector('.popup')
  formEdit.style.visibility = 'hidden';
}
cancel.addEventListener('click', closingForm);