import { checkForPageType, isUserLoggedIn } from "./authController";
import { login, logout, signUp } from "./userController";
import { fetchTours } from "./tourController";
import { forgotPasswordController } from "./forgotPasswordController";

const init = async () => {
  try {
    checkForPageType(fetchTours, signUp, login, logout);
    await forgotPasswordController();
    await isUserLoggedIn();
  } catch (err) {
    console.log(err);
  }
};

init();
