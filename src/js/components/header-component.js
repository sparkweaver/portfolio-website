const template = document.createElement('template');
template.innerHTML = `
    <style>
        :host {
            display: block;
            background-color: #333;
            color: #fff;
            padding: 1rem;
            text-align: center;
        }

        h1 {
            margin: 0;
            font-size: 2rem;
        }
    </style>
    <header>
        <h1>Spark Surfers Studio</h1>
    </header>
`;

class HeaderComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('header-component', HeaderComponent);

export default HeaderComponent;
