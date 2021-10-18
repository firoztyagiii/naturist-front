import { SignupView } from "../view/signupView";

export const signUpController = () => {
  if (window.location.pathname == "/signup.html") {
    const signupView = new SignupView();
    signupView.signupbtn.addEventListener("click", function () {
      signUp(signupView);
    });
  }
};
