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
        <a href="/" data-link>Home</a>
        <a href="/about" data-link>About</a>
        <a href="/projects" data-link>Projects</a>
        <a href="/contact" data-link>Contact</a>
    </nav>
`;

class NavBarComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.onNavigate = this.onNavigate.bind(this);
  }

  connectedCallback() {
    this.shadowRoot.querySelectorAll('a[data-link]').forEach((link) => {
      link.addEventListener('click', this.onNavigate);
    });
  }

  onNavigate(event) {
    event.preventDefault();
    const path = event.target.getAttribute('href');
    window.history.pushState({}, '', path);
    this.dispatchEvent(new CustomEvent('navigate', { detail:path }));
  }
}
window.customElements.define('navbar-component', NavBarComponent);

export default NavBarComponent;
