import { callAPI } from "../model/model";
import { Spinner } from "../view/spinner";
import { LoginView } from "../view/loginView";
import { IndexView } from "../view/indexView";
import { Popup } from "../view/popup";
import { SignupView } from "../view/signupView";
import { TourView } from "../view/tourView";

const spinner = new Spinner();
const indexView = new IndexView();
const popup = new Popup();

export const checkForPageType = async (fetchTours, signUp, login, logout) => {
  spinner.showSpinner();

  //Verify account link
  if (window.location.pathname === "/activate-account.html") {
    const verifyToken = window.location.search.split("=")[1];
    const response = await callAPI(
      `/api/user/activate-account?verify=${verifyToken}`,
      "GET"
    );

    if (response.status === "success") {
      window.location.href = "/login.html?activated=true";
    } else {
      document.write(response.message);
    }
  } else {
    spinner.showSpinner();
  }

  //Show popup if came from the activation page
  if (
    window.location.pathname === "/login.html" &&
    window.location.search === "?activated=true"
  ) {
    setTimeout(() => {
      popup.showPopup("Account verified");
      popup.hidePopup();
    }, 500);
  }

  //Fetch tours if your on Tours page
  if (window.location.pathname == "/tours.html") {
    const tourView = new TourView();
    await fetchTours(tourView);
  }

  //Add login Event for login page
  if (window.location.pathname == "/login.html") {
    const loginView = new LoginView();
    loginView.loginBtn.addEventListener("click", function () {
      login(loginView);
    });
  }

  //Add Sign up event for sign up page
  if (window.location.pathname == "/signup.html") {
    const signupView = new SignupView();
    signupView.signupbtn.addEventListener("click", function () {
      signUp(signupView);
    });
  }

  //Add logout event
  if (indexView.getlogoutBtn()) {
    indexView.getlogoutBtn().addEventListener("click", function () {
      logout(indexView);
    });
  }
};

export const isUserLoggedIn = async () => {
  try {
    const user = await callAPI("/api/user/about-me", "GET");
    if (user.status === "success") {
      indexView.updateUI(user);
    }
    spinner.hideSpinner();
  } catch (err) {
    console.log(err);
  }
};
