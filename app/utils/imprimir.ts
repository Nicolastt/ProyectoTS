import {Negociacion} from "../models/negociacion.js";

export function imprimir(...objetos:any[]){
    for(let obj of objetos){
        console.log(obj.toString());
    }
}