import {View} from "./view.js";

export class MensajeView extends View<string> {
    // Siempre hay que especificar qué elemento se va a utilizar en cada clase hija de View
    crearTemplate(model: string): string {
        return `
            <p class="alert alert-info">${model}</p>
        `
    }
}