export class MensajeView{
    private selectorMsg: HTMLElement;
    constructor(selector:string) {
        this.selectorMsg = document.querySelector(selector);
    }

    crearTemplate(model: string): string{
        return `
            <p class="alert alert-info">${model}</p>
        `
    }

    update(model: string):void{
        this.selectorMsg.innerHTML = this.crearTemplate(model);
    }

}