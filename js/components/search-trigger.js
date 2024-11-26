export default class SearchTriggerComponent extends HTMLElement {
  constructor() {
    super();
    this.body = document.body;
    this.innerHTML = `
      <style>
        .search-trigger {
          position: relative;
        }
        .search-trigger__lens {
          fill: black;
        }
        .dark-theme .search-trigger__lens {
          fill: white;
        }
      </style>
      <div class="search-trigger">
        <svg class="search-trigger__lens" xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
        </svg>
        <p class="sr-only">Search</p>
      </div>
    `;
  }

  connectedCallback() {
  }
}

if (!window.customElements.get('search-trigger')) {
  window.customElements.define('search-trigger', SearchTriggerComponent);
}
