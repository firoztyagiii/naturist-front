import { ForgotPasswordView } from "../view/forgotPasswordView";
import { callAPI } from "../model/model";
import { Popup } from "../view/popup";

const popup = new Popup();

const call = async (email) => {
  const response = await callAPI("/api/user/forgot-password", "POST", email);
  if (response.status === "Fail") {
    popup.showPopup(response.message);
    popup.hidePopup();
  } else {
  }
};

export const forgotPasswordController = async () => {
  if (window.location.pathname == "/forgot-password.html") {
    const resetBtn = document.querySelector(".reset-btn");
    const forgotPasswordView = new ForgotPasswordView();
    resetBtn.addEventListener("click", async function () {
      const email = forgotPasswordView.getInput();
      await call(email);
    });
  }
};
