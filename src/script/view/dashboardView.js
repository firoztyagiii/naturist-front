export class DashboardView {
  constructor() {
    this.passwordSaveBtn = document.querySelector(".password-save-btn");
    this.loader = document.querySelector(".loader");
    this.passwordText = document.querySelector(".password-save-text");
  }

  setInput(user) {
    const accountName = document.getElementById("account-name");
    accountName.value = user.data.user.name;
    const accountEmail = document.getElementById("account-email");
    accountEmail.value = user.data.user.email;
  }

  notLoggedIn() {
    window.location.href = "/login.html?notLoggedIn=true";
  }

  getChangePasswordInput() {
    const currentPassword = document.getElementById("current-password").value;
    const newPassword = document.getElementById("new-password").value;
    const confirmNewPassword = document.getElementById(
      "confirm-new-password"
    ).value;
    return {
      currentPassword,
      newPassword,
      confirmNewPassword,
    };
  }

  resetInput() {
    document.getElementById("current-password").value = "";
    document.getElementById("new-password").value = "";
    document.getElementById("confirm-new-password").value = "";
  }

  updateUI() {
    this.passwordText.classList.add("hidden");
    this.loader.classList.remove("hidden");
  }

  defaultUI() {
    this.passwordText.classList.remove("hidden");
    this.loader.classList.add("hidden");
  }

  getLogoutBtn() {
    const logoutBtn = document.querySelector(".log-out-btn");
    return logoutBtn;
  }
}
