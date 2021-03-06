import { _DOMAIN } from "../model/model";
import { HOSTING } from "../model/model";

export class MyBookingsView {
  constructor() {
    this.container = document.querySelector(".tour-container");
  }
  showBookings(tour) {
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
      <button data-id="${tour._id}" class="tour-link">Invoice</button>
      </div>
    </div>
  </div>`;
    this.container.insertAdjacentHTML("beforeend", markup);
  }

  downloadInvoiceListener(cb) {
    const tourContainer = document.querySelector(".tour-container");
    tourContainer.addEventListener("click", async (e) => {
      if (!e.target.classList.contains("tour-link")) {
        return;
      }
      const id = e.target.dataset.id;
      await cb(id);
    });
  }
}
