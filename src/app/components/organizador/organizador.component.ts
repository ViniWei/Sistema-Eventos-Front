import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { OrganizadorService } from 'src/app/services/Organizador/organizador.service';
import { Organizador } from 'src/app/services/Organizador/Organizador';
import { Location } from '@angular/common';

@Component({
  selector: 'app-organizador',
  templateUrl: './organizador.component.html',
  styleUrls: ['./organizador.component.scss']
})

export class OrganizadorComponent implements OnInit {
  formulario: any;
  tituloFormulario: string = 'Organizadores';
  constructor(private location: Location, private organizadoresService: OrganizadorService) { }

  ngOnInit(): void {
    this.tituloFormulario = 'Cadastro Organizador';
    this.formulario = new FormGroup({  
      nome: new FormControl(null), email: new FormControl(null), senha: new FormControl(null) }
    )
  }

  enviarFormulario(): void {
    const organizador: Organizador = this.formulario.value;
    this.organizadoresService.cadastrar(organizador).subscribe(result => {
      alert('organizador inserido com sucesso.');
    }
    )
  }

  voltar(): void {
    this.location.back();
  }
}