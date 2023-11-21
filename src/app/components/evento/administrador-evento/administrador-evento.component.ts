import { Component } from '@angular/core';
import { EventoService } from 'src/app/services/Evento/evento.service';

@Component({
  selector: 'app-administrador-evento',
  templateUrl: './administrador-evento.component.html',
  styleUrls: ['./administrador-evento.component.scss']
})
export class AdministradorEventoComponent {
  constructor(private eventoService: EventoService) {}    
  eventos: any[] = [];
  idEventoAlterar : string | null = null;

  ngOnInit() {

    this.listarEvento();
  }

  listarEvento(){
    this.eventoService.listar().subscribe(
      (dados) => {
        this.eventos = dados;
      },
      (erro) => {
        console.error('Erro ao carregar os eventos', erro);
      }
    );
  }
 
  deletarevento(id: number){
    this.eventoService.excluir(id);
    this.listarEvento();
  }  

}
