const cards = document.querySelector(".cards__list");
const allCards = document.querySelectorAll(".card__item");

let compareArr = [];

cards.addEventListener("click", function (e) {
  if (e.target.classList.contains("card__item")) {
    // Comparing with another picture
    e.target.classList.add("show");
    const value = e.target.getAttribute("value");
    compareArr.push(value);
    const [first, second] = compareArr;
    if (compareArr.length === 2) {
      setTimeout(() => (first === second ? won() : updateUI()), 800);
    }
  }
});

const won = function () {
  alert("You won!");
  updateUI();
};

const updateUI = function () {
  allCards.forEach((el) => el.classList.remove("show"));
  compareArr = [];
};
