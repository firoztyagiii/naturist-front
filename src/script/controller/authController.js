import { IndexView } from "../view/indexView";
import { callAPI } from "../model/model";
import { Spinner } from "../view/spinner";
import { userData } from "../model/model";

const indexView = new IndexView();
const spinner = new Spinner();

export let isLoggedIn = false;

export const checkLogin = async () => {
  try {
    const user = await callAPI("/api/user/about-me", "GET");
    if (user.status === "success") {
      indexView.updateUI(user);
      isLoggedIn = true;
      userData = user;
    }
    spinner.hideSpinner();
  } catch (err) {
    console.log(err);
  }
};
