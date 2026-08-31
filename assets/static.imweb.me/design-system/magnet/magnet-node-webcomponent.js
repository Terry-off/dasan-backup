export class MagnetNodeWebComponent extends HTMLElement {
    async connectedCallback() {
        // DSD polyfill
        const declarativeTemplate = this.querySelector('template[shadowrootmode]');
        if (declarativeTemplate && !this.shadowRoot) {
            const mode = declarativeTemplate.getAttribute('shadowrootmode');
            const shadowRoot = this.attachShadow({ mode });
            shadowRoot.appendChild(declarativeTemplate.content);
            declarativeTemplate.remove();
            this.dispatchEvent(new CustomEvent('magnet:shadow-ready', {
                bubbles: true, // 필요에 따라
                composed: true, // <my-widget> 밖에서도 캡처 가능
                detail: { shadow: this.shadowRoot },
            }));
        }
    }
    async disconnectedCallback() {
        // 이후 업데이트를 위해 비워 둠.
    }
}
