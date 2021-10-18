import { DashboardView } from "../view/dashboardView";
import { logout } from "./userController";
import { Spinner } from "../view/spinner";
import { IndexView } from "../view/indexView";
import { user } from "../model/model";
import { callAPI } from "../model/model";
import { Popup } from "../view/popup";
import { isLoggedIn } from "./authController";

const call = async (input) => {
  const response = await callAPI("/api/user/update-me/password", "POST", input);
  const popup = new Popup();
  popup.showPopup(response.message);
  popup.hidePopup();
  // if (response.status === "success") {
  //   setTimeout(async () => {
  //     await logout(new IndexView());
  //   }, 2000);
  // }
};

export const dashBoardController = () => {
  if (window.location.pathname == "/dashboard.html") {
    if (!isLoggedIn) {
      return (window.location.href = "/login.html?notLoggedIn=true");
    }
    const spinner = new Spinner();
    const dashboardView = new DashboardView();
    const indexView = new IndexView();
    // dashboardView.setInput(user);
    dashboardView.getLogoutBtn().addEventListener("click", function () {
      spinner.showSpinner();
      logout(indexView);
    });
    dashboardView.passwordSaveBtn.addEventListener("click", async function (e) {
      e.preventDefault();
      dashboardView.updateUI();
      const input = dashboardView.getChangePasswordInput();
      await call(input);
      dashboardView.defaultUI();
    });
    spinner.hideSpinner();
  }
};
