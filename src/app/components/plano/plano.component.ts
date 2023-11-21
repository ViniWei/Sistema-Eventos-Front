import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-plano',
  templateUrl: './plano.component.html',
  styleUrls: ['./plano.component.scss']
})
export class PlanoComponent implements OnInit{
  formulario: any;
  tituloFormulario: string = 'Planos';
  constructor(private location: Location, private planoService: PlanoComponent) { }

  ngOnInit(): void {
    this.tituloFormulario = 'Novo ';
    this.formulario = new FormGroup({  
      nome: new FormControl(null), email: new FormControl(null), senha: new FormControl(null) 
    })
  }
}