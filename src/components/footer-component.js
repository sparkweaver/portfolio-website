const template = document.createElement('template');
template.innerHTML = `
    <style>
        :host {
            display: block;
            background-color: #333;
            width: 100%;
            color: #fff;
            padding: 1rem;
            text-align: center;
            position: fixed;
            bottom: 0;
            left: 0;
        }
    </style>

    <div>
        <p>&copy; 2024 Spark Surfers Studio. All rights reserved.</p>
        <p>License: MIT</p>
    </div>
`;

class FooterComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('footer-component', FooterComponent);

export default FooterComponent;
