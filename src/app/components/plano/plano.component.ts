import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Organizador } from 'src/app/services/Organizador/Organizador';
import { Plano } from 'src/app/services/Plano/Plano';

@Component({
  selector: 'app-plano',
  templateUrl: './plano.component.html',
  styleUrls: ['./plano.component.scss']
})
export class PlanoComponent implements OnInit{
  formulario: any;
  tituloFormulario: string = 'Organizadores';
  constructor(private location: Location, private planoService: PlanoComponent) { }

  ngOnInit(): void {
    this.tituloFormulario = 'Novo ';
    this.formulario = new FormGroup({  
      nome: new FormControl(null), email: new FormControl(null), senha: new FormControl(null) 
    })
  }
}