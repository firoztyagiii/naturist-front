import { callAPI } from "../model/model";
import { TourDetailView } from "../view/tourDetailView";
import { Popup } from "../view/popup";
import { Spinner } from "../view/spinner";

const popup = new Popup();
const tourDetailView = new TourDetailView();
const spinner = new Spinner();

const manageBookmark = async (tourId) => {
  try {
    const isBookmarked = tourDetailView.addOrRemove();
    tourDetailView.updateBookmarkUI("spinner");
    const response = await callAPI("/api/bookmark", isBookmarked ? "DELETE" : "POST", { tourId });
    if (response.status === "Fail") {
      popup.showPopup(response.message);
      tourDetailView.updateBookmarkUI("removed");
    }
    if (response.status === "success") {
      tourDetailView.updateBookmarkUI("added");
    } else if (!response.status) {
      tourDetailView.updateBookmarkUI("removed");
    }
    popup.hidePopup();
  } catch (err) {
    console.log(err);
  }
};

const fetchAndShowTour = async (id, tourDetailView) => {
  try {
    const response = await callAPI(`/api/tour/${id}`, "GET");
    const bookmarks = await callAPI("/api/bookmark", "GET");
    let isBookmarked = false;
    if (bookmarks.status !== "Fail") {
      isBookmarked = bookmarks.bookmarks.some((item) => item._id == response.data.tour._id);
    }
    tourDetailView.generateMarkup(response.data.tour, isBookmarked);
    spinner.hideSpinner();
  } catch (err) {
    spinner.hideSpinner();
    console.log(err);
  }
};

export const tourDetailController = async () => {
  try {
    if (window.location.pathname == "/tour-detail.html") {
      const id = window.location.search.split("=")[1];
      if (!id) {
        return (window.location.href = "/tours.html");
      }

      spinner.showSpinner();
      await fetchAndShowTour(id, tourDetailView);
      await tourDetailView.addToBookmark(manageBookmark, id);
      tourDetailView.bookingHandler(callAPI);
      tourDetailView.addImagePopup();
    }
  } catch (err) {
    console.log(err);
  }
};
