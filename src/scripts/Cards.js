export default class Card {
  constructor(item, userInfoId, handleCardLike, templateSelector, handleCardClick, handleCardConfirm) {
    this._name = item.name;
    this._link = item.link;
    this._title = item.name;
    this._userId = userInfoId._id;
    this._cardId = item._id;
    this._likes = item.likes;
    this._isLikedInfo = this._isLiked();
    this._cardOwner = item.owner._id;
    this._handleCardClick = handleCardClick;
    this._handleCardLike = handleCardLike;
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
    this._counterLike = this._element.querySelector('.element__counter-like');
   
    this._setEventListeners();
    this._updateLikesView();
    this._titleCard.textContent = this._name;
    this._imageCard.src = this._link;
    this._imageCard.alt = this._title;
    this._counterLike.textContent = this._likes.length;

    return this._element;
  }

  checkLikeCard(item) {
    this._data = item 
    this._likes = item.likes;
    this._updateLikesView(this._likes)
  }

  _isLiked() {
    return this._likes.some(like => like._id === this._userId)
  }

  _likeCard() {
    this._handleCardLike(this._cardId, this._isLikedInfo);
  }

  _updateLikesView(item) {
    if (item) {
      this._likes = item;
      this._isLikedInfo = this._isLiked();
      this._counterLike.textContent = item.length;
    }
    this._buttonLikeCard.classList.toggle('element__button_like_active', this._isLikedInfo);
  }

  _setEventListeners() {
    if (this._cardOwner === this._userId) {
      this._buttonDeleteCard.classList.add('element__button_delete_active');
      this._buttonDeleteCard.addEventListener('click', () => {
        this._initialDeleteCard()
      });
    }

    this._imageCard.addEventListener('click', () => {
      this._handleCardClick(this._link, this._title, this._name);
    });

    this._buttonLikeCard.addEventListener('click', () => this._likeCard());
  }

  _initialDeleteCard() {
    const item = {
      card: this._element,
      cardId: this._cardId,
    };

    this._handleCardConfirm(item);
  }

  deleteCard() {
    this._element.remove();
  }
}