import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';

//* colocamos um hello word na pag (primeiro-componente)

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'cursos2'
  },
  {
    path: 'cursos2',
    loadChildren: () => import('./cursos2/cursos2.module').then(m => m.Cursos2Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
