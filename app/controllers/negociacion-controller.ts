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
    private negociacionesView: NegociacionesView = new NegociacionesView('#negociaciones-view', true);
    private mensajeView: MensajeView = new MensajeView('#mensaje-view')

    constructor() {
        // as ... : Es como se castea en Ts, se especifica que vamos a recibir un HTMLInputElement.
        this.inputFecha = document.querySelector('#fecha') as HTMLInputElement;
        this.inputCantidad = document.querySelector('#cantidad') as HTMLInputElement;
        this.inputValor = document.querySelector('#valor') as HTMLInputElement;
        this.negociacionesView.update(this.negociaciones); // Para que muestre la tabla desde el inicio.
    }

    public agregar(): void {
        const negociacion = Negociacion.crearNegociacion(this.inputFecha.value, this.inputCantidad.value, this.inputValor.value)
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