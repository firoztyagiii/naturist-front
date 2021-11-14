import { IndexView } from "../view/indexView";
import { callAPI } from "../model/model";
import { Spinner } from "../view/spinner";
import { userData } from "../model/model";
import { sendError } from "./utils/sendError";

const spinner = new Spinner();

export let isLoggedIn = false;

export const checkLogin = async () => {
  try {
    const user = await callAPI("/api/user/about-me", "GET");
    if (user.status === "success") {
      const indexView = new IndexView();
      indexView.updateUI(user);
      isLoggedIn = true;
      userData = user;
    } else {
      isLoggedIn = false;
      spinner.hideSpinner();
    }
  } catch (err) {
    isLoggedIn = false;
    sendError(err);
  }
};
