var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Negociacion } from "../models/negociacion.js";
import { Negociaciones } from "../models/negociaciones.js";
import { NegociacionesView } from "../views/negociaciones-view.js";
import { MensajeView } from "../views/mensaje-view.js";
import { DiasSemana } from "../enums/dias-semana.js";
import { medirTiempoEjecucion } from "../decorators/medir-tiempo-ejecucion.js";
import { inspector } from "../decorators/inspector.js";
import { domInjector } from "../decorators/dom-injector.js";
import { NegociacionesService } from "../services/negociacionesService.js";
export class NegociacionController {
    constructor() {
        this.negociaciones = new Negociaciones();
        this.negociacionesView = new NegociacionesView('#negociaciones-view');
        this.mensajeView = new MensajeView('#mensaje-view');
        this.negociacionesService = new NegociacionesService();
        this.negociacionesView.update(this.negociaciones);
    }
    agregar() {
        const negociacion = Negociacion.crearNegociacion(this.inputFecha.value, this.inputCantidad.value, this.inputValor.value);
        if (!this.esDiaComercial(negociacion.fecha)) {
            this.mensajeView.update('Solo se aceptan días laborables');
            return;
        }
        this.negociaciones.agregar(negociacion);
        this.actualizarVistas();
        this.limpiarFormulario();
    }
    esDiaComercial(fecha) {
        return fecha.getDay() > DiasSemana.DOMINGO && fecha.getDay() < DiasSemana.SABADO;
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
    importarDatos() {
        this.negociacionesService.obtenerNegociacionesAPI()
            .then((negociaciones) => {
            return negociaciones.filter((negociacionAPI) => {
                return !this.negociaciones
                    .obtenerLista()
                    .some((negociacion) => negociacion.esIgual(negociacionAPI));
            });
        })
            .then((negociaciones) => {
            for (let negociacion of negociaciones) {
                this.negociaciones.agregar(negociacion);
            }
            this.negociacionesView.update(this.negociaciones);
        });
    }
}
__decorate([
    domInjector('#fecha')
], NegociacionController.prototype, "inputFecha", void 0);
__decorate([
    domInjector('#cantidad')
], NegociacionController.prototype, "inputCantidad", void 0);
__decorate([
    domInjector('#valor')
], NegociacionController.prototype, "inputValor", void 0);
__decorate([
    inspector,
    medirTiempoEjecucion()
], NegociacionController.prototype, "agregar", null);
