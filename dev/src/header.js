if (!customElements.get('s-header')) {
  customElements.define('s-header', class SHeader extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.initEventListeners();
    }

    initEventListeners(){
      this.btn = this.querySelector('.s-header__menu-btn')
      this.btn.addEventListener('click', () => {
        this.classList.toggle('s-header--menu-active')
      })
    }
  })
}

