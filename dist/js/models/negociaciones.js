export class Negociaciones {
    constructor() {
        //private negociaciones: Array<Negociacion> = [];
        this.negociaciones = [];
    }
    agregar(negociacion) {
        this.negociaciones.push(negociacion);
    }
    /* Primera forma para hacer la lista no modificable
    obtenerLista() : Array<Negociacion>{
        // Todos los elementos de la lista negociaciones cópialos al nuevo Array
        // Así ya no pueden modificar nuestra lista
        return [...this.negociaciones];
    } */
    /* Segunda forma
    obtenerLista(): ReadonlyArray<Negociacion> {
        return this.negociaciones;
    }
    */
    obtenerLista() {
        return this.negociaciones;
    }
}
