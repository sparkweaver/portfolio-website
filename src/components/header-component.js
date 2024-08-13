class HeaderComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
    <style>
      :host {
        display: block;
        background-color: #34495e;
        color: #fff;
        padding: 1rem;
        box-sizing: border-box;
        height: 100px;
      }

      header {
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 100%;
        box-sizing: border-box;
      }

      .text-container {
        height: 100%;
        display: flex;
        align-items: center;
        flex-grow: 1;
        flex-direction: column;
        justify-content: center;
      }

      h1, p {
        margin: 0;
      }

      p {
        font-style: italic;
      }
    </style>
    <header>
      <div class="text-container text">
        <h1>${this.getAttribute('title')}</h1>
        <p>${this.getAttribute('sub-title')}</p>
      </div>
    </header>
    `;
  }
}

window.customElements.define('header-component', HeaderComponent);

export default HeaderComponent;
