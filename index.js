const main = document.querySelector(".main-content");
const thanksContent = document.querySelector(".thanks");
const submitButton = document.getElementById("btn-submit");
const rate = document.getElementById("rate");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn");

submitButton.addEventListener("click", () => {
  thanksContent.classList.remove("hidden");
  main.style.display = "none";
});

rate.addEventListener("click", () => {
  thanksContent.classList.add("hidden");
  main.style.display = "block";
});

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    if (rating.innerHTML === "none") {
      rating.innerHTML = rate.innerHTML;
    } else {
      rating.innerHTML = "none";
    }
  });
});
rate.addEventListener("click", () => {
  thanksContent.classList.add("hidden");
  main.style.display = "block";
  rating.innerHTML = "none";
});
