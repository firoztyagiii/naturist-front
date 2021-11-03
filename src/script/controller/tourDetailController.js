import { callAPI } from "../model/model";
import { TourDetailView } from "../view/tourDetailView";
import { Popup } from "../view/popup";
import { Spinner } from "../view/spinner";

const popup = new Popup();
const tourDetailView = new TourDetailView();
const spinner = new Spinner();

const addTourToBookmark = async (tourId) => {
  try {
    spinner.showSpinner();
    const response = await callAPI("/api/bookmark", "POST", { tourId });
    if (response.status === "success") {
      tourDetailView.updateBookmarkUI();
    }
    spinner.hideSpinner();
    popup.showPopup(response.message);
    popup.hidePopup();
    spinner.hideSpinner();
  } catch (err) {
    spinner.hideSpinner();
    // FIXME:
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
    // FIXME:
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
      await tourDetailView.addToBookmark(addTourToBookmark, id);

      tourDetailView.bookingHandler(callAPI);
    }
  } catch (err) {
    // FIXME:
  }
};
