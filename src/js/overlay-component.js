const template = document.createElement('template');
template.innerHTML = `
  <style>
    :host {
      position: fixed;
      width: 100%;
      height: 100%;
      background: #333;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: transform 0.5s ease-in-out;
      z-index: 1000;
    }

    .overlay-content {
      text-align: center;
    }
  </style>

  <div class="overlay-content">
    <h1>Welcome to Spark Surfers Studio</h1>
    <p>Click to enter</p>
  </div>
`;

class OverlayComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.hideOverlay = this.hideOverlay.bind(this);
  }

  connectedCallback() {
    this.addEventListener('click', this.hideOverlay);
  }

  disconnectedCallback() {
    this.removeEventListener('click', this.hideOverlay);
  }

  hideOverlay() {
    this.style.transform = 'translateX(-100%)';
    setTimeout(() => {
      this.style.display = 'none';
    }, 500);
  }
}

window.customElements.define('overlay-component', OverlayComponent);

export default OverlayComponent;
