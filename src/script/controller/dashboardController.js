import { DashboardView } from "../view/dashboardView";
import { logout } from "./userController";
import { Spinner } from "../view/spinner";
import { userData } from "../model/model";
import { isLoggedIn } from "./authController";
import { updatePassword, updateName, updateEmail } from "./userController";

const passwordUpdateHandler = async (dashboardView) => {
  dashboardView.updatePasswordBtnUI();
  const input = dashboardView.getPasswordInput();
  await updatePassword(input);
  dashboardView.resetPasswordBtnUI();
};

const nameUpdateHandler = async (dashboardView) => {
  dashboardView.updateNameBtnUI();
  const input = dashboardView.getNameInput();
  await updateName(input);
  dashboardView.resetNameBtnUI();
};

const emailUpdateHandler = async (dashboardView) => {
  dashboardView.updateEmailBtnUI();
  const input = dashboardView.getEmailInput();
  await updateEmail(input);
  dashboardView.resetEmailBtnUI();
};

export const dashBoardController = () => {
  if (window.location.pathname == "/dashboard.html") {
    if (!isLoggedIn) {
      return (window.location.href = "/login.html?notLoggedIn=true");
    }

    const spinner = new Spinner();
    const dashboardView = new DashboardView();
    dashboardView.setInput(userData);
    dashboardView.updateData(passwordUpdateHandler, nameUpdateHandler, emailUpdateHandler, logout, dashboardView);
    spinner.hideSpinner();
  }
};
