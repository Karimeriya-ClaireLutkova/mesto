import {imageViewCard, imageViewSubtitle, popupViewCard} from './constants.js';
import { openPopup } from './index.js';
export default class Card {
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