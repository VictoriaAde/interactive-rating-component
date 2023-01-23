let rate = document.querySelectorAll(".rating");

rate.forEach((el) => el.addEventListener("click", rateFunc));
function rateFunc(e) {
  //change background color when when you select
  e.target.style.backgroundColor = "hsl(217, 12%, 63%)";
  e.target.style.color = "white";
  let rateNumber = e.target.innerHTML;
  console.log(rateNumber);
  // let showRateDom = document.getElementById("rateNumberDom");
  // showRateDom.innerHTML = rateNumber;
}

document
  .querySelector(".ratingcard__submit")
  .addEventListener("click", function () {
    document.querySelector(".ratingcard").classList.add("hide");
    document.querySelector(".thankyou").classList.remove("hide");
    document.querySelector(".thankyou").classList.add("show");
  });
