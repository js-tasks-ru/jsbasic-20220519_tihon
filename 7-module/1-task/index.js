import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.createHtml();
    this.ribbonCarousel();
    this.selectCategory();
  }

  get elem() {
    return this._container;
  }

  createHtml() {
    let robbin = `
    <div class="ribbon">
      <button class="ribbon__arrow ribbon__arrow_left">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>

      <nav class="ribbon__inner">
        ` + this.categories.map(item => `
        <a href="#" class="ribbon__item" data-id="${item.id}">${item.name}</a>
        `).join("") + `
      </nav>

      <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>
    </div>
    `;
    this._container = createElement(robbin);
  }

  ribbonCarousel() {
    let ribbonInner = this.elem.querySelector(".ribbon__inner");
    let ribbonButtonLeft = this.elem.querySelector(".ribbon__arrow_left");
    let ribbonButtonRight = this.elem.querySelector(".ribbon__arrow_right");

    function calculateScrolling() {
      const scroll = {};
      const scrollLeft = ribbonInner.scrollLeft;
      const scrollWidth = ribbonInner.scrollWidth;
      const clientWidth = ribbonInner.clientWidth;
      const scrollRight = scrollWidth - scrollLeft - clientWidth;

      scroll.scrollLeft = scrollLeft;
      scroll.scrollWidth = scrollWidth;
      scroll.clientWidth = clientWidth;
      scroll.scrollRight = scrollRight;

      return scroll;
    }

    ribbonButtonRight.addEventListener("click", () => {
      ribbonInner.scrollBy(350, 0);
      let meaningScrollRight = calculateScrolling().scrollRight;
      if (meaningScrollRight !== 0) {
        ribbonButtonRight.classList.add("ribbon__arrow_visible");
        ribbonButtonLeft.classList.add("ribbon__arrow_visible");
      }
      if (meaningScrollRight < 1) {
        ribbonButtonRight.classList.remove("ribbon__arrow_visible");
      }
      console.log(calculateScrolling().scrollRight);
    });

    ribbonButtonLeft.addEventListener("click", () => {
      ribbonInner.scrollBy(-350, 0);
      let meaningScrollLeft = calculateScrolling().scrollLeft;
      if (meaningScrollLeft !== 0) {
        ribbonButtonLeft.classList.add("ribbon__arrow_visible");
        ribbonButtonRight.classList.add("ribbon__arrow_visible");
      }
      if (meaningScrollLeft === 0) {
        ribbonButtonLeft.classList.remove("ribbon__arrow_visible");
        ribbonButtonRight.classList.add("ribbon__arrow_visible");
      }
      console.log(calculateScrolling().scrollLeft);
    });
  }

  selectCategory() {
    let ribbonInner = this.elem.querySelector(".ribbon__inner");
    let ribbonItem = this.elem.querySelectorAll(".ribbon__item");

    ribbonInner.addEventListener("click", (evt) => {
      evt.preventDefault();
      for (let item of ribbonItem) {
        item.classList.remove("ribbon__item_active");
      }
      evt.target.classList.add("ribbon__item_active");
      
      this.elem.dispatchEvent(new CustomEvent("ribbon-select", {
        detail: evt.target.dataset.id,
        bubbles: true
      }))
    });    
  }
}
