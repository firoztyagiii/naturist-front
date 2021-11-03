export class UpdateEmailView {
  constructor() {
    this.otpBtn = document.querySelector(".send-otp-btn");
  }
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
    this.otpBtn.addEventListener("click", async () => {
      try {
        this.updateUI();
        const input = this.getInput();
        await handler(input, token);
        this.resetUI();
      } catch (err) {
        // FIXME:
      }
    });
  }
}
