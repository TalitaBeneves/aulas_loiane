import { PagesModule } from './pages/pages.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroProjetoComponent } from './Angular-Aulas/components/primeiro-projeto/primeiro-projeto.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroProjetoComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
