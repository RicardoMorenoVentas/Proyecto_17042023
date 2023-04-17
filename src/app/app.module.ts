import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FundamentoTSComponent } from './fundamento-ts/fundamento-ts.component';
import { FormsModule } from '@angular/forms';
import { DirectivasComponent } from './directivas/directivas.component';
import { CommonModule } from '@angular/common';
import { ListaPadreComponent } from './lista-padre/lista-padre.component';
import { ListaHijoComponent } from './lista-hijo/lista-hijo.component';
import { FormularioPadreComponent } from './formulario-padre/formulario-padre.component';
import { FormularioHijoComponent } from './formulario-hijo/formulario-hijo.component';

@NgModule({
  declarations: [
    AppComponent,
    FundamentoTSComponent,
    DirectivasComponent,
    ListaPadreComponent,
    ListaHijoComponent,
    FormularioPadreComponent,
    FormularioHijoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
