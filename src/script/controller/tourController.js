import { callAPI } from "../model/model";
import { TourView } from "../view/tourView";
import { Spinner } from "../view/spinner";
import { getPageNumberFromQuery, setPageNumber, getPage } from "./pagination";

const spinner = new Spinner();

export const tourController = async () => {
  if (window.location.pathname == "/tours.html") {
    spinner.showSpinner();

    const itemLimit = 3;
    const pageNumber = getPageNumberFromQuery();
    const tourView = new TourView();

    pageNumber && setPageNumber(pageNumber, tourView);

    // tourView.nextPageBtn.addEventListener("click", async function () {
    //   getPage("next", tourView);
    // });

    // tourView.prevPageBtn.addEventListener("click", async function () {
    //   getPage("previous", tourView);
    // });

    tourView.loadMoreBtn.addEventListener("click", async function () {
      tourView.updateUIForLoadBtn();
      tourView.loadMoreBtn.dataset.page++;
      const pageNumber = tourView.loadMoreBtn.dataset.page;
      const response = await callAPI(
        `/api/tour?page=${pageNumber ? pageNumber : 1}&limit=${itemLimit}`,
        "GET"
      );

      response.data.tours.forEach((tour) => {
        tourView.generateMarkup(tour);
      });
      tourView.resetUIForLoadBtn();
    });

    const response = await callAPI(
      `/api/tour?page=${pageNumber ? pageNumber : 1}&limit=${itemLimit}`,
      "GET"
    );

    response.data.tours.forEach((tour) => {
      tourView.generateMarkup(tour);
    });

    spinner.hideSpinner();
  }
};
