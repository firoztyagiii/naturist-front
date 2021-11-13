import { DashboardView } from "../view/dashboardView";
import { logout } from "./userController";
import { Spinner } from "../view/spinner";
import { userData } from "../model/model";
import { isLoggedIn } from "./authController";
import { updatePassword, updateName, updateEmail, updatePhoto } from "./userController";

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

const photoUpdateHandler = async (dashboardView) => {
  dashboardView.updatePhotoBtnUI();
  const photo = dashboardView.getImageFile();
  const form = new FormData();
  form.append("photo", photo);
  await updatePhoto(form);
  dashboardView.resetPhotoBtnUI();
};

export const dashBoardController = () => {
  if (window.location.pathname == "/dashboard.html") {
    const spinner = new Spinner();
    spinner.showSpinner();
    if (!isLoggedIn) {
      return (window.location.href = "/login.html?notLoggedIn=true");
    }

    const dashboardView = new DashboardView();
    dashboardView.setInput(userData);
    dashboardView.imagePreview();
    dashboardView.updateData(
      passwordUpdateHandler,
      nameUpdateHandler,
      emailUpdateHandler,
      photoUpdateHandler,
      logout,
      dashboardView
    );
    spinner.hideSpinner();
  }
};
