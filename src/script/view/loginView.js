export class LoginView {
  constructor() {
    this.loginBtn = document.querySelector(".login-btn");
  }

  getLoginInputs() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    return { email, password };
  }

  updateUI() {
    const loginBtnText = document.querySelector(".login-btn-text");
    const loader = document.querySelector(".loader");
    loginBtnText.classList.add("hidden");
    loader.classList.remove("hidden");
  }

  defaultUI() {
    const loginBtnText = document.querySelector(".login-btn-text");
    const loader = document.querySelector(".loader");
    loginBtnText.classList.remove("hidden");
    loader.classList.add("hidden");
  }
  resetInput() {
    const password = (document.getElementById("password").value = "");
  }
  disableLoginBtn() {
    this.loginBtn.disabled = true;
  }
}
