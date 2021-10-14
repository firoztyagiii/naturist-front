import { LoginElements } from "../view/loginView";
import { callAPI } from "../model/model";

const loginElements = new LoginElements();

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
    //   window.location.href = "/";
  } catch (err) {
    console.log(err);
  }
};

const init = async () => {
  try {
    if (loginElements.loginBtn) {
      loginElements.loginBtn.addEventListener("click", login);
    }
    const response = await callAPI("/api/user/about-me", "GET");
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};

init();
