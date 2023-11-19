import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { OrganizadorService } from './services/Organizador/organizador.service';
import { OrganizadorComponent } from './components/organizador/organizador.component';
import { IngressoComponent } from './components/ingresso/ingresso.component';
import { EventoComponent } from './components/evento/evento.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { HomeComponent } from './Pages/home/home.component';

const routes: Routes = [{
  path: 'organizadores', component:OrganizadorComponent
}]

@NgModule({
  declarations: [
    AppComponent,
    OrganizadorComponent,
    IngressoComponent,
    EventoComponent,
    UsuarioComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  providers: [HttpClientModule, OrganizadorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
