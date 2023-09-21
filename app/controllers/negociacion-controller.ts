import {Negociacion} from "../models/negociacion.js";
import {Negociaciones} from "../models/negociaciones.js";
import {NegociacionesView} from "../views/negociaciones-view.js";
import {MensajeView} from "../views/mensaje-view.js";
import {DiasSemana} from "../enums/dias-semana.js";
import {medirTiempoEjecucion} from "../decorators/medir-tiempo-ejecucion.js";
import {inspector} from "../decorators/inspector.js";
import {domInjector} from "../decorators/dom-injector.js";
import {NegociacionesService} from "../services/negociacionesService.js";

export class NegociacionController {
    @domInjector('#fecha')
    private inputFecha: HTMLInputElement;
    @domInjector('#cantidad')
    private inputCantidad: HTMLInputElement;
    @domInjector('#valor')
    private inputValor: HTMLInputElement;

    private negociaciones: Negociaciones = new Negociaciones();
    // ! Es MUY IMPORTANTE incluir el '#'
    private negociacionesView: NegociacionesView = new NegociacionesView('#negociaciones-view');
    private mensajeView: MensajeView = new MensajeView('#mensaje-view')

    private negociacionesService: NegociacionesService = new NegociacionesService();

    constructor() {
        this.negociacionesView.update(this.negociaciones); // Para que muestre la tabla desde el inicio.
    }

    @inspector
    @medirTiempoEjecucion()
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


    public importarDatos() {
            this.negociacionesService.obtenerNegociacionesAPI()
            .then((negociaciones) => {
                for (let negociacion of negociaciones) {
                    this.negociaciones.agregar(negociacion);
                }
                this.negociacionesView.update(this.negociaciones);
            })
    }
}