import { Component } from '@angular/core';
import { KitsService } from 'src/app/services/Kit/kits.service';

@Component({
  selector: 'app-administrador-kits',
  templateUrl: './administrador-kits.component.html',
  styleUrls: ['./administrador-kits.component.scss']
})
export class AdministradorKitsComponent {
  constructor(private KitsService: KitsService) {}    
  kits: any[] = [];
  idEventoAlterar : string | null = null;

  ngOnInit() {

    this.listarKits();
  }

  listarKits(){
    /*this.eventoService.listar().subscribe(
      (dados) => {
        this.eventos = dados;
      },
      (erro) => {
        console.error('Erro ao carregar os eventos', erro);
      }
    );*/
  }
 
  deletarKit(id: number){
    //this.eventoService.excluir(id);
    //this.listarEvento();
  }  

}
