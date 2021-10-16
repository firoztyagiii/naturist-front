export class ForgotPasswordView {
  constructor() {
    this.resetBtn = document.querySelector(".reset-btn");
  }
  getInput() {
    const email = document.getElementById("email");
    return email.value;
  }
}
