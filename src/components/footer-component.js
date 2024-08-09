class FooterComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
            display: block;
            background-color: #333;
            width: 100%;
            height: 80px;
            color: #fff;
            padding: 1rem;
            bottom: 0;
            left: 0;
            box-sizing: border-box;
        }

        div {
          display: flex;
          width: 100%;
          height: 100%;
          align-items: center;
          justify-content: center;
        }

        p {
          margin: 0;
        }
      </style>

      <div>
          <p>${this.getAttribute('text')}</p>
      </div>
    `;
  }
}

window.customElements.define('footer-component', FooterComponent);

export default FooterComponent;
