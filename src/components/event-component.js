class EventComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          background-color: #ecf0f1;
          padding: 1rem;
          box-sizing: border-box;
          border-radius: 10px;
          margin: 1rem;
          max-width: 80%;
        }
  
        .event-container {
          display: flex;
          flex-direction: row;
          align-items: center;
          text-align: center;
          gap: 2rem;
        }
  
        .event-image {
          width: auto;
          height: 100%;
          max-width: 20%;
          object-fit: cover;
          border-radius: 10px;
        }
  
        h2 {
          margin: 1rem 0 0.5rem 0;
          font-size: 1.5rem;
        }
  
        p {
          margin: 0.5rem 0;
          font-size: 1rem;
        }
  
        .date {
          font-weight: bold;
          color: #7f8c8d;
        }
  
        .event-link {
          margin-top: 1rem;
          display: inline-block;
          padding: 0.5rem 1rem;
          background-color: #3498db;
          color: #fff;
          text-decoration: none;
          border-radius: 4px;
          transition: background-color 0.3s ease;
        }
  
        .event-link:hover {
          background-color: #2980b9;
        }
      </style>
      <div class="event-container">
        <img class="event-image" src="${this.getAttribute('image')}" alt="Event Image">
        <div class="event-data">
          <h2>${this.getAttribute('title')}</h2>
          <p class="date">${this.getAttribute('date')}</p>
          <p>${this.getAttribute('description')}</p>
          <a class="event-link" href="${this.getAttribute('link')}">${this.getAttribute('link-text')}</a>
        </div>
      </div>
    `;
  }
}

window.customElements.define('event-component', EventComponent);

export default EventComponent;
