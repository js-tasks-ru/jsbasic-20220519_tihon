function initCarousel() {
  let btnRight = document.querySelector(".carousel__arrow_right");
  let btnLeft = document.querySelector(".carousel__arrow_left");

  let carouselInner = document.querySelector(".carousel__inner");
  let carouselSlide = document.querySelectorAll(".carousel__slide");

  let sliderWidth = carouselInner.offsetWidth;
  let position = 0;
  let counter = 0;

  btnLeft.style.display = 'none';

  btnRight.addEventListener("click", () => { 
    position -= sliderWidth;
    counter++;

    position = Math.max(position, -sliderWidth * (carouselSlide.length -1));
    carouselInner.style.transform = "translateX(" + position + "px)";
    console.log(counter);

    if (counter >= carouselSlide.length -1) {
      btnRight.style.display = 'none';
    } else {
      btnRight.style.display = '';
    }

  });

  btnLeft.addEventListener("click", () => {
    position += sliderWidth;
    counter--;

    position = Math.min(position, 0);
    carouselInner.style.transform = "translateX(" + position + "px)";
    console.log(counter);

    if (counter <= 0) {
      btnLeft.style.display = 'none';
    } else {
      btnLeft.style.display = '';
    }
  });
}