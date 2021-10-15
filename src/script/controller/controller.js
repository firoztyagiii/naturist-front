import { LoginElements } from "../view/loginView";
import { IndexView } from "../view/indexView";
import { callAPI } from "../model/model";
import { Spinner } from "../view/spinner";
import { TourView } from "../view/tourView";
import { SignupView } from "../view/signupView";
import { Popup } from "../view/popup";

const loginElements = new LoginElements();
const indexViewElements = new IndexView();
const spinner = new Spinner();
const signupView = new SignupView();
const popup = new Popup();

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
    window.location.href = "/";
    spinner.hideSpinner();
  } catch (err) {
    console.log(err);
  }
};

const fetchTours = async () => {
  const response = await callAPI("/api/tour", "GET");
  const tourView = new TourView();
  response.data.tours.forEach((tour) => {
    tourView.generateMarkup(tour);
  });
};

const signUp = async () => {
  signupView.updateUI();
  const input = signupView.getInputs();
  const response = await callAPI("/api/user/signup", "POST", input);
  if (response.data) popup.showPopup(response.data.message);
  else popup.showPopup(response.message);
  signupView.resetInput();
  setTimeout(() => {
    popup.hidePopup();
  }, 3000);
  signupView.defaultUI();
};

const init = async () => {
  try {
    if (window.location.pathname === "/activate-account.html") {
      const verifyToken = window.location.search.split("=")[1];
      const response = await callAPI(
        `/api/user/activate-account?verify=${verifyToken}`,
        "GET"
      );

      if (response.status === "success") {
        window.location.href = "/login.html";
      } else {
        document.write(response.message);
      }
    } else {
      spinner.showSpinner();
    }
    if (loginElements.loginBtn) {
      loginElements.loginBtn.addEventListener("click", login);
    }
    await isUserLoggedIn();
    if (window.location.pathname == "/tours.html") {
      await fetchTours();
    }
    if (indexViewElements.getlogoutBtn()) {
      indexViewElements.getlogoutBtn().addEventListener("click", logoutBtnCall);
    }

    if (window.location.pathname == "/signup.html") {
      signupView.signupbtn.addEventListener("click", signUp);
    }
  } catch (err) {
    console.log(err);
  }
};

init();
