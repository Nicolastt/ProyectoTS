// Cuando lo exportamos lo tenemos disponible para toda la aplicación.
export var DiasSemana;
(function (DiasSemana) {
    // Hay que ser explícitos con los enums para evitar cualquier tipo de error a futuro.
    // Así ya no depende del orden.
    // ! Los enums son solo lectura.
    DiasSemana[DiasSemana["DOMINGO"] = 0] = "DOMINGO";
    DiasSemana[DiasSemana["LUNES"] = 1] = "LUNES";
    DiasSemana[DiasSemana["MARTES"] = 2] = "MARTES";
    DiasSemana[DiasSemana["MIERCOLES"] = 3] = "MIERCOLES";
    DiasSemana[DiasSemana["JUEVES"] = 4] = "JUEVES";
    DiasSemana[DiasSemana["VIERNES"] = 5] = "VIERNES";
    DiasSemana[DiasSemana["SABADO"] = 6] = "SABADO";
})(DiasSemana || (DiasSemana = {}));
