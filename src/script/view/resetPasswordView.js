export class ResetPasswordView {
  constructor() {
    this.resetBtn = document.querySelector(".reset-btn");
  }
  getInput() {
    const password = document.querySelector("[name='new-password']").value;
    const confirmPassword = document.querySelector(
      "[name='confirm-new-password']"
    ).value;
    return {
      password: password.toString(),
      confirmPassword: confirmPassword.toString(),
    };
  }
  updateUI() {
    const loginBtnText = document.querySelector(".reset-btn-text");
    const loader = document.querySelector(".loader");
    loginBtnText.classList.add("hidden");
    loader.classList.remove("hidden");
  }

  defaultUI() {
    const loginBtnText = document.querySelector(".reset-btn-text");
    const loader = document.querySelector(".loader");
    loginBtnText.classList.remove("hidden");
    loader.classList.add("hidden");
  }
}
