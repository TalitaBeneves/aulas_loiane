import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OlaDetalheComponent } from './ola/ola-detalhe/ola-detalhe.component';
import { CursosService } from './../../../primeiro-projeto2/src/app/cursos/cursos.service';
import { AlunosComponent } from './alunos/alunos.component';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    OlaDetalheComponent,
    AlunosComponent,
    //OlaComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule

],

  providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
