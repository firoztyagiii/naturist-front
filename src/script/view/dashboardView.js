import { IndexView } from "./indexView";

export class DashboardView {
  constructor() {
    this.passwordUpdateBtn = document.querySelector(".password-save-btn");
    this.logoutBtn = document.querySelector(".log-out-btn");
    this.nameUpdateBtn = document.querySelector(".name-save-btn");
    this.emailUpdateBtn = document.querySelector(".email-save-btn");
  }

  setInput(user) {
    const accountName = document.getElementById("account-name");
    accountName.value = user.data.user.name;
    const accountEmail = document.getElementById("account-email");
    accountEmail.value = user.data.user.email;
  }

  getPasswordInput() {
    const currentPassword = document.getElementById("current-password").value;
    const newPassword = document.getElementById("new-password").value;
    const confirmNewPassword = document.getElementById("confirm-new-password").value;
    return {
      currentPassword,
      newPassword,
      confirmNewPassword,
    };
  }

  getNameInput() {
    const name = document.getElementById("account-name").value;
    return { name };
  }

  getEmailInput() {
    const email = document.getElementById("account-email").value;
    return { email };
  }

  resetInput() {
    document.getElementById("current-password").value = "";
    document.getElementById("new-password").value = "";
    document.getElementById("confirm-new-password").value = "";
  }

  updatePasswordBtnUI() {
    this.passwordUpdateBtn.textContent = "Updating...";
  }

  resetPasswordBtnUI() {
    this.passwordUpdateBtn.textContent = "Update Password";
  }

  updateNameBtnUI() {
    this.nameUpdateBtn.textContent = "Updating...";
  }

  resetNameBtnUI() {
    this.nameUpdateBtn.textContent = "Update Name";
  }

  updateEmailBtnUI() {
    this.emailUpdateBtn.textContent = "Updating...";
  }
  resetEmailBtnUI() {
    this.emailUpdateBtn.textContent = "Update Email";
  }

  updateData(passwordUpdateHandler, nameUpdateHandler, emailUpdateHandler, logout, view) {
    this.passwordUpdateBtn.addEventListener("click", (e) => {
      e.preventDefault();
      passwordUpdateHandler(view);
    });
    this.nameUpdateBtn.addEventListener("click", (e) => {
      e.preventDefault();
      nameUpdateHandler(view);
    });
    this.emailUpdateBtn.addEventListener("click", (e) => {
      e.preventDefault();
      emailUpdateHandler(view);
    });
    this.logoutBtn.addEventListener("click", async () => {
      const indexView = new IndexView();
      await logout(indexView);
    });
  }
}
