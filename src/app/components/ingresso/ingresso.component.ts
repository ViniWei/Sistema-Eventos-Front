import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Evento } from 'src/app/services/Evento/Evento';
import { EventoService } from 'src/app/services/Evento/evento.service';
import { UsuarioService } from 'src/app/services/Usuario/usuario.service';
import { Ingresso } from 'src/app/services/Ingresso/Ingresso';
import { IngressoService } from 'src/app/services/Ingresso/ingresso.service';
import { Organizador } from 'src/app/services/Organizador/Organizador';
import { Usuario } from 'src/app/services/Usuario/Usuario';
import { Location } from '@angular/common';

@Component({
  selector: 'app-ingresso',
  templateUrl: './ingresso.component.html',
  styleUrls: ['./ingresso.component.scss']
})
export class IngressoComponent implements OnInit{

  eventos: Evento[] = [];
  usuarios: Usuario[] = [];

  formulario: any;
  tituloFormulario: string = 'Ingressos';
  constructor(private location: Location, private ingressosServices: IngressoService, private eventoService: EventoService, private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.inicializarFormulario();
    this.listarEventos();
    this.listarUsuarios();
    this.tituloFormulario = 'Criar Ingresso';
    this.formulario = new FormGroup({  
      preco: new FormControl(null, Validators.required),
      eventoId: new FormControl(null, Validators.required),
      usuarioId: new FormControl(null, Validators.required) }
    )
  }

  enviarFormulario(): void {
    const ingresso: Ingresso = this.formulario.value;
    this.ingressosServices.cadastrar(ingresso).subscribe(result => {
      alert('Ingresso criado com sucesso.');
    }
    )
  }

  inicializarFormulario(): void {
    this.formulario = new FormGroup({
      eventoId: new FormControl(null, Validators.required),
      usuarioId: new FormControl(null, Validators.required),
    });
  }

  listarEventos(): void {
    this.eventoService.listar().subscribe(
      eventos => {
        this.eventos = eventos

        console.log(eventos)
      },
      error => {
        console.error('Erro ao obter a lista de eventos:', error);
      }
    )
  }

  listarUsuarios(): void {
    this.usuarioService.listar().subscribe(
      usuarios => {
        this.usuarios = usuarios

        console.log(usuarios)
      },
      error => {
        console.error('Erro ao obter a lista de usuários:', error);
      }
    )
  }

  voltar(): void {
    this.location.back();
  }
}
