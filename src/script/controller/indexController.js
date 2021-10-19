import { forgotPasswordController } from "./forgotPasswordController";
import { resetPasswordController } from "./resetPasswordController";
import { dashBoardController } from "./dashboardController";
import { loginController } from "./loginController";
import { accountActivationController } from "./accountActivationController";
import { isUserLoggedIn, user } from "../model/model";
import { IndexView } from "../view/indexView";
import { Spinner } from "../view/spinner";
import { tourController } from "./tourController";
import { checkLogin } from "./authController";
import { updateEmailController } from "./updateEmailController";
import { signUpController } from "./signUpController";
import { tourDetailController } from "./tourDetailController";

const spinner = new Spinner();

const init = async () => {
  try {
    spinner.showSpinner();
    await checkLogin();
    await accountActivationController();
    tourController();
    tourDetailController();
    forgotPasswordController();
    resetPasswordController();
    dashBoardController();
    loginController();
    signUpController();
    updateEmailController();
    spinner.hideSpinner();
  } catch (err) {
    console.log(err);
  }
};

init();
