import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent{

  @Input() // le decimos que va a recibir un valor de otro componente (padre e hijo)
  public nuevo: Personaje = {
    nombre: '',
    poder: 0
  };

  /*
   * lee decimos que va a emitir un valor para otro componente (padre), este sera un evento,
   * por eso en el templateURL esta dentro de parentesis, y le mandamos el evento, que es de tipo 
   * personaje, por lo cual recibira un personaje.
   */
  //@Output()
  //public onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  constructor(  public dbzService: DbzService ){

  }

  agregar(){
    if(this.nuevo.nombre.trim().length == 0){
      return;
    }

    // detonamos el evento que sera escuchado por los templateURL que implementen el evento
    //this.onNuevoPersonaje.emit( this.nuevo );
    console.log('ingresando')
    this.dbzService.agregarPersonaje(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }

}