import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html',
    styleUrls: ['../../app.component.css']
})
export class HeroeComponent{
    public nombre: string = 'IronMan';
    public edad: number = 45;

    obtenerNombre(): string {
        return `${ this.nombre} - ${this.edad}`; 
    }

    get nombreCapitalizado() {
        /*
         * si algun metodo modifica el elemento de la clase
         * nombre, entonces este metodo o cualquier otro metodo
         * que haga uso del miembro nombre sera ejecutado, 
         * y renderizado nuevamente en la vista que haga uso del 
         * metodo. 
         */
        return this.nombre.toUpperCase();
    }

    cambiarNombre(): void {
        /* 
        * si se cambia una propiedad de la clase, se cambia 
        * en todos los metodos o lugares donde se ocupe,
        * esto angular lo hace automaticamente.
        */
        this.nombre = 'Spiderman';
    }

    cambiarEdad(){
        this.edad = 30;
    }

}