import { LoginElements } from "../view/loginView";
import { IndexView } from "../view/indexView";
import { callAPI } from "../model/model";
import { Spinner } from "../view/spinner";

const loginElements = new LoginElements();
const indexViewElements = new IndexView();
const spinner = new Spinner();

const isUserLoggedIn = async () => {
  try {
    const user = await callAPI("/api/user/about-me", "GET");
    if (user.status === "success") {
      indexViewElements.updateUI(user);
      spinner.hideSpinner();
    }
    spinner.hideSpinner();
  } catch (err) {
    console.log(err);
  }
};

const login = async () => {
  try {
    const input = loginElements.getLoginInputs();
    loginElements.updateUI();
    const response = await callAPI("/api/user/login", "POST", input);
    if (response.status === "Fail") {
      loginElements.defaultUI();
      console.log(response.message);
    }
    loginElements.defaultUI();

    window.location.href = "/";
    // spinner.showSpinner();
  } catch (err) {
    console.log(err);
  }
};

const logoutBtnCall = async () => {
  console.log("logging out");
  try {
    spinner.showSpinner();
    await callAPI("/api/user/logout", "GET");
    indexViewElements.defaultUI();
    spinner.hideSpinner();
  } catch (err) {
    console.log(err);
  }
};

const init = async () => {
  try {
    spinner.showSpinner();
    if (loginElements.loginBtn) {
      loginElements.loginBtn.addEventListener("click", login);
    }
    await isUserLoggedIn();
    indexViewElements.getlogoutBtn().addEventListener("click", logoutBtnCall);
  } catch (err) {
    console.log(err);
  }
};

init();
