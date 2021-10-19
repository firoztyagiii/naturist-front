import { DashboardView } from "../view/dashboardView";
import { logout } from "./userController";
import { Spinner } from "../view/spinner";
import { IndexView } from "../view/indexView";
import { userData } from "../model/model";
import { isLoggedIn } from "./authController";
import { updatePassword, updateName, updateEmail } from "./userController";

const passwordUpdateHandler = async (e, dashboardView) => {
  e.preventDefault();
  dashboardView.updatePasswordBtnUI();
  const input = dashboardView.getPasswordInput();
  await updatePassword(input);
  dashboardView.resetPasswordBtnUI();
};

const nameUpdateHandler = async (e, dashboardView) => {
  e.preventDefault();
  dashboardView.updateNameBtnUI();
  const input = dashboardView.getNameInput();
  await updateName(input);
  dashboardView.resetNameBtnUI();
};

const emailUpdateHandler = async (e, dashboardView) => {
  e.preventDefault();
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

    //EVENT LISTENERS

    dashboardView.passwordUpdateBtn.addEventListener(
      "click",
      async function (e) {
        passwordUpdateHandler(e, dashboardView);
      }
    );

    dashboardView.logoutBtn.addEventListener("click", async function () {
      const indexView = new IndexView();
      await logout(indexView);
    });

    dashboardView.nameUpdateBtn.addEventListener("click", async function (e) {
      nameUpdateHandler(e, dashboardView);
    });

    dashboardView.emailUpdateBtn.addEventListener("click", async function (e) {
      emailUpdateHandler(e, dashboardView);
    });

    spinner.hideSpinner();
  }
};
