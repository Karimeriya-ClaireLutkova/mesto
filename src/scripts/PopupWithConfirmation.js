import Popup from './Popup.js';
export default class PopupWithConfirmation extends Popup {
  constructor({selectorPopup, handleFormSubmit}) {
    super(selectorPopup);
    this._buttonAccept = this._popup.querySelector('.popup__button_accept');
    this._handleFormSubmit = handleFormSubmit;
  }

  deleteCardInfo(card, cardId) {
    this._card = card;
    this._cardId = cardId;
  }

  setEventListeners() {
    super.setEventListeners();
    this._buttonAccept.addEventListener('click', () => this._handleFormSubmit(this._card, this._cardId));
  }
}