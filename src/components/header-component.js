class HeaderComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
    <style>
        :host {
            display: block;
            background-color: #333;
            color: #fff;
            padding: 1rem;
            text-align: center;
        }

        header {
          display: flex;
          flex-direction: row;
        }

        h1 {
            margin: 0;
            font-size: 2rem;
        }

        img {
          width:50px;
          height:auto;
        }
    </style>
    <header>
      <div>
        <img src="src/assets/logo.png"
      </div>
      <div>
        <h1>${this.getAttribute('title')}</h1>
      </div>
    </header>
    `;
  }
}

window.customElements.define('header-component', HeaderComponent);

export default HeaderComponent;
