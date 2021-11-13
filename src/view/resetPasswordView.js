export class ResetPasswordView {
  constructor() {
    this.resetBtn = document.querySelector(".reset-btn");
  }
  getInput() {
    const password = document.querySelector("[name='new-password']").value;
    const confirmPassword = document.querySelector("[name='confirm-new-password']").value;
    return {
      password: password.toString(),
      confirmPassword: confirmPassword.toString(),
    };
  }
  updateUI() {
    const loginBtnText = document.querySelector(".reset-btn");
    const loader = document.querySelector(".loader");
    loginBtnText.classList.add("hidden");
    loader.classList.remove("hidden");
  }

  defaultUI() {
    const loginBtnText = document.querySelector(".reset-btn");
    const loader = document.querySelector(".loader");
    loginBtnText.classList.remove("hidden");
    loader.classList.add("hidden");
  }

  resetPassword(resetPasswordHandler) {
    const token = window.location.search.split("=")[1];
    if (!token) {
      return (window.location.href = "/");
    }
    this.resetBtn.addEventListener("click", async () => {
      try {
        this.updateUI();
        const input = this.getInput();
        if (input.password !== input.confirmPassword) {
          popup.showPopup("Passwords do not match");
          popup.hidePopup();
          this.defaultUI();
          return;
        } else {
          await resetPasswordHandler(input, token);
          this.defaultUI();
        }
      } catch (err) {
        // FIXME:
      }
    });
  }
}
