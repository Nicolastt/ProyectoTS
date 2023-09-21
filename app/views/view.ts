export abstract class View<T> {
    // * Usamos un genérico para arreglar los errores de la herencia de métodos.
    // Se puede tener más de un tipo genérico en la clase View<T,K>
    protected elemento: HTMLElement;
    protected escapar: boolean = false;

    // x?: tipoDeDato me permite poner un parámetro opcional
    // ! Los parámetros opcionales deben ser siempre los últimos parámetros.
    constructor(selector: string, escapar?: boolean) {
        const elemento = document.querySelector(selector);
        if (elemento) {
            this.elemento = elemento as HTMLElement;
        } else {
            throw Error(`No existe ${selector} en el DOM. Por favor validar`);
        }
    }

    // Estoy en W11
    protected abstract crearTemplate(model: T): string;

    update(model: T): void {
        let template = this.crearTemplate(model);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '')
        }
        // innerHTML : me permite colocar elementos html
        this.elemento.innerHTML = template;
    }
}