import { callAPI } from "../model/model";
import { TourView } from "../view/tourView";
import { Spinner } from "../view/spinner";
import { getPageNumberFromQuery } from "./pagination";

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

      spinner.hideSpinner();
    }
  } catch (err) {
    // FIXME:
  }
};
