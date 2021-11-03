export class TwoFaView {
  constructor() {
    this.otpBtn = document.querySelector(".login-btn");
  }

  getInput() {
    const OTP = document.getElementById("email").value;
    return { OTP };
  }

  getToken() {
    const token = window.location.search.split("=")[1];
    return token;
  }

  twoFA(handler) {
    const token = this.getToken();
    if (!token) {
      return (window.location.href = "/login.html");
    }

    this.otpBtn.addEventListener("click", async () => {
      await handler(token);
    });
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
}
