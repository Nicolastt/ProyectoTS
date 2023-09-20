export class View {
    // x?: tipoDeDato me permite poner un parámetro opcional
    // ! Los parámetros opcionales deben ser siempre los últimos parámetros.
    constructor(selector, escapar) {
        this.escapar = false;
        this.elemento = document.querySelector(selector);
        if (escapar)
            this.escapar = escapar;
    }
    update(model) {
        let template = this.crearTemplate(model);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        // innerHTML : me permite colocar elementos html
        this.elemento.innerHTML = template;
    }
}
