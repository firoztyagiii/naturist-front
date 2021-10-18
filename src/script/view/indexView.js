import { Spinner } from "./spinner";

const spinner = new Spinner();

export class IndexView {
  constructor() {
    this.navBarList = document.querySelector(".list");
  }

  updateUI(userData) {
    const initNavbar = document.querySelector(".user-not-loggedin");
    const toShowNavBar = document.querySelector(".user-loggedin");
    const username = document.querySelector(".user-name");
    username.innerText = `Welcome, ${userData.data.user.name.split(" ")[0]}`;
    initNavbar.classList.add("hidden");
    toShowNavBar.classList.remove("hidden");
    spinner.hideSpinner();
  }

  defaultUI() {
    const initNavbar = document.querySelector(".user-not-loggedin");
    const toShowNavBar = document.querySelector(".user-loggedin");
    initNavbar.classList.remove("hidden");
    toShowNavBar.classList.add("hidden");
  }

  getlogoutBtn() {
    const logoutbtn = document.querySelector(".logout-btn");
    if (logoutbtn) {
      return logoutbtn;
    }
  }
}
