export class TourView {
  constructor() {
    this.tourContainer = document.querySelector(".tour-container");
    this.nextPageBtn = document.querySelector(".next-page");
    this.prevPageBtn = document.querySelector(".prev-page");
    this.currentPage = document.querySelector(".current-page");
    this.loadMoreBtn = document.querySelector(".load-more");
    // this.sortBtn = document.querySelector(".sort-by-price");
  }

  getQuery() {
    return window.location.search;
  }

  increasePageNumber() {
    this.nextPageBtn.dataset.currentpage++;
  }

  generateMarkup(tour) {
    // this.tourContainer.innerHTML = "";
    const markup = ` <div class="tour">
    <div class="tour-header">
      <span class="image-overlay"></span>
      <img src="http://localhost:9090/${tour.headImg}" alt="" class="tour-img">
    </div>
    <div class="tour-content">
      <p class="tour-title">${tour.name}</p>
      <p class="tour-content-fact">${tour.difficulty.toUpperCase()} ${
      tour.tourLength
    } Days </p>
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
        <div class="tour-rating">${tour.averageRatings} <span>rating (${
      tour.totalRatings
    })</span></div>
      </div>
      <div class="tour-btn">
        <a href="/tour-detail.html?id=${tour._id}" class="tour-link">Details</a>
      </div>
    </div>
  </div>`;
    this.tourContainer.insertAdjacentHTML("beforeend", markup);
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
}
