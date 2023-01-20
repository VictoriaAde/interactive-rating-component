let rate = document.querySelectorAll(".rating");

rate.forEach((el) => el.addEventListener("click", rateFunc));

let rateNumber;
let selectedRate = document.getElementById("selectedRate");
selectedRate.innerHTML = rateNumber;
console.log(selectedRate);
function rateFunc(e) {
  e.target.style.backgroundColor = "hsl(217, 12%, 63%)";
  e.target.style.color = "white";

  rateNumber = e.target.innerHTML;
  console.log(rateNumber);
}
