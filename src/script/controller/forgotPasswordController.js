import { ForgotPasswordView } from "../view/forgotPasswordView";
import { callAPI } from "../model/model";
import { Popup } from "../view/popup";

const popup = new Popup();

const call = async (email) => {
  const response = await callAPI("/api/user/forgot-password", "POST", email);
  console.log(response);
  if (response.status === "Fail") {
    popup.showPopup(response.message);
    popup.hidePopup();
  } else {
    popup.showPopup(response.message);
    popup.hidePopup();
  }
};

export const forgotPasswordController = async () => {
  if (window.location.pathname == "/forgot-password.html") {
    const forgotPasswordView = new ForgotPasswordView();

    forgotPasswordView.resetBtn.addEventListener("click", async function () {
      forgotPasswordView.updateUI();
      const email = forgotPasswordView.getInput();
      await call(email);
      forgotPasswordView.defaultUI();
    });
  }
};
