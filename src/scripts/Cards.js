export default class Card {
  constructor(item, userInfoId, templateSelector, handleCardClick, handleCardConfirm) {
    this._name = item.name;
    this._link = item.link;
    this._title = item.name;
    this._userId = userInfoId._id;  
    this._cardId = item._id;
    this._cardOwner = item.owner._id; 
    this._handleCardClick = handleCardClick;
    this._handleCardConfirm = handleCardConfirm;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const cardElement = document
    .querySelector(this._templateSelector)
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

  _likeCard() {
    this._buttonLikeCard.classList.toggle('element__button_like_active');
  }

  _setEventListeners() {
    if (this._cardOwner === this._userId) {
      this._buttonDeleteCard.classList.add('element__button_delete_active'); 
      this._buttonDeleteCard.addEventListener('click', () => {
        this._handleCardConfirm();
      });
    }

    this._imageCard.addEventListener('click', () => {
      this._handleCardClick(this._link, this._title, this._name);
    });

    this._buttonLikeCard.addEventListener('click', () => {
      this._likeCard();
    }); 
   
  }
}