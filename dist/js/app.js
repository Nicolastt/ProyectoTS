import { NegociacionController } from "./controllers/negociacion-controller.js";
const negociacionController = new NegociacionController();
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    event.preventDefault();
    negociacionController.agregar();
});
