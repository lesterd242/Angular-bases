import { Component } from '@angular/core';


import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

    public nuevo: Personaje = {
        nombre: 'Jorge',
        poder: 7
    };
    /* 
     * Este metodo se manda a llamar cuando se dispara el eventEmitter de la clase
     * agregarComponent, se ligan mediante el selector, en el templateURL, se configura 
     * un escuchador de eventos.
     */

    /*
     * Cuando declaramos en el constructor una propiedad de tipo servicio estamos 
     * creando un singleton, y se inyectara en esta propiedad, de esta manera 
     * el singleton es general a toda la aplicacion y cada componente, modulo, pipe, 
     * u otros servicios que ocupen este servicio estaran compartiendo la misma instancia
     */
    constructor() {
    }
}