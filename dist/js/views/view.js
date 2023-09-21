export class View {
    constructor(selector) {
        const elemento = document.querySelector(selector);
        if (elemento) {
            this.elemento = elemento;
        }
        else {
            throw Error(`No existe ${selector} en el DOM. Por favor validar`);
        }
    }
    update(model) {
        this.elemento.innerHTML = this.crearTemplate(model);
    }
}
