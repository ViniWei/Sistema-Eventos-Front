import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrganizadorComponent } from './components/organizador/organizador.component';

const routes: Routes = [{
    path: 'organizadores', component: OrganizadorComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
