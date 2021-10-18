import { forgotPasswordController } from "./forgotPasswordController";
import { resetPasswordController } from "./resetPasswordController";
import { dashBoardController } from "./dashboardController";
import { loginController } from "./loginController";
import { accountActivationController } from "./accountActivationController";
import { isUserLoggedIn, user } from "../model/model";
import { IndexView } from "../view/indexView";
import { Spinner } from "../view/spinner";

const spinner = new Spinner();

const init = async () => {
  try {
    if (isUserLoggedIn) {
      spinner.showSpinner();
      const indexView = new IndexView(spinner);
      indexView.updateUI(user);
    }
    forgotPasswordController();
    resetPasswordController();
    dashBoardController();
    loginController();
    accountActivationController();
    spinner.hideSpinner();
  } catch (err) {
    console.log(err);
  }
};

init();
