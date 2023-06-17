export default class UserInfo {
  constructor(selectorNameProfile, selectorJobProfile, selectorAvatarProfile) {
    this._profileName = document.querySelector(selectorNameProfile);
    this._profileJob = document.querySelector(selectorJobProfile);
    this._profileAvatar = document.querySelector(selectorAvatarProfile);
  }

  getUserInfo() {
    this._infoProfile = {name: this._profileName.textContent, about: this._profileJob.textContent};
    return this._infoProfile;
  }

  setUserInfo(items) {
    this._profileName.textContent = items.name;
    this._profileJob.textContent= items.about;
  }

  setUserAvatar(item) {
    this._profileAvatar.src = item.avatar;
  }
}