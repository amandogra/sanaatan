export default class SearchBarComponent extends HTMLElement {
  constructor() {
    super();
    this.body = document.body;
    this.innerHTML = `
      <style>
        .search-bar {
          position: relative;
        }
        .search-bar input {
          appearance: none;
          background: var(--bg-primary);
          border: 1px solid var(--stroke-primary);
          border-radius: 20px;
          color: var(--color-primary);
          padding: 0.4rem 0.4rem 0.4rem 1.7rem;
          width: 100%;
          max-width: 30rem;
          height: 2rem;
        }
        .search-bar__lens {
          fill: var(--color-secondary);
          position: absolute;
          left: 16px;
          top: 10px;
          width: 0.889rem;
          height: 0.889rem;
          display: block;
          color: white;
          z-index: 1;
        }

      </style>
      <div class="search-bar">
        <label for="main-search-bar" class="sr-only">Search</label>
        <input id="main-search-bar" type="search" placeholder="Which story are you looking for?" />
        <svg class="search-bar__lens" xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
        </svg>
      </div>
    `;
  }

  connectedCallback() {
  }
}

if (!window.customElements.get('search-bar')) {
  window.customElements.define('search-bar', SearchBarComponent);
}
