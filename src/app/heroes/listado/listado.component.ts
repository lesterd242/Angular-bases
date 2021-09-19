import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{
    public heroes: string[] = ['Thor', 'Thanos', 'Galactus', 'Batman'];
    public heroeBorrado: string = '';

    borraHeroe(){
        console.log('Borrando...');
        this.heroeBorrado  = this.heroes.shift() ?? '';
    }
}