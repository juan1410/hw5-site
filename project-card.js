class ProjectCard extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        shadow.innerHTML = `
            <a class="card" target="_blank">
                <slot name="image"></slot>
                <slot name="title"></slot>
                <slot name="description"></slot>
            </a>
        `;
    }

    connectedCallback() {
        const link = this.querySelector('[slot="link"]');
        const anchor = this.shadowRoot.querySelector('a');

        if (link) {
            anchor.href = link.getAttribute('href');
        }
    }
}

customElements.define('project-card', ProjectCard);


