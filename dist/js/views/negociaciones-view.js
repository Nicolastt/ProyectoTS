import { View } from "./view.js";
export class NegociacionesView extends View {
    // Siempre hay que especificar qué elemento se va a utilizar en cada clase hija de View
    // Se utiliza .join para eliminar la ',' del array de Negociaciones.
    // Intl.DateTimeFormat().format(e.fecha) permite darle un formato a la fecha
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
