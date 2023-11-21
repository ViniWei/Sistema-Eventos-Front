import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Atuante } from 'src/app/services/Atuante/Atuante';
import { AtuantesService } from 'src/app/services/Atuante/atuantes.service';

@Component({
  selector: 'app-atuantes',
  templateUrl: './atuantes.component.html',
  styleUrls: ['./atuantes.component.scss']
})
export class AtuantesComponent implements OnInit{

  atuantes: Atuante[] = []
  
  formulario: any;
  formularioAlterar: any;
  formularioExcluir: any;
  formularioCadastrar: any
  tituloFormulario: string = 'Atuantes';
  constructor(private location: Location, private atuanteServices: AtuantesService) { }
  
  ngOnInit(): void {
    this.tituloFormulario = 'Atuante';
    this.formulario = new FormGroup({  
      nome: new FormControl(null, Validators.required)}
    ),
    this.formularioAlterar = new FormGroup({
      nome: new FormControl(null, Validators.required)
    }),
    
    this.formularioExcluir = new FormGroup({
      id: new FormControl(null, Validators.required)
    })

    this.formularioCadastrar = new FormGroup({
      id: new FormControl(null, Validators.required)
    })
    
  }

  enviarFormulario(): void {
    const atuante: Atuante = this.formulario.value;
    console.log(atuante)
    this.atuanteServices.cadastrar(atuante).subscribe(result => {
      alert('Atuante criado com sucesso.');
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

//   cadastrar(): void {
// const atuante: Atuante = this.formularioCadastrar.value;
// this.atuanteServices.cadastrar(atuante).subscribe(
//      result => {
// console.log('Atuante cadastrado com sucesso.')
//      },
//      error => console.error('Erro ao cadastrar atuante:', error)
//    );
//  }

  alterar(): void {
    const atuante: Atuante = this.formularioAlterar.value;
    this.atuanteServices.alterar(atuante).subscribe(
      result => {
        console.log('Atuante alterado com sucesso.');
        // Recarrega a lista após alterar
        this.listar();
      },
      error => console.error('Erro ao alterar atuante:', error)
    );
  }

  excluir(): void {
    const id: number = this.formularioExcluir.get('id').value;
    this.atuanteServices.excluir(id).subscribe(
      result => {
        console.log('Atuante excluído com sucesso.');
      },
      error => console.error('Erro ao excluir atuante:', error)
    );
  }
}

