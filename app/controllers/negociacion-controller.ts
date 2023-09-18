import {Negociacion} from "../models/negociacion.js";
import {Negociaciones} from "../models/negociaciones.js";
import {NegociacionesView} from "../views/negociaciones-view.js";

export class NegociacionController {
    private inputFecha: HTMLInputElement;
    private inputCantidad: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociaciones : Negociaciones = new Negociaciones();
    // ! Es MUY IMPORTANTE incluir el '#'
    private negociacionesView: NegociacionesView = new NegociacionesView('#negociaciones-view');
    constructor() {
        this.inputFecha = document.querySelector('#fecha');
        this.inputCantidad = document.querySelector('#cantidad');
        this.inputValor = document.querySelector('#valor')
        this.negociacionesView.update(this.negociaciones); // Para que muestre la tabla desde el inicio.
    }

    agregar(): void {
        const negociacion = this.crearNegociacion();
        this.negociaciones.agregar(negociacion);
        this.negociacionesView.update(this.negociaciones);
        this.limpiarFormulario();
    }

    crearNegociacion(): Negociacion {
        // Reemplaza '-' en todas las apariciones "g" por ';'. Porque date puede recibir una cadena "2000,12,12"
        const fecha = this.inputFecha.value.replace(/-/g, ',');
        // Parsear a los valores requeridos
        const cantidad = parseInt(this.inputCantidad.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacion(new Date(fecha), cantidad, valor)
    }

    limpiarFormulario() : void{
        this.inputFecha.value = '';
        this.inputCantidad.value = '';
        this.inputValor.value = '';
        this.inputFecha.focus();
    }
}