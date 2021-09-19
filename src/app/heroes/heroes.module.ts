import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from "./heroe/heroe.component";
import { ListadoComponent } from "./listado/listado.component";


@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ], 
    exports:[ // para que otros componentes puedan usar en sus templates los selectores aqui declarados
        HeroeComponent,
        ListadoComponent
    ],
    imports: [
        CommonModule // para que se puedan usar las directivas basicas
    ]
})
export class HeroesModule{}