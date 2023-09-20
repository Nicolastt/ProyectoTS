import {Negociacion} from "../models/negociacion.js";
import {Negociaciones} from "../models/negociaciones.js";
import {NegociacionesView} from "../views/negociaciones-view.js";
import {MensajeView} from "../views/mensaje-view.js";
import {DiasSemana} from "../enums/dias-semana.js";

export class NegociacionController {
    private inputFecha: HTMLInputElement;
    private inputCantidad: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociaciones: Negociaciones = new Negociaciones();
    // ! Es MUY IMPORTANTE incluir el '#'
    private negociacionesView: NegociacionesView = new NegociacionesView('#negociaciones-view');
    private mensajeView: MensajeView = new MensajeView('#mensaje-view')

    constructor() {
        this.inputFecha = document.querySelector('#fecha');
        this.inputCantidad = document.querySelector('#cantidad');
        this.inputValor = document.querySelector('#valor')
        this.negociacionesView.update(this.negociaciones); // Para que muestre la tabla desde el inicio.
    }

    public agregar(): void {
        const negociacion = this.crearNegociacion();
        // La semana comienza con domingo = 0, por lo cual sábado sería 6
        if (!this.esDiaComercial(negociacion.fecha)) {
            this.mensajeView.update('Solo se aceptan días laborables');
            return;
        }

        this.negociaciones.agregar(negociacion);
        this.actualizarVistas();
        this.limpiarFormulario();
    }

    private esDiaComercial(fecha: Date): boolean {
        return fecha.getDay() > DiasSemana.DOMINGO && fecha.getDay() < DiasSemana.SABADO;
    }

    private crearNegociacion(): Negociacion {
        // Reemplaza '-' en todas las apariciones "g" por ';'. Porque date puede recibir una cadena "2000,12,12"
        const fecha = this.inputFecha.value.replace(/-/g, ',');
        // Parsear a los valores requeridos
        const cantidad = parseInt(this.inputCantidad.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacion(new Date(fecha), cantidad, valor)
    }

    private limpiarFormulario(): void {
        this.inputFecha.value = '';
        this.inputCantidad.value = '';
        this.inputValor.value = '';
        this.inputFecha.focus();
    }

    private actualizarVistas(): void {
        this.negociacionesView.update(this.negociaciones);
        this.mensajeView.update('La negociación fue registrada exitosamente');
    }
}