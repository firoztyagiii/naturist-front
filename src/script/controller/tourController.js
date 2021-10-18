import { callAPI } from "../model/model";
import { TourView } from "../view/tourView";
import { Spinner } from "../view/spinner";

export const tourController = async () => {
  if (window.location.pathname == "/tours.html") {
    const spinner = new Spinner();
    const tourView = new TourView();
    const response = await callAPI("/api/tour", "GET");
    response.data.tours.forEach((tour) => {
      tourView.generateMarkup(tour);
    });
    spinner.hideSpinner();
  }
};
