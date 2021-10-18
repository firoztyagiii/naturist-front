import { IndexView } from "../view/indexView";
import { callAPI } from "../model/model";
import { Spinner } from "../view/spinner";
// import { isUserLoggedIn, user } from "../model/model";

const indexView = new IndexView();
const spinner = new Spinner();

export const checkLogin = async () => {
  try {
    const user = await callAPI("/api/user/about-me", "GET");
    if (user.status === "success") {
      indexView.updateUI(user);
      window.sessionStorage.setItem("isUserLoggedIn", true);
      window.sessionStorage.setItem("user", JSON.stringify(user));
    }
    spinner.hideSpinner();
  } catch (err) {
    console.log(err);
  }
};
