import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrganizadorComponent } from './components/organizador/organizador.component';
import { IngressoComponent } from './components/ingresso/ingresso.component';
import { HomeComponent } from './Pages/home/home.component';
import { EventoComponent } from './components/evento/evento.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { ProdutosComponent } from './components/Produto/produtos/produtos.component';
import { KitsComponent } from './components/kit/kits/kits.component';
import { AtuantesComponent } from './components/atuante/atuantes/atuantes.component';
import { LoginUsuarioComponent } from './Pages/home/login-usuario/login-usuario.component';
import { HomeOrganizadorComponent } from './Pages/home/home-organizador/home-organizador.component';
import { LoginOrganizadorComponent } from './Pages/home/login-organizador/login-organizador.component';
import { PlanoComponent } from './components/plano/plano.component';

const routes: Routes = [
  { path: '', component: LoginUsuarioComponent },
  { path: 'loginOrganizador', component: LoginOrganizadorComponent},
  { path: 'home', component: HomeComponent},
  { path: 'organizadores', component: OrganizadorComponent }, 
  { path: 'eventos', component: EventoComponent }, 
  { path: 'atuantes', component: AtuantesComponent},
  { path: 'ingressos', component: IngressoComponent },
  { path: 'usuarios', component: UsuarioComponent },
  { path: 'produtos', component: ProdutosComponent},
  { path: 'kits', component: KitsComponent},
  { path: 'planos', component: PlanoComponent},
  { path: 'homeOrganizador', component: HomeOrganizadorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
