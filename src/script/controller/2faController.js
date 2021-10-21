import { TwoFaView } from "../view/2faView";
import { callAPI } from "../model/model";
import { Popup } from "../view/popup";

const twoFAView = new TwoFaView();
const popup = new Popup();

const call = async () => {
  twoFAView.updateUI();
  const token = twoFAView.getToken();
  const input = twoFAView.getInput();
  const response = await callAPI(`/api/user/2fa?token=${token}`, "POST", input);

  if (response.status === "success") {
    popup.showPopup("Logged in successfully!");
    popup.hidePopup();
    setTimeout(() => {
      window.location.href = "/index.html";
    }, 2000);
  } else {
    popup.showPopup(response.message);
    popup.hidePopup();
  }
  twoFAView.defaultUI();
};

export const twoFaController = () => {
  if (window.location.pathname == "/2fa.html") {
    twoFAView.addListener(call);
  }
};
