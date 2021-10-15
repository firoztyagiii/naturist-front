export class TourView {
  constructor() {
    this.tourContainer = document.querySelector(".tour-container");
  }
  generateMarkup(tour) {
    const markup = `<div class="tour">
    <div class="tour-stars">
      <i class="far fa-star"></i>
      <i class="far fa-star"></i>
      <i class="far fa-star"></i>
      <i class="far fa-star"></i>
      <i class="far fa-star"></i>
    </div>
    <div class="tour-img">
      <img src="./src/img/img.jpg" alt="">
      <span class="img-linear-bg"></span>
      <p class="tour-title">${tour.name}</p>
    </div>
    <div class="tour-details">
      <ul class="detail-list">
        <li class="tour-detail-list-item">
          <i class="far fa-flag"></i>
        <p>${tour.location}</p>
        </li>
        <li class="tour-detail-list-item">
          <i class="far fa-user"></i>
          <p>${tour.groupSize}</p>
        </li>
        <li class="tour-detail-list-item">
          <i class="far fa-clock"></i>
          <p>${tour.tourLength}</p>
        </li>
        <li class="tour-detail-list-item">
          <i class="far fa-calendar-alt"></i>
          <p>${new Date(tour.dates[0]).getFullYear()}</p>
        </li>
      </ul>
    </div>
      <div class="tour-bottom-details">
        <div class="tour-price">
          <span>Only</span>
          <p>$${tour.price}</p>
        </div>
        <a href="#" class="tour-detail-btn">Details</a>
      </div>
  </div>`;
    this.tourContainer.insertAdjacentHTML("afterbegin", markup);
  }
}
