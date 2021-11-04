import { callAPI } from "../model/model";
import { Spinner } from "../view/spinner";
import { Popup } from "../view/popup";
import { MyBookingsView } from "../view/myBookingsView";

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

      spinner.hideSpinner();
    }
  } catch (err) {
    // FIXME:
  }
};
