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
}
