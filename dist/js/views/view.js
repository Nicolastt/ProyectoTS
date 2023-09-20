export class View {
    constructor(selector) {
        this.elemento = document.querySelector(selector);
    }
    update(model) {
        // innerHTML : me permite colocar elementos html
        this.elemento.innerHTML = this.crearTemplate(model);
    }
}
