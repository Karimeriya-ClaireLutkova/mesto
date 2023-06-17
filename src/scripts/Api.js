export default class Api {
  constructor(options) {
    this._baseUrl = options.serverUrl;
    this._headers = options.headers;
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}cards`, this._headers)
      .then((res) => this._checkResponseRequest(res));
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