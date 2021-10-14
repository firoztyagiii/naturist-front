export class TourView {
  constructor() {
    this.tourContainer = document.querySelector(".tour-container");
  }
  generateMarkup(tour) {
    const ratings = Math.round(tour.averageRatings);
    const markup = `<div class="tour">
      <div class="tour-left">
        <img class="tour-img" src="./src/img/img.jpg" alt="" />
        <span class="tour-img-gradient"></span>
      </div>
      <div class="tour-right">
        <div class="tour-ratings">
          <div class="tour-stars">
            (${tour.totalRatings})
          </div>
          <p class="tour-price"><span class="dollar">$</span>${tour.price}</p>
        </div>
        <p class="tour-title">${tour.name}</p>
        <div class="tour-info">
          <div class="tour-info-box tour-info-location">
            <i class="far fa-flag"></i>
            <p>${tour.location}</p>
          </div>
          <div class="tour-info-box tour-info-groupSize">
            <i class="far fa-user"></i>
            <p>${tour.groupSize}</p>
          </div>
          <div class="tour-info-box tour-info-date">
            <i class="far fa-calendar-alt"></i>
            <p>${new Date(tour.dates[0]).getFullYear()}, ${new Date(
      tour.dates[0]
    ).getUTCMonth()}</p>
          </div>
          <div class="tour-info-box tour-info-duration">
            <i class="far fa-hourglass"></i>
            <p>${tour.difficulty}</p>
          </div>
        </div>
        <p class="tour-description">
          ${tour.info}
        </p>
        <div class="tour-btn">
          <a href="#" class="tour-link">Details</a>
        </div>
      </div>
    </div>`;

    this.tourContainer.insertAdjacentHTML("afterbegin", markup);
    const tourRating = document.querySelector(".tour-stars");
    const star = `<i class="far fa-star"></i>`;
    for (let i = 0; i < ratings; i++) {
      tourRating.insertAdjacentHTML("afterbegin", star);
    }
    return markup;
  }
}
