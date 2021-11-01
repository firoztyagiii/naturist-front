import { callAPI } from "../model/model";

export const myBookingsController = async () => {
  if (window.location.pathname === "/my-bookings.html") {
    const bookings = await callAPI(`/api/bookings`, "GET");
    console.log(bookings);
    console.log("Bookings page");
  }
};
