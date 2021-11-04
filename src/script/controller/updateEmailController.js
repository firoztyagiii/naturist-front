import { UpdateEmailView } from "../view/updateEmailView";
import { callAPI } from "../model/model";
import { Popup } from "../view/popup";
import { logout } from "./userController";
import { IndexView } from "../view/indexView";

const updateEmailHandler = async (token) => {
  try {
    const response = await callAPI(`/api/user/update-email?token=${token}`, "GET");
    console.log("EMAIL CHANGE RESPONSE --->", response);
    if (response.status === "success") {
      const indexView = new IndexView(indexView);
      await logout(indexView);
    } else {
      document.write("Invalid token!");
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
