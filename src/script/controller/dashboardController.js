import { DashboardView } from "../view/dashboardView";
import { logout } from "./userController";
import { Spinner } from "../view/spinner";
import { IndexView } from "../view/indexView";

export const dashBoardController = () => {
  if (window.location.pathname == "/dashboard.html") {
    const spinner = new Spinner();
    const dashboardView = new DashboardView();
    const indexView = new IndexView();
    dashboardView.setInput({ name: "FAKE NAME", email: "FAKE EMAIL" });
    dashboardView.getLogoutBtn().addEventListener("click", function () {
      spinner.showSpinner();
      logout(indexView);
    });
    spinner.hideSpinner();
  }
};
