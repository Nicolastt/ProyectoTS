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
}
