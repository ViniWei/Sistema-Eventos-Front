import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { OrganizadorService } from './Organizador/organizador.service';
import { OrganizadorComponent } from './components/organizador/organizador.component';

const routes: Routes = [{
  path: 'organizadores', component:OrganizadorComponent
}]

@NgModule({
  declarations: [
    AppComponent,
    OrganizadorComponent
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
