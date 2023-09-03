    document.addEventListener("DOMContentLoaded", function() {
    const slidesContainer = document.querySelector(".slides");
    const slides = slidesContainer.querySelectorAll("img");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    const radioButtons = document.querySelectorAll(".radio-buttons input");
  
    let currentIndex = 0;
    let slideWidth = slides[0].clientWidth;
  
    function goToSlide(index) {
        if (index >= slides.length - 2) {
            slidesContainer.style.transform = `translateX(0)`;
          } else {
            slidesContainer.style.transform = `translateX(-${slideWidth * index}px)`;
          }
    }
  
    prevButton.addEventListener("click", function() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      goToSlide(currentIndex);
      radioButtons[currentIndex].checked = true;
    });
        
    nextButton.addEventListener("click", function() {
      currentIndex = (currentIndex + 1) % slides.length;
      goToSlide(currentIndex);
      radioButtons[currentIndex].checked = true;
    });
  
    radioButtons.forEach(function(button, index) {
      button.addEventListener("click", function() {
        currentIndex = index;
        goToSlide(currentIndex);
      });
    });
  });