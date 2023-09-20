// Cuando lo exportamos lo tenemos disponible para toda la aplicación.
export enum DiasSemana {
    // Hay que ser explícitos con los enums para evitar cualquier tipo de error a futuro.
    // Así ya no depende del orden.
    // ! Los enums son solo lectura.
    DOMINGO = 0,
    LUNES = 1,
    MARTES = 2,
    MIERCOLES = 3,
    JUEVES = 4,
    VIERNES = 5,
    SABADO = 6
}