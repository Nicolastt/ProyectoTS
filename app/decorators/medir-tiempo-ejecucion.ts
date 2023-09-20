export function medirTiempoEjecucion() {
    return function (
        target: any, // constructor de la clase en método estático y prototipo en otro caso.
        propertyKey: string, // nombre del método
        descriptor: PropertyDescriptor // cuerpo del método que estamos decorando
    ) {
        const metodoOriginal = descriptor.value;
        // ...args: Array<any> para resolver el problema de los parámetros.
        descriptor.value = function (...args: Array<any>) {
            // Medir tiempo 1
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            // Medir tiempo 2
            const t2 = performance.now();
            console.log(`Tiempo de ejecución del método ${propertyKey}: ${(t2 - t1) / 1000} segundos.`);

            return retorno;
        }
        return descriptor;
    }
}