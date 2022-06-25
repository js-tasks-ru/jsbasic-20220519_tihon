import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.createHtml();
    this.initCarousel();
  }

  get elem() {
    return this._container;
  }

  createHtml() {
    let carousel = `
      <div class="carousel">
        <div class="carousel__arrow carousel__arrow_right">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </div>
        <div class="carousel__arrow carousel__arrow_left">
          <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
        </div>
       
        <div class="carousel__inner">
        ` + this.slides.map(item => `
          <div class="carousel__slide" data-id="${item.id}">
            <img src="/assets/images/carousel/${item.image}" class="carousel__img" alt="slide">
            <div class="carousel__caption">
              <span class="carousel__price">€${item.price}</span>
              <div class="carousel__title">${item.name}</div>
              <button type="button" class="carousel__button">
                <img src="/assets/images/icons/plus-icon.svg" alt="icon">
              </button>
            </div>
          </div>
          `).join("") + `
        </div>
      </div>
    `;
    this._container = createElement(carousel);

    let buttonAdd = this.elem.getElementsByClassName('carousel__button');

    for (let button of buttonAdd) {
      button.addEventListener('click', () => {
        this.elem.dispatchEvent(new CustomEvent("product-add", {
          detail: button.closest('.carousel__slide').dataset.id,
          bubbles: true
        }))
      });
    }

  }

  initCarousel() {
    let btnRight = this.elem.querySelector(".carousel__arrow_right");
    let btnLeft = this.elem.querySelector(".carousel__arrow_left");

    let carouselInner = this.elem.querySelector(".carousel__inner");
    let carouselSlide = this.elem.querySelectorAll(".carousel__slide");

    //let sliderWidth = carouselInner.offsetWidth;
    let position = 0;
    let counter = 0;

    btnLeft.style.display = 'none';

    btnRight.addEventListener("click", () => { 
      position -= carouselInner.offsetWidth;
      if ( ++ counter > 0) {
        btnLeft.style.display = '';
      }
  
      if (counter == carouselSlide.length -1) {
        btnRight.style.display = 'none';
      }
  
      position = Math.max(position, -carouselInner.offsetWidth * (carouselSlide.length -1));
      carouselInner.style.transform = "translateX(" + position + "px)";           
    });

    btnLeft.addEventListener("click", () => {
      position += carouselInner.offsetWidth;
      if ( -- counter == 0) {
        btnLeft.style.display = 'none';
      }
  
      if (counter < carouselSlide.length -1) {
        btnRight.style.display = '';
      }
  
      position = Math.min(position, 0);
      carouselInner.style.transform = "translateX(" + position + "px)";   
    });
  }
}
