export abstract class View<T> {
    // * Usamos un genérico para arreglar los errores de la herencia de métodos.
    // Se puede tener más de un tipo genérico en la clase View<T,K>
    protected elemento: HTMLAnchorElement;

    constructor(selector: string) {
        this.elemento = document.querySelector(selector)
    }

    // Estoy en W11
    protected abstract crearTemplate(model: T): string;

    update(model: T): void {
        // innerHTML : me permite colocar elementos html
        this.elemento.innerHTML = this.crearTemplate(model);
    }
}