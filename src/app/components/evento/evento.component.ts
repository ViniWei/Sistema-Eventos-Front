import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Evento } from 'src/app/services/Evento/Evento';
import { EventoService } from 'src/app/services/Evento/evento.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.scss']
})
export class EventoComponent {
  formulario: any;
  tituloFormulario: string = 'Evento';
  constructor(private location: Location, private eventoService: EventoService) { }

  ngOnInit(): void {
    this.tituloFormulario = 'Insirir Evento';
    this.formulario = new FormGroup({  
      nome: new FormControl(null), descricao: new FormControl(null), endereco: new FormControl(null) , data: new FormControl(null) , ingressosDisponiveis: new FormControl(null) }
    )
  }

  enviarFormulario(): void {
    const evento: Evento = this.formulario.value;
    this.eventoService.cadastrar(evento).subscribe(result => {
      alert('organizador inserido com sucesso.');
    }
    )
  }

  voltar(): void {
    this.location.back();
  }
}
