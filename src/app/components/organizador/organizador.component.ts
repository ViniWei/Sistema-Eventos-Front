import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OrganizadorService } from 'src/app/services/Organizador/organizador.service';
import { Organizador } from 'src/app/services/Organizador/Organizador';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-organizador',
  templateUrl: './organizador.component.html',
  styleUrls: ['./organizador.component.scss']
})

export class OrganizadorComponent implements OnInit {

  organizadores: Organizador[] = []

  formulario: any;
  tituloFormulario: string = 'Organizadores';
  formularioAlterar: any
  formularioExcluir: any;
  constructor(private toastr: ToastrService, private location: Location, private organizadoresService: OrganizadorService) { }

  ngOnInit(): void {
    this.tituloFormulario = 'Cadastro Organizador';
    this.listar()
    this.formulario = new FormGroup({  
      nome: new FormControl(null), email: new FormControl(null), senha: new FormControl(null) }
    ),
    this.formularioExcluir = new FormGroup({
      id: new FormControl(null, Validators.required)
    })
  }

  enviarFormulario(): void {
    const organizador: Organizador = this.formulario.value;
  
    if (!organizador.nome || !organizador.email || !organizador.senha) {
      this.toastr.error("Todos os campos devem estar preenchidos.");
      return;
    } else {
      this.organizadoresService.cadastrar(organizador).subscribe(result => {
        this.toastr.success("Organizador cadastrado com sucesso!");
      });
    }
  }

  excluir(): void {
    const id: number = this.formularioExcluir.get('id').value;

    if (!id) {
      this.toastr.error("Organizador é um campo obrigatório.");
      return;
    } else {
      this.organizadoresService.excluir(id).subscribe(
        result => {
          this.toastr.success("Organizador e excluído com sucesso.");
          
          this.listar();
        })
    }
  }

  alterar(): void {
    const organizador: Organizador = this.formularioAlterar.value;
 
        if (!organizador.id && !organizador.nome) {
          this.toastr.error("organizador e nome são campos obrigatórios.");
          return;
        } 
          this.organizadoresService.alterar(organizador).subscribe(result => {
            this.toastr.success("organizador atualizado com sucesso!");
            this.listar();
          });
        
    
  }
  
  listar(): void {
    this.organizadoresService.listar().subscribe(
      organizadores => this.organizadores = organizadores,
      error => console.error('Erro ao obter a lista de atuantes:', error)
      );
      console.log(this.organizadores)
  }

  voltar(): void {
    this.location.back();
  }
}