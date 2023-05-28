export default class UserInfo {
  constructor(selectorNameProfile, selectorJobProfile) {
    this._profileName = document.querySelector(selectorNameProfile);
    this._profileJob = document.querySelector(selectorJobProfile);
  }

  getUserInfo() {  
    this._infoProfile = {name: this._profileName.textContent, profession: this._profileJob.textContent};
    return this._infoProfile;
  }

  setUserInfo(items) {
    this._profileName.textContent = items.name;
    this._profileJob.textContent= items.profession;
  }
}