import { Component } from '@angular/core';


@Component({
    selector: 'app-contador',
    template: `
    <h1>Contador</h1>

    <button (click)='sumaResta(+base);'>+1</button>
    <span>{{ contador }}</span>
    <button (click)='sumaResta(-base);'>-1 </button>
    `,
    styleUrls: ['../../app.component.css']
})
export class ContadorComponent{
    title = 'Bases Angular';
    public contador: number = 10;
    public base: number = 5;
    sumaResta(num: number){
    this.contador += num;
  }
}