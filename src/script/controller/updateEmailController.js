import { UpdateEmailView } from "../view/updateEmailView";
import { callAPI } from "../model/model";
import { Popup } from "../view/popup";
import { logout } from "./userController";
import { IndexView } from "../view/indexView";

const updateEmailHandler = async (input, token) => {
  try {
    const response = await callAPI(`/api/user/update-email?token=${token}`, "POST", input);
    const popup = new Popup();
    popup.showPopup(response.message);
    popup.hidePopup();
    if (response.status === "success") {
      setTimeout(async () => {
        const indexView = new IndexView(indexView);
        await logout();
      }, 1700);
    }
  } catch (err) {
    // FIXME:
  }
};

export const updateEmailController = () => {
  if (window.location.pathname === "/update-email.html") {
    const updateEmailView = new UpdateEmailView();
    updateEmailView.updateEmail(updateEmailHandler);
  }
};
