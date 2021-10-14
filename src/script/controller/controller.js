import { LoginElements } from "../view/loginView";
import { loginAPICall, isLoggedIn } from "../model/model";

const loginElements = new LoginElements();

const login = async () => {
  const input = loginElements.getLoginInputs();
  loginElements.updateUI();
  const response = await loginAPICall(input);
  if (response.status === "Fail") {
    loginElements.defaultUI();
    return console.log(response.message);
  }
  loginElements.defaultUI();
  //   window.location.href = "/";
};

const init = async () => {
  if (loginElements.loginBtn) {
    loginElements.loginBtn.addEventListener("click", login);
  }
  const response = await isLoggedIn();
  console.log(response);
};

init();
