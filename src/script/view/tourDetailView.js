import { _DOMAIN } from "../model/model";
import { payment } from "../controller/paymentController";

export class TourDetailView {
  constructor() {
    this.tourContainer = document.querySelector(".tour-container");
  }

  addOrRemove() {
    return document.querySelector(".bookmark-icon").classList.contains("added");
  }

  generateMarkup(tour, isBookmarked) {
    const reviewLength = tour.reviews.length;
    const markup = `<div class="tour">
        <i class="${isBookmarked ? "fas added" : "far"} fa-bookmark bookmark-icon"></i>
        <div class="tour-info">
        <div class="tour-detail-title">
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
    <div class="slider ">
          <i class="fas fa-arrow-left arrow left-arrow"></i>
          <i class="fas fa-arrow-right arrow right-arrow"></i>
          <img class="slider-img" src="./src/img/1.jpg" data-img-number="1" alt="">
          <img class="slider-img" src="./src/img/2.jpg" data-img-number="2" alt="">
          <img class="slider-img" src="./src/img/3.jpg" data-img-number="3" alt="">
          
        </div>
    <div class="tour-images">
      <img src="./src/img/1.jpg" alt="">
      <img src="./src/img/2.jpg" alt="">
      <img src="./src/img/3.jpg" alt="">
    </div>
    
    <div class="tour-review">
      
    </div>
    <div class="booking-section">
    <div class="booking-container">
    <img src="./src/img/1.jpg" alt="">
  <div class="booking">
    <h1 class="booking-text">WHAT ARE YOU WAITING FOR?</h1>
    <p>7 days. 1 adventure. Infinite memories. Make it yours today!</p>
  </div>
  <button class="book-tour-btn" data-tour-id="${tour._id}"> Book Tour Now </button>
  </div>
</div>
    `;
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
    ), url("${_DOMAIN}/${tour.headImg}")`;

    if (reviewLength != 0) {
      const tourReviewContainer = document.querySelector(".tour-review");
      const reviews = tour.reviews.map((rev) => {
        const stars = [];
        for (let i = 0; i < rev.rating; i++) {
          stars.push('<i class="material-icons">star</i>');
        }

        const markup = `<div class="review">
        <div class="review-info">
          <img src="${_DOMAIN}/${rev.user.profilePhoto}" alt="reviewer-img">
          <p class="reviewer-name">${rev.user.name}</p>
        </div>
        <p class="review-text">${rev.review}</p>
        <div class="review-ratings">
          ${stars.join("")}
        </div>
      </div>`;
        return markup;
      });

      tourReviewContainer.innerHTML = reviews.join("");
    }
  }

  addToBookmark(cb, id) {
    const bookmarkBtn = document.querySelector(".fa-bookmark");
    bookmarkBtn.addEventListener("click", function () {
      cb(id);
    });
  }

  updateBookmarkUI(type) {
    if (type === "spinner") {
      document.querySelector(".bookmark-icon").className = "fas fa-spinner fa-spin bookmark-icon";
    } else if (type === "added") {
      document.querySelector(".bookmark-icon").className = "fas added fa-bookmark bookmark-icon";
    } else if (type === "removed") {
      document.querySelector(".bookmark-icon").className = "far fa-bookmark bookmark-icon";
    }
  }

  getBookBtn() {
    const bookBtn = document.querySelector(".book-tour-btn");
    return bookBtn;
  }

  bookingHandler(callAPI) {
    const bookBtn = document.querySelector(".book-tour-btn");
    bookBtn.addEventListener("click", async () => {
      bookBtn.textContent = "Processing...";
      const user = await callAPI("/api/user/about-me", "GET");
      if (user.status == "Fail") {
        window.location.href = "/login.html";
      }
      const id = window.location.search.split("=")[1];
      await payment(id);
    });
  }
}
