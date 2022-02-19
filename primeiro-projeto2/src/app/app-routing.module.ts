import { Cursos3Component } from './cursos3/cursos3.component';
import { InfosComponent } from './infos/infos/infos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//* colocamos um hello word na pag (primeiro-componente)

const routes: Routes = [
  {path: 'home', component: Cursos3Component},
  {path: 'infos', component: InfosComponent},
  
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   redirectTo: 'cursos2',
  // },
  // {
  //   path: 'cursos2',
  //   loadChildren: () =>
  //     import('./cursos2/cursos2.module').then((m) => m.Cursos2Module),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
