function initCarousel() {
  let slideInner = document.querySelector ('.carousel__inner');
  let slideRightArrow = document.querySelector ('.carousel__arrow_right');
  let slideLeftArrow = document.querySelector ('.carousel__arrow_left');
  let slides = document.querySelectorAll ('.carousel__slide');
  let slideWidth = slideInner.offsetWidth;
  let slidePosition = 1;

slideLeftArrow.style.display ='none';

slideRightArrow.addEventListener ('click', () => {
  slideInner.style.transform = `translateX(-${slideWidth * slidePosition++ + 'px'})`;
    if (slidePosition > slides.length -1) {
      slideRightArrow.style.display = 'none';
    } else {
      slideRightArrow.style.display = '';
    }
    if (slidePosition > 1) {
      slideLeftArrow.style.display = '';
    }
    console.log (slidePosition);
});

slideLeftArrow.addEventListener ('click', () => {
  slideInner.style.transform = `translateX(-${slideWidth * (--slidePosition -1) + 'px'})`;
  if (slidePosition > slides.length -1) {
    slideRightArrow.style.display = 'none';
  } else {
    slideRightArrow.style.display = '';
  }
  if (slidePosition == 1) {
    slideLeftArrow.style.display = 'none';
  }
  console.log (slidePosition);
});
}