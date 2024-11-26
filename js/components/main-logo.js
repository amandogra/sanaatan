export default class MainLogoComponent extends HTMLElement {
  constructor() {
    super();
    this.body = document.body;
    this.innerHTML = `
      <style>
        .main-logo {
          color: var(--color-primary)
          display: block;
          position: relative;
          text-decoration: none;
        }
        .main-logo_upper {
          display: block;
          font-family: var(--font-stylized);
          font-size: 12px;
          font-weight: normal;
          letter-spacing: 1px;
          line-height: 2;
          text-transform: uppercase;
        }
        .main-logo_lower {
          display: block;
          font-family: var(--font-primary);
          font-size: 18px;
          line-height: 1.3541666667;
          margin-top: -0.5rem;
        }
      </style>
      <a href="/" class="main-logo">
        <span class="main-logo_upper">notes from</span>
        <span class="main-logo_lower">Mahabharat</span>
      </a>
    `;
  }

  connectedCallback() {
  }
}

if (!window.customElements.get('main-logo')) {
  window.customElements.define('main-logo', MainLogoComponent);
}
