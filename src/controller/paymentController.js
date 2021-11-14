import { callAPI } from "../model/model";
import { RAZORPAY_KEY } from "../model/model";
import { sendError } from "./utils/sendError";

export const payment = async (id) => {
  try {
    const checkOutSession = await callAPI(`/api/checkout/checkout-session/${id}`, "GET");
    const options = {
      order_id: checkOutSession.order.id,
      key: RAZORPAY_KEY,
      prefill: { name: checkOutSession.order.notes.name, email: checkOutSession.order.notes.email },
      handler() {
        window.location.href = "/my-bookings.html?success=true";
      },
    };
    document.querySelector(".book-tour-btn").textContent = "Book Tour Now";
    const rzr = new Razorpay(options);
    rzr.open();
  } catch (err) {
    sendError(err);
  }
};
