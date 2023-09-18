export class MensajeView {
    constructor(selector) {
        this.selectorMsg = document.querySelector(selector);
    }
    crearTemplate(model) {
        return `
            <p class="alert alert-info">${model}</p>
        `;
    }
    update(model) {
        this.selectorMsg.innerHTML = this.crearTemplate(model);
    }
}
