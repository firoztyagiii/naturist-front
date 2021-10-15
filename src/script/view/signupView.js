export class SignupView {
  constructor() {
    this.signupbtn = document.querySelector(".signup-btn");
  }
  getInputs() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const name = document.getElementById("name").value;
    return {
      email,
      password,
      confirmPassword,
      name,
    };
  }

  resetInput() {
    const password = (document.getElementById("password").value = "");
    const confirmPassword = (document.getElementById("confirm-password").value =
      "");
  }

  updateUI() {
    const loginBtnText = document.querySelector(".signup-btn-text");
    const loader = document.querySelector(".loader");
    loginBtnText.classList.add("hidden");
    loader.classList.remove("hidden");
  }

  defaultUI() {
    const loginBtnText = document.querySelector(".signup-btn-text");
    const loader = document.querySelector(".loader");
    loginBtnText.classList.remove("hidden");
    loader.classList.add("hidden");
  }
}
