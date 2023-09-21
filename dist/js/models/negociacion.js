export class Negociacion {
    constructor(fecha, cantidad, valor) {
        this._fecha = fecha;
        this._cantidad = cantidad;
        this._valor = valor;
    }
    static crearNegociacion(fechaS, cantidadS, valorS) {
        const fecha = fechaS.replace(/-/g, ',');
        const cantidad = parseInt(cantidadS);
        const valor = parseFloat(valorS);
        return new Negociacion(new Date(fecha), cantidad, valor);
    }
    get fecha() {
        return this._fecha;
    }
    get cantidad() {
        return this._cantidad;
    }
    get valor() {
        return this._valor;
    }
    get total() {
        return this._cantidad * this._valor;
    }
    toSting() {
        return `
        Fecha: ${this.fecha}
        Cantidad: ${this.cantidad}
        Valor: ${this.valor} 
        `;
    }
    esIgual(negociacion) {
        return this.fecha.getDay() == negociacion.fecha.getDay() &&
            this.fecha.getMonth() == negociacion.fecha.getMonth() &&
            this.fecha.getFullYear() == negociacion.fecha.getFullYear() &&
            this.valor == negociacion.valor;
    }
}
