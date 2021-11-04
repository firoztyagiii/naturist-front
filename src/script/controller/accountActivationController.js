import { callAPI } from "../model/model";

export const accountActivationController = async () => {
  try {
    if (window.location.pathname === "/activate-account.html") {
      const token = window.location.search.split("=")[1];
      if (!token) return (window.location.href = "/");

      const response = await callAPI(`/api/user/activate-account?verify=${token}`, "GET");

      if (response.status === "success") {
        window.location.href = "/login.html?activated=true";
      } else document.write(response.message);
    }
  } catch (err) {
    // FIXME: add error
  }
};
