import { DashboardView } from "../view/dashboardView";
import { logout } from "./userController";
import { Spinner } from "../view/spinner";
import { IndexView } from "../view/indexView";

const spinner = new Spinner();

export const dashBoardController = () => {
  if (window.location.pathname == "/dashboard.html") {
    spinner.showSpinner();
    const dashboardView = new DashboardView();
    const indexView = new IndexView();
    dashboardView.setInput({ name: "FAKE NAME", email: "FAKE EMAIL" });
    dashboardView.getLogoutBtn().addEventListener("click", function () {
      logout(indexView);
    });
  }
};
