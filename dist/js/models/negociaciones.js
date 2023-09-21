export class Negociaciones {
    constructor() {
        this.negociaciones = [];
    }
    agregar(negociacion) {
        this.negociaciones.push(negociacion);
    }
    obtenerLista() {
        return this.negociaciones;
    }
    esIgual(negociaciones) {
        return JSON.stringify(this.negociaciones) == JSON.stringify(negociaciones.obtenerLista());
    }
}
