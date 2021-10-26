import { callAPI } from "../model/model";
import { TourDetailView } from "../view/tourDetailView";
import { Popup } from "../view/popup";

const popup = new Popup();

const tourDetailView = new TourDetailView();

const hitAddBookmark = async (tourId) => {
  const response = await callAPI("/api/bookmark", "POST", { tourId });
  if (response.status === "success") {
    tourDetailView.updateBookmarkUI();
  }
  popup.showPopup(response.message);
  popup.hidePopup();
};

const call = async (id, tourDetailView) => {
  const response = await callAPI(`/api/tour/${id}`, "GET");
  const bookmarks = await callAPI("/api/bookmark", "GET");
  let isBookmarked = false;
  if (bookmarks.status !== "Fail") {
    isBookmarked = bookmarks.bookmarks.some((item) => item._id == response.data.tour._id);
  }
  tourDetailView.generateMarkup(response.data.tour, isBookmarked);
};

export const tourDetailController = async () => {
  if (window.location.pathname == "/tour-detail.html") {
    const id = window.location.search.split("=")[1];
    if (!id) {
      return (window.location.href = "/tours.html");
    }

    await call(id, tourDetailView);
    tourDetailView.addToBookmark(hitAddBookmark, id);
    // tourDetailView.getBookBtn().addEventListener("click", async (e) => {
    //   const stripe = Stripe(
    //     "pk_test_51JnKOySDGwQlZw5DCFGmbXwnG79YA1zMjJOchBjbrSXAXfuGnU9123ZvtyDj4eejfPYAQFBAOKp6hJV8yfTkSmMV00njrD4xWs"
    //   );
    //   const id = e.target.dataset.tourId;
    //   console.log(id);
    //   const session = await callAPI(`/api/checkout/checkout-session/${id}`, "GET");
    //   stripe.redirectToCheckout({
    //     sessionId: session.session.id,
    //   });
    // });
  }
};
