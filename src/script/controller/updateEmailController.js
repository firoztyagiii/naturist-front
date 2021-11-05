import { callAPI } from "../model/model";
import { Spinner } from "../view/spinner";

const updateEmailHandler = async (token) => {
  try {
    const response = await callAPI(`/api/user/update-email?token=${token}`, "GET");
    if (response.status == "success") {
      window.location.href = "/";
    } else if (response.status === "Fail") {
      document.write("Invalid token or expired!");
    }
  } catch (err) {
    // FIXME:
  }
};

export const updateEmailController = () => {
  if (window.location.pathname === "/update-email.html") {
    const spinner = new Spinner();
    spinner.hideSpinner();
    const token = window.location.search.split("=")[1];
    if (!token) {
      return (window.location.href = "/");
    }
    updateEmailHandler(token);
  }
};
