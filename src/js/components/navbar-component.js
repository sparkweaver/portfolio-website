const template = document.createElement('template');
template.innerHTML = `
    <style>
        :host {
            display: block;
            background-color: #444;
            color: #fff;
            padding: 0.5rem;
        }
        nav {
            display: flex;
            justify-content: space-around;
        }
        a {
            color: #fff;
            text-devoration: none;
        }
    </style>

    <nav>
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/projects">Projects</a>
        <a href="/contact">Contact</a>
    </nav>
`;

class NavBarComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('navbar-component', NavBarComponent);

export default NavBarComponent;
