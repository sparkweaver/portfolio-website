class NavBarComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
    <style>
      :host {
        display: block;
        background-color: #3498db;
        color: #fff;
        box-sizing: border-box;
        height: 45px;
      }

      nav {
        display: flex;
        height: 100%;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
      }

      a {
        height: 100%;
        width: 160px;
        padding: 0.5rem 1.5rem;
        color: #fff;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        transition: background-color 0.3s, color 0.3s;
        border-left: 1px solid #555;
        box-sizing: border-box;
      }

      a:first-child {
        border-left: none;
      }

      a:hover {
        background-color: #5dade2;
        color: #000;
      }

      @media (max-width: 800px) {
        :host {
          height: auto;
        }

        nav {
          flex-direction: column;
        }

        a {
          width: 100%;
          border-left: none;
          border-bottom: 1px solid #555;
        }
      }
    </style>

    <nav>
        <a href="/" data-link>Home</a>
        <a href="/about" data-link>About</a>
        <a href="/blog" data-link>Blog</a>
        <a href="/projects" data-link>Projects</a>
        <a href="/contact" data-link>Contact</a>
    </nav>
    `;
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
    this.dispatchEvent(new CustomEvent('navigate', { detail: path }));
  }
}
window.customElements.define('navbar-component', NavBarComponent);

export default NavBarComponent;
