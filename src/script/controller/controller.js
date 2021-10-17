import { checkForPageType, isUserLoggedIn } from "./authController";
import { login, logout, signUp } from "./userController";
import { fetchTours } from "./tourController";
import { forgotPasswordController } from "./forgotPasswordController";
import { resetPasswordController } from "./resetPasswordController";

const init = async () => {
  try {
    checkForPageType(fetchTours, signUp, login, logout);
    await forgotPasswordController();
    resetPasswordController();
    await isUserLoggedIn();
  } catch (err) {
    console.log(err);
  }
};

init();
