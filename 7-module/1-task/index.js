import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    let parentDiv = document.createElement('div');
    parentDiv.classList.add('ribbon');
    this.elem = parentDiv;
    this.elem.innerHTML = `
    <button class="ribbon__arrow ribbon__arrow_left ribbon__arrow_visible">
    <img src="/assets/images/icons/angle-icon.svg" alt="icon">
  </button>
  <nav class="ribbon__inner">
  </nav>
  <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
    <img src="/assets/images/icons/angle-icon.svg" alt="icon">
  </button>
    `;
    let ribbonNav = this.elem.querySelector('.ribbon__inner');

    this.categories.forEach (category => {
      let categoryLink = document.createElement('a');
      categoryLink.classList.add('ribbon__item');
      categoryLink.setAttribute('href', '#');
      categoryLink.setAttribute('data-id', `${category.id}`);
      categoryLink.innerHTML = `
      ${category.name}
      `;
      ribbonNav.append(categoryLink);
      });

      let arrowLeft = this.elem.querySelector('.ribbon__arrow_left');
      let arrowRight = this.elem.querySelector('.ribbon__arrow_right');
      let ribbonInner = this.elem.querySelector('.ribbon__inner');
      let allCategories = ribbonInner.querySelectorAll('.ribbon__item');

let removeActive = function () {
  for (let category of allCategories) {
    category.classList.remove('ribbon__item_active');
  }
};

        this.elem.addEventListener ('click', (e) => {
          if (e.target.classList.contains ('ribbon__item')) {
            e.preventDefault();
            removeActive();
            e.target.classList.add('ribbon__item_active');
            let ourEvent = new CustomEvent('ribbon-select', { // имя события должно быть именно 'ribbon-select'
              detail: e.target.dataset.id, // уникальный идентификатора категории из её объекта
              bubbles: true // это событие всплывает - это понадобится в дальнейшем
            });
            this.elem.dispatchEvent(ourEvent);
          }
        });

      arrowRight.addEventListener('click', () => {
        ribbonNav.scrollBy(350,0);
      });

      arrowLeft.addEventListener('click', () => {
        ribbonNav.scrollBy(-350,0);
      });

      ribbonNav.addEventListener('scroll', () => {
        let scrollLeft = ribbonNav.scrollLeft;
        let scrollWidth = ribbonNav.scrollWidth;
        let clientWidth = ribbonNav.clientWidth;
        let scrollRight = scrollWidth - scrollLeft - clientWidth;

        if (scrollLeft <1) {
          arrowLeft.classList.remove('ribbon__arrow_visible');
        } else {
          arrowLeft.classList.add('ribbon__arrow_visible');
        }

        if (scrollRight <1) {
          arrowRight.classList.remove('ribbon__arrow_visible');
        } else {
          arrowRight.classList.add('ribbon__arrow_visible');
        }
      });
  }
}