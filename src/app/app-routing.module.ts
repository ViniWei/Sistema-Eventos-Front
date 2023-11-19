import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrganizadorComponent } from './components/organizador/organizador.component';
import { IngressoComponent } from './components/ingresso/ingresso.component';
import { HomeComponent } from './Pages/home/home.component';
import { EventoComponent } from './components/evento/evento.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'organizadores', component: OrganizadorComponent }, 
  { path: 'eventos', component: EventoComponent }, 
  { path: 'ingressos', component: IngressoComponent },
  { path: 'usuarios', component: UsuarioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
