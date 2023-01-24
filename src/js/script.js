let rate = document.querySelectorAll(".rating");
rate.forEach((el) => el.addEventListener("click", rateLogic));

function rateLogic(e) {
  e.target.style.backgroundColor = "hsl(217, 12%, 63%)";
  e.target.style.color = "white";

  let rateNumber = e.target.innerHTML;
  let showRateDom = document.getElementById("rateNumberDom");
  showRateDom.innerHTML = rateNumber;

  let currentSelected = e.target.id;
  rate.forEach((el) => {
    if (el.id !== currentSelected) {
      el.style.backgroundColor = "hsl(213, 20%, 23%)";
      el.style.color = "hsl(217, 12%, 63%)";
    }
  });
}

document
  .querySelector(".ratingcard__submit")
  .addEventListener("click", onSubmit);

function onSubmit() {
  document.querySelector(".ratingcard").classList.add("hide");
  document.querySelector(".thankyou").classList.remove("hide");
  document.querySelector(".thankyou").classList.add("show");
}
