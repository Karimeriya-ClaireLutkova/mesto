export default class UserInfo {
  constructor(selectorNameProfile, selectorJobProfile) {
    this._profileName = document.querySelector(selectorNameProfile);
    this._profileJob = document.querySelector(selectorJobProfile);
    this._name = this._profileName.textContent;
    this._job = this._profileJob.textContent;
  }

  getUserInfo() {  
    this._infoProfile = {name: this._name, profession: this._job};
    return this._infoProfile;
  }

  setUserInfo(items) {
    this._profileName.textContent = items.name;
    this._profileJob.textContent= items.profession;
  }
}