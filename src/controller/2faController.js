import { TwoFaView } from "../view/2faView";
import { callAPI } from "../model/model";
import { Popup } from "../view/popup";

const twoFAView = new TwoFaView();
const popup = new Popup();

const twoFAHandler = async (token) => {
  try {
    twoFAView.updateUI();
    const input = twoFAView.getInput();
    const response = await callAPI(`/api/user/2fa?token=${token}`, "POST", input);

    if (response.status === "success") {
      popup.showPopup("Logged in successfully!");
      popup.hidePopup();
      window.sessionStorage.setItem("isUserLoggedIn", true);
      setTimeout(() => {
        window.location.href = "/index.html";
      }, 1700);
    } else {
      popup.showPopup(response.message);
      popup.hidePopup();
    }

    twoFAView.defaultUI();
  } catch (err) {
    console.log(err);
  }
};

export const twoFaController = () => {
  if (window.location.pathname == "/2fa.html") {
    twoFAView.twoFA(twoFAHandler);
  }
};
