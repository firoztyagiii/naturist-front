export class UpdateEmailView {
  constructor() {}
  getInput() {
    const OTP = document.querySelector("[name='update-email']").value;
    return {
      OTP,
    };
  }
  updateUI() {
    const sendOtpText = document.querySelector(".send-otp-text");
    const loader = document.querySelector(".loader");
    sendOtpText.classList.add("hidden");
    loader.classList.remove("hidden");
  }
  resetUI() {
    const sendOtpText = document.querySelector(".send-otp-text");
    const loader = document.querySelector(".loader");
    sendOtpText.classList.remove("hidden");
    loader.classList.add("hidden");
  }

  updateEmail(handler) {
    const token = window.location.search.split("=")[1];
    if (!token) {
      return (window.location.href = "/");
    }
    handler(token);
  }
}
