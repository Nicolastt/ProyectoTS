/*
import { Negociacion } from "./models/negociacion.js";

const negociacion = new Negociacion(new Date(),20,1000);
console.log(negociacion.fecha);
console.log(negociacion.fecha);
*/

import {NegociacionController} from "./controllers/negociacion-controller.js";

const negociacionController = new NegociacionController();
const form = document.querySelector('.form');
if (form){
    form.addEventListener('submit', event => {
        event.preventDefault(); // Evitamos su comportamiento normal.
        negociacionController.agregar();
    })
} else{
    throw Error("No fue posible inicializar la aplicación. Verifique el elemento form.")
}

