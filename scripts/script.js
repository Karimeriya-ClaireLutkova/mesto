let redactor = document.querySelector('.profile__button_edit')
function showForm() {
  let formEdit = document.querySelector('.popup')
  formEdit.style.visibility = 'visible';
}
redactor.addEventListener('click', showForm);