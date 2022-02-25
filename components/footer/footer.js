import Template from './template.js';

export default class MmbFooter extends HTMLElement {
  constructor() {
    super();
    const params = {
      copyrightYear: new Date().getFullYear()
    };
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = Template.render(params);
  }
}

if (!customElements.get('mmb-footer')) {
  customElements.define('mmb-footer', MmbFooter);
}
