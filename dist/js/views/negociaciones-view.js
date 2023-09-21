var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { View } from "./view.js";
import { escapar } from "../decorators/escapar.js";
export class NegociacionesView extends View {
    crearTemplate(model) {
        return `
            <table class="table">
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Cantidad</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                ${model.obtenerLista().map(e => {
            return `
                        <tr>
                        <td>${this.formatearFecha(e.fecha)}</td>
                        <td>${e.cantidad}</td>
                        <td>${e.valor}</td>
                        </tr>`;
        }).join('')} 
                </tbody>
            </table>
            <script>alert('hola')</script>
        `;
    }
    formatearFecha(fecha) {
        return new Intl.DateTimeFormat().format(fecha);
    }
}
__decorate([
    escapar
], NegociacionesView.prototype, "crearTemplate", null);
