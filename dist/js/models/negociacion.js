export class Negociacion {
    constructor(fecha, cantidad, valor) {
        this._fecha = fecha;
        this._cantidad = cantidad;
        this._valor = valor;
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
    static crearNegociacion(fechaS, cantidadS, valorS) {
        // Reemplaza '-' en todas las apariciones "g" por ';'. Porque date puede recibir una cadena "2000,12,12"
        const fecha = fechaS.replace(/-/g, ',');
        // Parsear a los valores requeridos
        const cantidad = parseInt(cantidadS);
        const valor = parseFloat(valorS);
        return new Negociacion(new Date(fecha), cantidad, valor);
    }
}
