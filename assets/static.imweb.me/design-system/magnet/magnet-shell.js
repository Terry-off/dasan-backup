export class MagnetShell extends HTMLElement {
    manifestPromise = null;
    manifestUrl = null;
    constructor() {
        super();
        this.manifestUrl = this.getAttribute('data-manifest-url') || '';
    }
    static get observedAttributes() {
        return ['manifest-url'];
    }
    async attributeChangedCallback(name) {
        if (name === 'manifest-url') {
            this.clearManifest();
        }
    }
    async connectedCallback() {
        await this.resetMangetNode();
    }
    async getManifest() {
        if (this.manifestPromise) {
            return this.manifestPromise;
        }
        if (!this.manifestUrl) {
            throw new Error('MagnetShell: manifest-url is required');
        }
        const promise = fetch(this.manifestUrl)
            .then(res => res.json())
            .catch(err => {
            // eslint-disable-next-line no-console
            console.error('MagnetShell: manifest fetch 실패', err);
            return { devMode: false, entry: '' };
        });
        this.manifestPromise = promise;
        return promise;
    }
    clearManifest() {
        this.manifestPromise = null;
    }
    async resetMangetNode() {
        if (!this.manifestUrl) {
            throw new Error('MagnetShell: manifest-url is required');
        }
        const { devMode, entry } = await this.getManifest();
        if (devMode) {
            // manifest url에 대한 상대경로 resolve
            // manifest url 은 http를 포함할수도, 경로만 포함할 수도 있음
            const hasHttp = this.manifestUrl.startsWith('http');
            const manifestUrl = hasHttp ? new URL(entry, this.manifestUrl) : new URL(entry, window.location.origin + this.manifestUrl);
            const partialHTML = await fetch(manifestUrl).then(res => res.text());
            const parsedElem = document.createRange().createContextualFragment(partialHTML);
            this.innerHTML = '';
            this.append(parsedElem);
        }
    }
}
