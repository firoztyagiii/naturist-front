import { ForgotPasswordView } from "../view/forgotPasswordView";
import { callAPI } from "../model/model";
import { Popup } from "../view/popup";
import { Spinner } from "../view/spinner";
import { sendError } from "./utils/sendError";

const popup = new Popup();

const resetPasswordHander = async (email) => {
  try {
    const response = await callAPI("/api/user/forgot-password", "POST", email);
    popup.showPopup(response.message);
    popup.hidePopup();
  } catch (err) {
    sendError(err);
  }
};

export const forgotPasswordController = () => {
  if (window.location.pathname == "/forgot-password.html") {
    const spinner = new Spinner();
    spinner.showSpinner();
    const forgotPasswordView = new ForgotPasswordView();
    forgotPasswordView.resetPassword(resetPasswordHander);
    spinner.hideSpinner();
  }
};
