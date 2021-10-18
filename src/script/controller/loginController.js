import { Popup } from "../view/popup";
import { LoginView } from "../view/loginView";
import { login } from "./userController";

const popup = new Popup();

export const loginController = () => {
  if (
    window.location.pathname === "/login.html" &&
    window.location.search === "?activated=true"
  ) {
    setTimeout(() => {
      popup.showPopup("Account verified");
      popup.hidePopup();
    }, 500);
  }

  //Add login Event for login page
  if (window.location.pathname == "/login.html") {
    const loginView = new LoginView();
    loginView.loginBtn.addEventListener("click", function () {
      login(loginView);
    });
  }

  if (
    window.location.pathname == "/login.html" &&
    window.location.search === "?notLoggedIn=true"
  ) {
    setTimeout(() => {
      popup.showPopup("You are not logged in! Please log in.");
      popup.hidePopup();
    }, 500);
  }
};
