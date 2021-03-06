import { _DOMAIN } from "../model/model";
import { HOSTING } from "../model/model";
import { getPageNumberFromQuery } from "../controller/pagination";
import { Spinner } from "./spinner";

export class TourView {
  constructor() {
    this.tourContainer = document.querySelector(".tour-container");
    this.loadMoreBtn = document.querySelector(".load-more");
  }

  generateMarkup(tour) {
    const markup = ` <div class="tour">
    <div class="tour-header">
      <span class="image-overlay"></span>
      <img src="${HOSTING}${tour.headImg}" alt="" class="tour-img">
    </div>
    <div class="tour-content">
      <p class="tour-title">${tour.name}</p>
      <p class="tour-content-fact">${tour.difficulty.toUpperCase()} ${tour.tourLength} Days </p>
      <p class="tour-content-info">${tour.info}
      </p>
      <div class="tour-icons">
        <div class="tour-content-icon">
          <i class="far fa-map"></i>
          <p>${tour.location}</p>
        </div>
        <div class="tour-content-icon">
          <i class="far fa-calendar"></i>
          <p>June 2022</p>
        </div>
        <div class="tour-content-icon">
          <i class="far fa-user"></i>
          <p>${tour.groupSize}</p>
        </div>
        <div class="tour-content-icon">
          <i class="far fa-hourglass"></i>
          <p>${tour.tourLength}</p>
        </div>
      </div>
    </div>
    <div class="tour-footer">
      <div class="tour-ratings">
        <p class="tour-price">$${tour.price} <span>per person</span></p>
        <div class="tour-rating">${tour.averageRatings} <span>rating (${tour.totalRatings})</span></div>
      </div>
      <div class="tour-btn">
        <a href="/tour-detail.html?id=${tour._id}" class="tour-link">Details</a>
      </div>
    </div>
  </div>`;
    this.tourContainer.insertAdjacentHTML("beforeend", markup);
  }

  resetContainer() {
    this.tourContainer.innerHTML = "";
  }

  updateUIForLoadBtn() {
    const btnText = document.querySelector(".load-more-text");
    const loader = document.querySelector(".loader");
    btnText.classList.add("hidden");
    loader.classList.remove("hidden");
  }

  resetUIForLoadBtn() {
    const btnText = document.querySelector(".load-more-text");
    const loader = document.querySelector(".loader");
    btnText.classList.remove("hidden");
    loader.classList.add("hidden");
  }

  showMarkup(response) {
    response.data.tours.forEach((tour) => {
      this.generateMarkup(tour);
    });
  }

  loadMoreItems(callAPI, tourView) {
    const itemLimit = 3;
    const pageNumber = getPageNumberFromQuery();

    this.loadMoreBtn.addEventListener("click", async () => {
      try {
        this.updateUIForLoadBtn();
        tourView.loadMoreBtn.dataset.page++;

        const pageNumber = tourView.loadMoreBtn.dataset.page;
        const response = await callAPI(`/api/tour?page=${pageNumber ? pageNumber : 1}&limit=${itemLimit}`, "GET");

        this.showMarkup(response);
        this.resetUIForLoadBtn();
      } catch (err) {
        // FIXME:
      }
    });
  }

  getSearchInput() {
    const searchInput = document.querySelector(".search-input");
    return searchInput.value;
  }

  addSearchListener(cb) {
    const searchInput = document.querySelector(".search-input");
    const spinner = new Spinner();
    searchInput.addEventListener("keyup", async (e) => {
      if (e.keyCode == 13) {
        spinner.showSpinner();
        const input = this.getSearchInput();
        await cb(input);
        spinner.hideSpinner();
      }
    });

    const searchBtn = document.querySelector(".search-label");
    searchBtn.addEventListener("click", async () => {
      spinner.showSpinner();
      const input = this.getSearchInput();
      await cb(input);
      spinner.hideSpinner();
    });
  }
}
