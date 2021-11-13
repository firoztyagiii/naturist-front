import { forgotPasswordController } from "./forgotPasswordController";
import { resetPasswordController } from "./resetPasswordController";
import { dashBoardController } from "./dashboardController";
import { loginController } from "./loginController";
import { accountActivationController } from "./accountActivationController";
import { Spinner } from "../view/spinner";
import { tourController } from "./tourController";
import { checkLogin } from "./authController";
import { updateEmailController } from "./updateEmailController";
import { signUpController } from "./signUpController";
import { tourDetailController } from "./tourDetailController";
import { twoFaController } from "./2faController";
import { myBookingsController } from "./myBookingsController";
import { navBar } from "./utils/navbar";
import { errorController } from "./errorController";

const spinner = new Spinner();

const init = async () => {
  try {
    spinner.showSpinner();
    await checkLogin();
    navBar();
    accountActivationController();
    tourController();
    myBookingsController();
    tourDetailController();
    forgotPasswordController();
    resetPasswordController();
    dashBoardController();
    loginController();
    signUpController();
    updateEmailController();
    twoFaController();
    errorController();
    // spinner.hideSpinner();
  } catch (err) {
    console.log(err);
  }
};

init();
