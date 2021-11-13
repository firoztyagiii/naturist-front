import { Spinner } from "./spinner";
import { HOSTING } from "../model/model";
const spinner = new Spinner();

export class IndexView {
  constructor() {
    this.navBarList = document.querySelector(".list");
  }

  updateUI(userData) {
    const initNavbar = document.querySelector(".user-not-loggedin");
    const toShowNavBar = document.querySelector(".user-loggedin");
    const username = document.querySelector(".user-name");
    initNavbar.classList.add("hidden");
    toShowNavBar.classList.remove("hidden");
    const userImg = document.querySelector(".user-image");
    username.innerText = `Welcome, ${userData.data.user.name.split(" ")[0]}`;
    userImg.src = `${HOSTING}${userData.data.user.photo}`;
    spinner.hideSpinner();
  }

  defaultUI() {
    const initNavbar = document.querySelector(".user-not-loggedin");
    const toShowNavBar = document.querySelector(".user-loggedin");
    initNavbar.classList.remove("hidden");
    toShowNavBar.classList.add("hidden");
  }
}
