import {Negociacion} from "./negociacion.js";

export class Negociaciones {

    //private negociaciones: Array<Negociacion> = [];
    private negociaciones: Negociacion[] = [];

    agregar(negociacion: Negociacion): void {
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
    obtenerLista(): readonly Negociacion[]{
        return this.negociaciones;
    }
}