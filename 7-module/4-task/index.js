export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.value = value;
    this.steps = steps;

    let newSlider = document.createElement ('div');
    newSlider.classList.add ('slider');
    newSlider.innerHTML = `
    <div class="slider__thumb">
    <span class="slider__value">${value}</span>
    </div>
    <div class="slider__progress"></div>
    <div class="slider__steps">
    </div>
    `;
    this.elem = newSlider;

    let spanContainer = this.elem.querySelector('.slider__steps');
    for (let i = 0; i < this.steps; i++) {
      let span = document.createElement('span');
      spanContainer.append(span);
    }
    spanContainer.firstElementChild.classList.add('slider__step-active');

    this.elem.addEventListener('click', (event) => {
      let left = event.clientX - this.elem.getBoundingClientRect().left;
      let leftRelative = left / this.elem.offsetWidth;
      let segments = this.steps - 1;
      let approximateValue = leftRelative * segments;
      let value = Math.round(approximateValue);
      let valuePercents = value / segments * 100;
      let thumb = this.elem.querySelector('.slider__thumb');
      let progress = this.elem.querySelector('.slider__progress');
      let innerValue = this.elem.querySelector('.slider__value');
      let allSteps = document.querySelector('.slider__steps');
      let spans = allSteps.children;
      for (let span of spans){
        span.classList.remove('slider__step-active');
      }
      this.value = value;
      spans[value].classList.add('slider__step-active');
      thumb.style.left = `${valuePercents}%`;
      progress.style.width = `${valuePercents}%`;
      innerValue.innerHTML = `${value++}`;
      let sliderChangeEvent = new CustomEvent('slider-change', {
        detail: this.value,
        bubbles: true
      });
      this.elem.dispatchEvent(sliderChangeEvent);
    });

    this.elem.addEventListener('pointerdown', (event) => {
      event.preventDefault();
      this.elem.classList.add('slider_dragging');
      let thumb = this.elem.querySelector('.slider__thumb');
      thumb.ondragstart = () => false;
      
      document.addEventListener('pointermove', dragging);

      document.addEventListener('pointerup', () => {
        document.removeEventListener('pointermove', dragging);
        let sliderChangeEvent = new CustomEvent('slider-change', {
          detail: this.value + 1,
          bubbles: true
        });
        this.elem.dispatchEvent(sliderChangeEvent);
      });
    });
    

    function dragging(event) {
      let slider = document.querySelector('.slider');
      let left = event.clientX - slider.getBoundingClientRect().left;
      let leftRelative = left / slider.offsetWidth;
      let progress = slider.querySelector('.slider__progress');
      let thumb = slider.querySelector('.slider__thumb');

      if (leftRelative < 0) {
        leftRelative = 0;
      }

      if (leftRelative > 1) {
        leftRelative = 1;
      }

      let leftPercents = leftRelative * 100;

      thumb.style.left = `${leftPercents}%`;
      progress.style.width = `${leftPercents}%`;

      let segments = steps - 1;
      let approximateValue = leftRelative * segments;
      let value = Math.round(approximateValue);
      let innerValue = slider.querySelector('.slider__value');
      innerValue.innerHTML = `${value++}`;
    }

  }
}