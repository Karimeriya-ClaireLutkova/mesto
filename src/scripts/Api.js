export default class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}cards`, {headers: this._headers})
      .then((res) => this._checkResponseRequest(res))
      .catch((err) => {
        console.log(err);
      })
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}users/me`, {headers: this._headers})
    .then((res) => this._checkResponseRequest(res))
    .catch((err) => {
      console.log(err);
    })
  }

  editProfileInfo(item) {
    return fetch(`${this._baseUrl}users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: item.name,
        about: item.about,
      }),
    })
    .then((res) => this._checkResponseRequest(res))
    .catch((err) => {
      console.log(err);
    })
  }

  editProfileAvatar(item) {
    return fetch(`${this._baseUrl}users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: item.avatar,
      }),
    })
    .then((res) => this._checkResponseRequest(res))
    .catch((err) => {
      console.log(err);
    })
  }

  addCardNew(item) {
    return fetch(`${this._baseUrl}cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: item.name,
        link: item.link,
      }),
    })
    .then((res) => this._checkResponseRequest(res))
    .catch((err) => {
      console.log(err);
    })
  }

  _checkResponseRequest(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }



  // другие методы работы с API
}