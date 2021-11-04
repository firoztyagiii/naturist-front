import { ResetPasswordView } from "../view/resetPasswordView";
import { callAPI } from "../model/model";
import { Popup } from "../view/popup";
import { logout } from "./userController";
import { IndexView } from "../view/indexView";
import { Spinner } from "../view/spinner";

const popup = new Popup();

const resetPasswordHandler = async (input, token) => {
  try {
    const response = await callAPI(`/api/user/reset-password?token=${token}`, "POST", input);
    if (response.status === "Fail") {
      popup.showPopup(response.message);
      popup.hidePopup();
    } else {
      popup.showPopup(response.message);
      popup.hidePopup();
      const indexView = new IndexView();
      setTimeout(() => {
        logout(indexView);
      }, 1000);
    }
  } catch (err) {
    // FIXME:
  }
};

export const resetPasswordController = () => {
  if (window.location.pathname === "/reset-password.html") {
    const spinner = new Spinner();
    const resetPasswordView = new ResetPasswordView();
    resetPasswordView.resetPassword(resetPasswordHandler);
    spinner.hideSpinner();
  }
};
