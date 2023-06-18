export default class Card {
  constructor({item, userInfoId, addCardLike, deleteCardLike, templateSelector, handleCardClick, handleCardConfirm}) {
    this._name = item.name;
    this._link = item.link;
    this._title = item.name;
    this._userId = userInfoId._id;
    this._cardId = item._id;
    this._likes = item.likes;
    this._cardOwner = item.owner._id;
    this._handleCardClick = handleCardClick;
    this._addCardLike = addCardLike;
    this._deleteCardLike = deleteCardLike;
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
    this._titleCard.textContent = this._name;
    this._imageCard.src = this._link;
    this._imageCard.alt = this._title;
    this._counterLike.textContent = this._likes.length;

    return this._element;
  }

  _likeCard() {
    this._buttonLikeCard.classList.toggle('element__button_like_active');
  }

  _checkLikeCard() {
    if(!this._buttonLikeCard.classList.contains('element__button_like_active')) {
      this._addCardLike(this._cardId)
        .then((res) => {
          this._data = res;
          this._counterLike.textContent = res.likes.length;
        })
        .catch((err) => console.log(err));
      this._likeCard();
    } else {
      this._deleteCardLike(this._cardId)
        .then((res) => {
          this._data = res;
          this._counterLike.textContent = res.likes.length;
        })
        .catch((err) => console.log(err));
      this._likeCard();
    }
  }

  _setEventListeners() {
    if (this._cardOwner === this._userId) {
      this._buttonDeleteCard.classList.add('element__button_delete_active');
      this._buttonDeleteCard.addEventListener('click', () => {
        this._deleteCard()
      });
    }

    this._imageCard.addEventListener('click', () => {
      this._handleCardClick(this._link, this._title, this._name);
    });

    this._buttonLikeCard.addEventListener('click', () => {
      this._checkLikeCard();
    });
  }

  _deleteCard() {
    const item = {
      card: this._element,
      cardId: this._cardId,
    };

    this._handleCardConfirm(item);
  }
}