import { UpdateEmailView } from "../view/updateEmailView";
import { callAPI } from "../model/model";
import { isUserLoggedIn } from "../model/model";
import { Popup } from "../view/popup";

const popup = new Popup();

const call = async (input, token) => {
  const response = await callAPI(
    `/api/user/update-email?token=${token}`,
    "POST",
    input
  );
  popup.showPopup(response.message);
  popup.hidePopup();
  if (response.status === "success") {
    setTimeout(() => {
      window.location.href = "/login.html";
    }, 2000);
  }
};

export const updateEmailController = () => {
  if (window.location.pathname === "/update-email.html") {
    const updateEmailView = new UpdateEmailView();
    const token = window.location.search.split("=")[1];
    if (!token) {
      return (window.location.href = "/");
    }
    updateEmailView.otpBtn.addEventListener("click", async function () {
      updateEmailView.updateUI();
      const input = updateEmailView.getInput();
      await call(input, token);
      updateEmailView.resetUI();
    });
  }
};
