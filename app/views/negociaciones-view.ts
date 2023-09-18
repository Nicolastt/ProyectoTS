import {Negociaciones} from "../models/negociaciones.js";

export class NegociacionesView {
    private selectorDiv: HTMLAnchorElement;
    constructor(selector: string) {
        this.selectorDiv = document.querySelector(selector)
    }

    update(model: Negociaciones): void{
        // innerHTML : me permite colocar elementos html
        this.selectorDiv.innerHTML = this.crearTemplate(model);
    }

    // Se utiliza .join para eliminar la ',' del array de Negociaciones.
    // new Intl.DateTimeFormat().format(e.fecha) permite darle un formato a la fecha
    crearTemplate(model: Negociaciones): string {
        return`
            <table class="table">
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Cantidad</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                ${model.obtenerLista().map(e =>{
                    return `
                        <tr>
                        <td>${new Intl.DateTimeFormat().format(e.fecha)}</td>
                        <td>${e.cantidad}</td>
                        <td>${e.valor}</td>
                        </tr>`
                }).join('')} 
                </tbody>
            </table>
        `;
    }
}