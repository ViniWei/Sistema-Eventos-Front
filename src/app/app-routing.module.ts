import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrganizadorComponent } from './components/organizador/organizador.component';
import { IngressoComponent } from './components/ingresso/ingresso.component';

const routes: Routes = [
  { path: 'organizadores', component: OrganizadorComponent }, 
  { path: 'ingressos', component: IngressoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
