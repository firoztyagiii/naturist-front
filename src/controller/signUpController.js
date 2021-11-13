import { SignupView } from "../view/signupView";
import { signUp } from "./userController";

export const signUpController = () => {
  if (window.location.pathname == "/signup.html") {
    const signupView = new SignupView();
    signupView.signUpEvent(signUp);
  }
};
