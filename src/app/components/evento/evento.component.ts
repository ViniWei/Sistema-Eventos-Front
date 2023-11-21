import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Evento } from 'src/app/services/Evento/Evento';
import { EventoService } from 'src/app/services/Evento/evento.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.scss']
})
export class EventoComponent {
  formulario: any;
  tituloFormulario: string = 'Evento';
  idEventoAlterar: string | null = null;
  constructor(private location: Location, private eventoService: EventoService, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.tituloFormulario = 'Insirir Evento';
    this.formulario = new FormGroup({  
      nome: new FormControl(null), descricao: new FormControl(null), endereco: new FormControl(null) , data: new FormControl(null) , ingressosDisponiveis: new FormControl(null) }
    )
    this.activateRoute.queryParams.subscribe(params => { this.idEventoAlterar = params['id'] });
  }

  enviarFormulario(): void {
    const evento: Evento = this.formulario.value;
    if(this.idEventoAlterar == null) {
      this.eventoService.cadastrar(evento).subscribe(result => {
        alert('organizador inserido com sucesso.');
      });
      return;
    }

    evento.id = +this.idEventoAlterar;
    if(this.idEventoAlterar == null) {
      this.eventoService.alterar(evento).subscribe(result => {
        alert('Evento alterado com sucesso.');
      });
      return;
    }

  }

  voltar(): void {
    this.location.back();
  }
}
