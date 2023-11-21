import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Atuante } from "src/app/services/Atuante/Atuante";
import { AtuantesService } from 'src/app/services/Atuante/atuantes.service';
import { EventoService } from 'src/app/services/Evento/evento.service';
import { Evento } from 'src/app/services/Evento/Evento';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-atuantes',
  templateUrl: './atuantes.component.html',
  styleUrls: ['./atuantes.component.scss']
})
export class AtuantesComponent implements OnInit{

  atuantes: Atuante[] = []
  eventos: Evento[] = []
  
  formulario: any;
  formularioAlterar: any;
  formularioExcluir: any;
  tituloFormulario: string = 'Atuantes';
  constructor(private location: Location, private atuanteServices: AtuantesService, private eventosService: EventoService, private toastr: ToastrService) { }
  
  ngOnInit(): void {
    this.tituloFormulario = 'Atuante';
    this.listarEventos()
    this.listar()
    this.formulario = new FormGroup({  
      nome: new FormControl(null, Validators.required),
      eventoId: new FormControl(null, Validators.required)}
    ),
    this.formularioAlterar = new FormGroup({
      id: new FormControl(null, Validators.required),
      nome: new FormControl(null, Validators.required)
    }),
    
    this.formularioExcluir = new FormGroup({
      id: new FormControl(null, Validators.required)
    })
  }

  enviarFormulario(): void {
    const atuante: Atuante = this.formulario.value;
    
    if (!atuante.nome && atuante.eventoId == null) {
      this.toastr.error("Nome e Evento são obrigatórios.");
      return;
    } else if ((!atuante.nome)){
      this.toastr.error("Nome é um campo obrigatório.");
      return;
    } else if((!atuante.eventoId)){
      this.toastr.error("Evento é um campo obrigatório.");
      return;
    } else {
      this.atuanteServices.cadastrar(atuante).subscribe(result => {
        this.toastr.success("Atuante cadastrado com sucesso!");

        this.listar();

      });

    }

  }

  listarEventos(): void {
    this.eventosService.listar().subscribe(
      eventos => {
        this.eventos = eventos
      },
      error => {
        console.error('Erro ao obter a lista de eventos:', error);
      }
    )
  }

  voltar(): void {
    this.location.back();
  }

  listar(): void {
    this.atuanteServices.listar().subscribe(
      atuantes => this.atuantes = atuantes,
      error => console.error('Erro ao obter a lista de atuantes:', error)
      );
  }

  alterar(): void {
    const atuante: Atuante = this.formularioAlterar.value;
 
        if (!atuante.id && !atuante.nome) {
          this.toastr.error("Atuante e nome são campos obrigatórios.");
          return;
        } else if ((!atuante.nome)){
          this.toastr.error("Nome é um campo obrigatório.");
          return;
        } else if((!atuante.id)){
          this.toastr.error("Você deve selecionar um atuante.");
          return;
        } else {
          this.atuanteServices.alterar(atuante).subscribe(result => {
            this.toastr.success("Atuante atualizado com sucesso!");
            this.listar();
          });
        }
    
  }

  excluir(): void {
    const id: number = this.formularioExcluir.get('id').value;

    if (!id) {
      this.toastr.error("Atuante é um campo obrigatório.");
      return;
    } else {
      this.atuanteServices.excluir(id).subscribe(
        result => {
          this.toastr.success("Atuante e excluído com sucesso.");
          
          this.listar();
        })
    }
  }
}

