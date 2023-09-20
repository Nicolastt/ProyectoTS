import { Negociacion } from "../models/negociacion.js";
import { Negociaciones } from "../models/negociaciones.js";
import { NegociacionesView } from "../views/negociaciones-view.js";
import { MensajeView } from "../views/mensaje-view.js";
export class NegociacionController {
    constructor() {
        this.negociaciones = new Negociaciones();
        // ! Es MUY IMPORTANTE incluir el '#'
        this.negociacionesView = new NegociacionesView('#negociaciones-view');
        this.mensajeView = new MensajeView('#mensaje-view');
        //
        this.SABADO = 6;
        this.DOMINGO = 0;
        this.inputFecha = document.querySelector('#fecha');
        this.inputCantidad = document.querySelector('#cantidad');
        this.inputValor = document.querySelector('#valor');
        this.negociacionesView.update(this.negociaciones); // Para que muestre la tabla desde el inicio.
    }
    agregar() {
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
    esDiaComercial(fecha) {
        return fecha.getDay() > this.DOMINGO && fecha.getDay() < this.SABADO;
    }
    crearNegociacion() {
        // Reemplaza '-' en todas las apariciones "g" por ';'. Porque date puede recibir una cadena "2000,12,12"
        const fecha = this.inputFecha.value.replace(/-/g, ',');
        // Parsear a los valores requeridos
        const cantidad = parseInt(this.inputCantidad.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacion(new Date(fecha), cantidad, valor);
    }
    limpiarFormulario() {
        this.inputFecha.value = '';
        this.inputCantidad.value = '';
        this.inputValor.value = '';
        this.inputFecha.focus();
    }
    actualizarVistas() {
        this.negociacionesView.update(this.negociaciones);
        this.mensajeView.update('La negociación fue registrada exitosamente');
    }
}
