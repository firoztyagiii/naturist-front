import { callAPI } from "../model/model";
import { Spinner } from "../view/spinner";
import { MyBookingsView } from "../view/myBookingsView";
import { Popup } from "../view/popup";
import { sendError } from "./utils/sendError";

const downloadInvoiceHandler = async (id) => {
  try {
    const invoicepdf = await callAPI(`/api/tour/${id}/invoice`);
    const popup = new Popup();
    if (invoicepdf.status === "Fail") {
      popup.showPopup(invoicepdf.message);
      popup.hidePopup();
    }
    window.open(invoicepdf.data.invoice);
  } catch (err) {
    sendError(err);
  }
};

export const myBookingsController = async () => {
  try {
    if (window.location.pathname === "/my-bookings.html") {
      if (window.location.search == "?success=true") {
        const popup = new Popup();
        popup.showPopup("Tour has been added to your bookings");
        popup.hidePopup();
        setTimeout(() => {
          window.history.replaceState("", "", "/my-bookings.html");
        }, 2000);
      }
      const spinner = new Spinner();
      spinner.showSpinner();
      const bookings = await callAPI(`/api/booking`, "GET");
      if (bookings.status == "Fail") return popup.showPopup("Something went wrong!");

      const myBookingView = new MyBookingsView();

      bookings.data.bookings.forEach((element) => {
        myBookingView.showBookings(element.tour);
      });

      myBookingView.downloadInvoiceListener(downloadInvoiceHandler);

      spinner.hideSpinner();
    }
  } catch (err) {
    sendError(err);
  }
};
