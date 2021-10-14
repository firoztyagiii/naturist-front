export class Spinner {
  constructor() {
    this.bg = document.querySelector(".bg");
  }
  showSpinner() {
    this.bg.classList.remove("hidden");
  }

  hideSpinner() {
    this.bg.classList.add("hidden");
  }
}
