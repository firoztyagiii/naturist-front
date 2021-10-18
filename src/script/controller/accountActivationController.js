import { callAPI } from "../model/model";
import { Spinner } from "../view/spinner";

const spinner = new Spinner();

export const accountActivationController = async () => {
  if (window.location.pathname === "/activate-account.html") {
    const verifyToken = window.location.search.split("=")[1];
    const response = await callAPI(
      `/api/user/activate-account?verify=${verifyToken}`,
      "GET"
    );

    if (response.status === "success") {
      window.location.href = "/login.html?activated=true";
    } else {
      document.write(response.message);
    }
  } else {
    spinner.showSpinner();
  }
};
