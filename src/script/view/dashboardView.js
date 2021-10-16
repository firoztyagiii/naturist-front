export class DashboardView {
  constructor() {}

  setInput(user) {
    const currentUser = JSON.parse(user);
    const accountName = document.getElementById("account-name");
    accountName.value = currentUser.user.name;
    const accountEmail = document.getElementById("account-email");
    accountEmail.value = currentUser.user.email;
  }
  notLoggedIn() {
    window.location.href = "/login.html?notLoggedIn=true";
  }

  getLogoutBtn() {
    const logoutBtn = document.querySelector(".log-out-btn");
    return logoutBtn;
  }
}
