document.addEventListener("DOMContentLoaded", function () {
    const ratings = document.querySelectorAll(".rating");
    const thankYouCard = document.querySelector(".container-thank-you");
    const selectedRatings = document.getElementById("selected-rating");
  
    let selectedRating = 0;
  
    ratings.forEach((rating) => {
      rating.addEventListener("click", function () {
        selectedRating = parseInt(this.dataset.value);
        ratings.forEach((rating) => rating.classList.remove("selected"));
        this.classList.add("selected");
      });
    });
  
    const submitButton = document.getElementById("btn");
    submitButton.addEventListener("click", function () {
      document.querySelector(".container").classList.add("hide");
      selectedRatings.textContent = selectedRating;
      thankYouCard.classList.remove("hide");
    });
  });
  