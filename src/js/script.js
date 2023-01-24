let rate = document.querySelectorAll(".rating");
rate.forEach((el) => el.addEventListener("click", rateFunc));

function rateFunc(e) {
  e.target.style.backgroundColor = "hsl(217, 12%, 63%)";
  e.target.style.color = "white";
  // e.target.classList.add("selected");

  let rateNumber = e.target.innerHTML;
  let showRateDom = document.getElementById("rateNumberDom");
  showRateDom.innerHTML = rateNumber;

  let currentSelected = e.target.id;
  rate.forEach((el) => {
    if (el.id !== currentSelected) {
      el.style.backgroundColor = "hsl(213, 20%, 23%)";
      el.style.color = "hsl(217, 12%, 63%)";
      // el.classList.add("notselected");
    }
  });
}

document
  .querySelector(".ratingcard__submit")
  .addEventListener("click", function () {
    document.querySelector(".ratingcard").classList.add("hide");
    document.querySelector(".thankyou").classList.remove("hide");
    document.querySelector(".thankyou").classList.add("show");
    console.log();
  });
