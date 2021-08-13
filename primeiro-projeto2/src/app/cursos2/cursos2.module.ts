import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Cursos2RoutingModule } from './cursos2-routing.module';
import { CursosListasComponent } from './cursos-listas/cursos-listas.component';


@NgModule({
  declarations: [
    CursosListasComponent
  ],
  imports: [
    CommonModule,
    Cursos2RoutingModule
  ]
})
export class Cursos2Module { }
