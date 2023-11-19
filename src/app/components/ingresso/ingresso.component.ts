import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Evento } from 'src/app/services/Evento/Evento';
import { EventoService } from 'src/app/services/Evento/evento.service';
import { Ingresso } from 'src/app/services/Ingresso/Ingresso';
import { IngressoService } from 'src/app/services/Ingresso/ingresso.service';
import { Organizador } from 'src/app/services/Organizador/Organizador';

@Component({
  selector: 'app-ingresso',
  templateUrl: './ingresso.component.html',
  styleUrls: ['./ingresso.component.scss']
})
export class IngressoComponent implements OnInit{

  eventos: Evento[] = [];

  formulario: any;
  tituloFormulario: string = 'Ingressos';
  constructor(private ingressosServices: IngressoService, private eventoService: EventoService) { }

  ngOnInit(): void {
    this.inicializarFormulario();
    this.listarEventos();
    this.tituloFormulario = 'Novo ';
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
}
