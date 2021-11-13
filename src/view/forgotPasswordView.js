export class ForgotPasswordView {
  constructor() {
    this.resetBtn = document.querySelector(".forgot-btn");
  }
  getInput() {
    const email = document.getElementById("email");
    return {
      email: email.value,
    };
  }

  updateUI() {
    const resetBtn = document.querySelector(".forgot-btn");
    const loader = document.querySelector(".loader");
    resetBtn.classList.add("hidden");
    loader.classList.remove("hidden");
  }

  defaultUI() {
    const resetBtn = document.querySelector(".forgot-btn");
    const loader = document.querySelector(".loader");
    resetBtn.classList.remove("hidden");
    loader.classList.add("hidden");
  }

  resetPassword(resetPasswordHander) {
    this.resetBtn.addEventListener("click", async () => {
      this.updateUI();
      const email = this.getInput();
      await resetPasswordHander(email);
      this.defaultUI();
    });
  }
}
