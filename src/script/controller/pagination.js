import { Spinner } from "../view/spinner";
import { callAPI } from "../model/model";

const spinner = new Spinner();

export const getPageNumberFromQuery = () => {
  return window.location.search
    .split("&")
    .map((item) => item.replace("?", ""))
    .filter((item) => item.includes("page="))
    .join("")
    .split("=")[1];
};

export const setPageNumber = (pageNumber, tourView) => {
  if (pageNumber) {
    tourView.nextPageBtn.dataset.nextpage = pageNumber;
    tourView.currentPage.textContent = `CURR ${pageNumber}`;
    tourView.prevPageBtn.dataset.prevpage = pageNumber;
  }
};

export const getPage = async (which, tourView) => {
  spinner.showSpinner();
  let pageToFetch;
  const itemLimit = 3;
  if (which === "next") {
    tourView.nextPageBtn.dataset.nextpage++;
    tourView.prevPageBtn.dataset.prevpage++;
    pageToFetch = tourView.nextPageBtn.dataset.nextpage;
  } else if (which === "previous") {
    tourView.nextPageBtn.dataset.nextpage--;
    tourView.prevPageBtn.dataset.prevpage--;
    pageToFetch = tourView.prevPageBtn.dataset.prevpage;
  }

  if (pageToFetch < 1) {
    tourView.prevPageBtn.dataset.prevpage = "1";
    tourView.nextPageBtn.dataset.nextpage = "1";
    spinner.hideSpinner();
    return;
  }

  const response = await callAPI(
    `/api/tour?page=${pageToFetch}&limit=${itemLimit}`,
    "GET"
  );

  const maxPage = Math.ceil(response.totalDocs / itemLimit);

  if (pageToFetch > maxPage) {
    tourView.prevPageBtn.dataset.prevpage = maxPage;
    tourView.nextPageBtn.dataset.nextpage = maxPage;
    spinner.hideSpinner();
    return;
  }

  tourView.currentPage.textContent = `CURR ${pageToFetch}`;

  window.history.pushState("", "", `/tours.html?page=${pageToFetch}`);
  tourView.tourContainer.innerHTML = "";
  response.data.tours.forEach((tour) => {
    tourView.generateMarkup(tour);
  });

  spinner.hideSpinner();
};
