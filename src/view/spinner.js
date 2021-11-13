export class Spinner {
  constructor() {
    this.bg = document.querySelector(".bg");
    this.container = document.querySelector(".container");
  }
  showSpinner() {
    this.bg.classList.remove("hidden");
    this.container.style.filter = "blur(2px)";
  }

  hideSpinner() {
    this.bg.classList.add("hidden");
    this.container.style.filter = "blur(0px)";
  }
}
