import { Spinner } from "../view/spinner";
import { Popup } from "../view/popup";
import { callAPI } from "../model/model";

const spinner = new Spinner();
const popup = new Popup();

export const login = async (loginView) => {
  try {
    const input = loginView.getLoginInputs();
    console.log(input);
    loginView.updateUI();
    const response = await callAPI("/api/user/login", "POST", input);
    if (response.status === "Fail") {
      loginView.defaultUI();
      loginView.resetInput();
      popup.showPopup(response.message);
      popup.hidePopup();
    } else {
      loginView.defaultUI();
      window.location.href = "/";
    }
  } catch (err) {
    console.log(err);
  }
};

export const logout = async (indexView) => {
  try {
    spinner.showSpinner();
    await callAPI("/api/user/logout", "GET");
    indexView.defaultUI();

    window.localStorage.removeItem("userData");
    window.localStorage.removeItem("userLoggedIn");

    window.location.href = "/";
    spinner.hideSpinner();
  } catch (err) {
    console.log(err);
  }
};

export const signUp = async (signupView) => {
  signupView.updateUI();
  const input = signupView.getInputs();
  const response = await callAPI("/api/user/signup", "POST", input);
  if (response.data) popup.showPopup(response.data.message);
  else popup.showPopup(response.message);
  signupView.resetInput();
  popup.hidePopup();
  signupView.defaultUI();
};
