import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';


import { LoginComponent } from './login/login.component';
import { OlaComponent } from './ola/ola.component';
import { HomeComponent } from './home/home.component';
import { OlaDetalheComponent } from './ola/ola-detalhe/ola-detalhe.component';

const routes: Routes = [
  { path:'ola', component: OlaComponent },
  { path:'curso/:id', component: OlaDetalheComponent },
  { path:'login', component: LoginComponent },
  { path:'home', component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { static  routing: ModuleWithProviders <RouterModule> = RouterModule.forRoot(routes);
}
