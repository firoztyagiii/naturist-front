export class TourDetailView {
  constructor() {
    this.tourContainer = document.querySelector(".tour-container");
  }

  generateMarkup(tour) {
    const reviewLength = tour.reviews.length;
    const markup = `<div class="tour">
        <i class="far fa-bookmark"></i>
        <div class="tour-info">
        <div class="tour-title">
        <span>${tour.name.toUpperCase()}</span>

        </div>
            <div class="tour-info-details">
                <div class="tour-info-detail">
                    <i class="far fa-clock"></i>
                    <p>${tour.tourLength} Days</p>
                </div>
                <div class="tour-info-detail">
                    <i class="far fa-map"></i>
                    <p>${tour.location}</p>
                </div>
            </div>
        </div>
      </div>
      <div class="tour-facts">
        <div class="tour-facts-left">
          <p class="tour-quick-facts">Quick Facts</p>
          <div class="tour-facts-items">
            <div class="tour-facts-item">
              <i class="far fa-calendar-minus"></i>
              <span>Next Date</span>
              <p>June 2021</p>
            </div>
            <div class="tour-facts-item">
              <i class="far fa-chart-bar"></i>
              <span>Difficulty</span>
              <p>${tour.difficulty.toUpperCase()}</p>
            </div>
            <div class="tour-facts-item">
              <i class="far fa-user"></i>
              <span>Group Size</span>
              <p>6</p>
            </div>
            <div class="tour-facts-item">
              <i class="far fa-star"></i>
              <span>Ratings</span>
              <p>${tour.averageRatings} / ${tour.totalRatings}</p>
            </div>
          </div>
        </div>
        <div class="tour-facts-right">
          <p class="tour-quick-facts">About the Mountain Biking</p>
          <p class="tour-description">
          ${tour.info}
          </p>
          <p class="tour-description">
                ${tour.description}
          </p>
        </div>
    </div>
    <div class="tour-images">
      <img src="./src/img/1.jpg" alt="">
      <img src="./src/img/2.jpg" alt="">
      <img src="./src/img/3.jpg" alt="">
    </div>
    <div class="tour-review">
      
    </div>`;

    this.tourContainer.innerHTML = "";
    this.tourContainer.insertAdjacentHTML("afterbegin", markup);

    if (reviewLength == 0) {
      const tourReview = document.querySelector(".tour-review");
      tourReview.style.padding = "0rem";
      tourReview.style.marginTop = "0";
    }

    const tourImg = document.querySelector(".tour");
    tourImg.style.backgroundImage = `linear-gradient(
      rgba(22, 160, 132, 0.8),
      rgba(46, 204, 112, 0.8)
    ), url("http://localhost:9090/${tour.headImg}")`;

    if (reviewLength != 0) {
      const tourReviewContainer = document.querySelector(".tour-review");
      const reviews = tour.reviews.map((rev) => {
        const stars = [];
        for (let i = 0; i < rev.rating; i++) {
          stars.push('<i class="material-icons">star</i>');
        }

        const markup = `<div class="review">
        <div class="review-info">
          <img src="./src/img/test.jpg" alt="reviewer-img">
          <p class="reviewer-name">${rev.user.name}</p>
        </div>
        <p class="review-text">${rev.review}</p>
        <div class="review-ratings">
          ${stars.join("")}
        </div>
      </div>`;
        return markup;
      });

      console.log(reviews.join(""));

      tourReviewContainer.innerHTML = reviews.join("");
      // document.querySelectorAll(".review").forEach((item) => {
      //   item.lastElementChild.remove();
      // });
    }
  }
}
