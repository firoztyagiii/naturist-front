import { Spinner } from "../view/spinner";
import { Popup } from "../view/popup";
import { callAPI } from "../model/model";

const spinner = new Spinner();
const popup = new Popup();

export const login = async (loginView) => {
  try {
    loginView.updateUI();
    const input = loginView.getLoginInputs();
    const response = await callAPI("/api/user/login", "POST", input);
    // console.log(response);
    if (response.data) {
      popup.showPopup(response.message);
      setTimeout(() => {
        window.location.href = `/2fa.html?token=${response.data}`;
      }, 2000);
    }
    if (response.status === "Fail") {
      loginView.defaultUI();
      loginView.resetInput();
      popup.showPopup(response.message);
      popup.hidePopup();
    } else {
      const user = await callAPI("/api/user/about-me", "GET");
      window.sessionStorage.setItem("user", JSON.stringify(user));
      window.sessionStorage.setItem("isUserLoggedIn", true);
      loginView.defaultUI();
      window.location.href = "/";
    }
  } catch (err) {
    console.log(err);
  }
};

export const logout = async (indexView) => {
  try {
    await callAPI("/api/user/logout", "GET");
    indexView.defaultUI();
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

export const updatePassword = async (input) => {
  const response = await callAPI("/api/user/update-me/password", "POST", input);
  popup.showPopup(response.message);
  popup.hidePopup();
};

export const updateName = async (input) => {
  const response = await callAPI("/api/user/update-me/info", "POST", input);
  popup.showPopup(response.message);
  popup.hidePopup();
};

export const updateEmail = async (input) => {
  const response = await callAPI("/api/user/update-me/email", "POST", input);
  popup.showPopup(response.message);
  popup.hidePopup();
};
