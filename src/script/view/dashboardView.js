export class DashboardView {
  constructor() {}

  setInput(user) {
    const accountName = document.getElementById("account-name");
    accountName.value = user.name;
    const accountEmail = document.getElementById("account-email");
    accountEmail.value = user.email;
  }
  notLoggedIn() {
    window.location.href = "/login.html?notLoggedIn=true";
  }

  getLogoutBtn() {
    const logoutBtn = document.querySelector(".log-out-btn");
    return logoutBtn;
  }
}
