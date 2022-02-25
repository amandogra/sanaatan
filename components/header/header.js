import Template from './template.js';

export default class MmbHeader extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = Template.render();
    }
}

if (!customElements.get('mmb-header')) {
    customElements.define('mmb-header', MmbHeader );
}
