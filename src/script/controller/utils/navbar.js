const bars = document.querySelector(".bars");
const lists = document.querySelectorAll(".list");

export const navBar = () => {
  bars.addEventListener("click", function () {
    lists.forEach((item) => {
      item.classList.toggle("slide");
    });
  });
};
