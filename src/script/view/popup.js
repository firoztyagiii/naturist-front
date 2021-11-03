export class Popup {
  constructor() {}

  showPopup(text) {
    const popup = document.querySelector(".popup");
    popup.textContent = text;
    popup.style.opacity = "1";
    popup.style.zIndex = "100";
  }

  hidePopup() {
    setTimeout(() => {
      const popup = document.querySelector(".popup");
      popup.style.opacity = "0";
      setTimeout(() => {
        popup.style.zIndex = "-10";
      }, 500);
    }, 3000);
  }
}
