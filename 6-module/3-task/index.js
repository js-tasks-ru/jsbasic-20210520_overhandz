import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    let carouselRoot = document.createElement ('div');
    carouselRoot.classList.add ('carousel');
    carouselRoot.insertAdjacentHTML ('beforeend',
    `<div class="carousel__arrow carousel__arrow_right">
    <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </div>
    <div class="carousel__arrow carousel__arrow_left">
    <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
    </div>
    <div class="carousel__inner">
    
    </div>
    `);
    this.elem = carouselRoot;
    let carouselInner = carouselRoot.querySelector('.carousel__inner');

    slides.forEach (slide => {
      let newSlide = document.createElement ('div');
      newSlide.classList.add ('carousel__slide');
      newSlide.setAttribute ('data-id', `${slide.id}`);
      newSlide.insertAdjacentHTML ('beforeend', `<img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide"><div class="carousel__caption"><span class="carousel__price">${'€' +slide.price.toFixed(2)}</span><div class="carousel__title">${slide.name}</div><button type="button" class="carousel__button"><img src="/assets/images/icons/plus-icon.svg" alt="icon"></button></div>`);
      carouselInner.append(newSlide);
      
      let addedToCart = new CustomEvent("product-add", {
        detail: slide.id,
        bubbles: true
    });
    newSlide.addEventListener ('click', function (e) {
      if (e.target.classList.contains('carousel__button')) {
          newSlide.dispatchEvent(addedToCart);
      }
  });

    });

  let slideInner = carouselInner;
  let slideRightArrow = carouselRoot.querySelector ('.carousel__arrow_right');
  let slideLeftArrow = carouselRoot.querySelector ('.carousel__arrow_left');
  let allSlides = carouselRoot.querySelectorAll ('.carousel__slide');
  let slidePosition = 1;

slideLeftArrow.style.display ='none';

slideRightArrow.addEventListener ('click', () => {
  slideInner.style.transform = `translateX(-${slideInner.offsetWidth * slidePosition++ + 'px'})`;
    if (slidePosition > allSlides.length -1) {
      slideRightArrow.style.display = 'none';
    } else {
      slideRightArrow.style.display = '';
    }
    if (slidePosition > 1) {
      slideLeftArrow.style.display = '';
    }
});

slideLeftArrow.addEventListener ('click', () => {
  slideInner.style.transform = `translateX(-${slideInner.offsetWidth * (--slidePosition -1) + 'px'})`;
  if (slidePosition > allSlides.length -1) {
    slideRightArrow.style.display = 'none';
  } else {
    slideRightArrow.style.display = '';
  }
  if (slidePosition == 1) {
    slideLeftArrow.style.display = 'none';
  }
});
  
  }
}