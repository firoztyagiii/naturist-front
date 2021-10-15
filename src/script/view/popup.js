export class Popup {
  constructor() {}

  showPopup(text) {
    const popup = document.querySelector(".popup");
    popup.textContent = text;
    popup.style.display = "block";
    popup.style.opacity = "1";
  }

  hidePopup() {
    setTimeout(() => {
      const popup = document.querySelector(".popup");
      popup.style.display = "none";
      popup.style.opacity = "0";
    }, 3000);
  }
}
