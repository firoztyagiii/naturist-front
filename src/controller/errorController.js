import { Spinner } from "../view/spinner";

export const errorController = () => {
  if (window.location.pathname == "/error.html") {
    const errorMessage = window.location.search.split("=")[1].replaceAll("%20", " ");
    const spinner = new Spinner();
    spinner.showSpinner();
    const errorMessageContainer = document.querySelector(".error-message");
    errorMessageContainer.innerText = errorMessage;
    spinner.hideSpinner();
  }
};
