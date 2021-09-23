import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

// servicio, decimos que va a ser inyectado
@Injectable()
export class DbzService{

    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 9000
        }, 
        {
          nombre: 'Broly',
          poder: 10000
        }
      ];

    get personajes(): Personaje[]{
        // operador spread
        return [...this._personajes];
    }

    constructor() {
        console.log('Servicio creado');
    }

    agregarPersonaje( personaje: Personaje ){
        this._personajes.push(personaje);
    }
}