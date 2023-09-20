export function medirTiempoEjecucion() {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`Tiempo de ejecución del método ${propertyKey}: ${(t2 - t1) / 1000} segundos.`);
            return retorno;
        };
        return descriptor;
    };
}
