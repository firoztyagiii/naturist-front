import { ResetPasswordView } from "../view/resetPasswordView";
import { callAPI } from "../model/model";
import { Popup } from "../view/popup";
import { logout } from "./userController";
import { IndexView } from "../view/indexView";

const popup = new Popup();

const call = async (input, token) => {
  const response = await callAPI(
    `/api/user/reset-password?token=${token}`,
    "POST",
    input
  );
  if (response.status === "Fail") {
    popup.showPopup(response.message);
    popup.hidePopup();
  } else {
    popup.showPopup(response.message);
    popup.hidePopup();
    const indexView = new IndexView();
    setTimeout(async () => {
      await logout(indexView);
    }, 2000);
  }
};

export const resetPasswordController = () => {
  if (window.location.pathname === "/reset-password.html") {
    const token = window.location.search.split("=")[1];
    if (!token) {
      window.location.href = "/";
    }
    const resetPasswordView = new ResetPasswordView();
    resetPasswordView.resetBtn.addEventListener("click", async function () {
      const input = resetPasswordView.getInput();
      if (input.password !== input.confirmPassword) {
        popup.showPopup("Passwords do not match");
        popup.hidePopup();
        return;
      } else {
        await call(input, token);
      }
    });
  }
};
