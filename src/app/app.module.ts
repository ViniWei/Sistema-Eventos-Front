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
import { KitsService } from './services/Kit/kits.service';
import { AtuantesService } from './services/Atuante/atuantes.service';
import { EventoService } from './services/Evento/evento.service';
import { IngressoService } from './services/Ingresso/ingresso.service';
import { ProdutoService } from './services/Produto/produto.service';
import { OrganizadorComponent } from './components/organizador/organizador.component';
import { IngressoComponent } from './components/ingresso/ingresso.component';
import { EventoComponent } from './components/evento/evento.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { HomeComponent } from './Pages/home/home.component';
import { KitsComponent } from './components/kit/kits/kits.component';
import { ProdutosComponent } from './components/Produto/produtos/produtos.component';
import { AtuantesComponent } from './components/atuante/atuantes/atuantes.component';
import { LoginUsuarioComponent } from './Pages/home/login-usuario/login-usuario.component';
import { HomeOrganizadorComponent } from './Pages/home/home-organizador/home-organizador.component';
import { LoginOrganizadorComponent } from './Pages/home/login-organizador/login-organizador.component';
import { PlanoComponent } from './components/plano/plano.component';
import { ListarProdutoComponent } from './components/Produto/produtos/listar-produto/listar-produto.component';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';

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
    HomeComponent,
    KitsComponent,
    ProdutosComponent,
    AtuantesComponent,
    LoginUsuarioComponent,
    HomeOrganizadorComponent,
    LoginOrganizadorComponent,
    PlanoComponent,
    ListarProdutoComponent

  ],
  imports: [
    CarouselModule,
    ButtonModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  providers: [HttpClientModule, OrganizadorService, ProdutoService, KitsService, AtuantesService, EventoService, IngressoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
