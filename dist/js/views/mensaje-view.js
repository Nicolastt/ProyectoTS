import { View } from "./view.js";
export class MensajeView extends View {
    // Siempre hay que especificar qué elemento se va a utilizar en cada clase hija de View
    crearTemplate(model) {
        return `
            <p class="alert alert-info">${model}</p>
        `;
    }
}
