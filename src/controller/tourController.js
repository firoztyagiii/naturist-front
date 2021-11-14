import { callAPI } from "../model/model";
import { TourView } from "../view/tourView";
import { Spinner } from "../view/spinner";
import { getPageNumberFromQuery } from "./pagination";
import { Popup } from "../view/popup";
import { sendError } from "./utils/sendError";

const popup = new Popup();

const getSearchData = async (input) => {
  try {
    const data = await callAPI(`/api/tour?search=${input}`);
    if (data.result == 0) {
      popup.showPopup("No tour found");
      popup.hidePopup();
      return;
    }

    const tourView = new TourView();
    tourView.resetContainer();
    tourView.showMarkup(data);
  } catch (err) {
    sendError(err);
  }
};

export const tourController = async () => {
  try {
    if (window.location.pathname == "/tours.html") {
      const spinner = new Spinner();
      const pageNumber = getPageNumberFromQuery();
      const itemLimit = 3;

      spinner.showSpinner();

      const tourView = new TourView();
      tourView.loadMoreItems(callAPI, tourView);

      const response = await callAPI(`/api/tour?page=${pageNumber ? pageNumber : 1}&limit=${itemLimit}`, "GET");
      tourView.showMarkup(response);
      tourView.addSearchListener(getSearchData);

      spinner.hideSpinner();
    }
  } catch (err) {
    sendError(err);
  }
};
