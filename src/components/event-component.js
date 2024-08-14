class EventComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const title = this.getAttribute('title') || '';
    const date = this.getAttribute('date') || '';
    const description = this.getAttribute('description') || '';
    const image = this.getAttribute('image');
    const linkText = this.getAttribute('link-text');
    const link = this.getAttribute('link');

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          background-color: #ecf0f1;
          padding: 1rem;
          box-sizing: border-box;
          border-radius: 10px;
          margin-bottom: 1rem;
          width: 100%;
        }
  
        .event-container {
          display: flex;
          flex-direction: row;
          align-items: stretch;
          gap: 2rem;
          height: 100%;
        }
  
        .event-image {
          float: left;
          width: auto;
          height: auto;
          max-width: 20%;
          object-fit: cover;
          border-radius: 10px;
        }

        .event-data {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
        }
  
        h2 {
          margin: 0;
          font-size: 1.5rem;
        }
  
        p {
          margin: 0;
          font-size: 1rem;
        }
  
        .date {
          font-weight: bold;
          color: #7f8c8d;
        }
  
        .event-link {
          margin-top: auto;
          align-self: flex-end;
          display: inline-block;
          padding: 0.5rem 1rem;
          background-color: #3498db;
          color: #fff;
          text-decoration: none;
          border-radius: 10px;
          transition: background-color 0.3s ease;
        }
  
        .event-link:hover {
          background-color: #2980b9;
        }
      </style>
      <div class="event-container">
        ${image ? `<img class="event-image" src="${image}" alt="Event Image">` : ''}
        <div class="event-data">
          <h2>${title}</h2>
          <p class="date">${date}</p>
          <p>${description}</p>
          ${link && linkText ? `<a class="event-link" href="${link}">${linkText}</a>` : ''}
        </div>
      </div>
    `;
  }
}

window.customElements.define('event-component', EventComponent);

export default EventComponent;
