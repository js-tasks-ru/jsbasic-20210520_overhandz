import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    let modalNew = document.createElement('div');
    modalNew.classList.add('modal');
    this.elem = modalNew;
    this.elem.innerHTML = `
    <div class="modal__overlay"></div>
    <div class="modal__inner">
      <div class="modal__header">
        <button type="button" class="modal__close">
          <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
        </button>
        <h3 class="modal__title">
        </h3>
      </div>

    </div>
    `;
    let closeBtn = this.elem.querySelector('.modal__close');
    closeBtn.addEventListener('click', () => {
      document.body.classList.remove('is-modal-open');
      this.elem.remove();
    });
    document.addEventListener('keydown', (event) => {
      if (event.code === 'Escape') {
        document.body.classList.remove('is-modal-open');
        this.elem.remove();
      }
    });

  }
  open() {
    document.body.classList.add('is-modal-open');
    document.body.append(this.elem);
  }
  setTitle(modalTitleContent) {
    let title = this.elem.querySelector('.modal__title');
    title.innerHTML=`${modalTitleContent}`;
  }
  setBody(node) {
    let inner = this.elem.querySelector('.modal__inner');
    let modalBody = document.createElement('div');
    modalBody.append(node);
    modalBody.classList.add('modal__body');
    inner.append(modalBody);
  }
  close() {
    document.body.classList.remove('is-modal-open');
    this.elem.remove();
  }
}
