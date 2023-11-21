import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Location } from '@angular/common';
import { PlanoService } from 'src/app/services/Plano/plano.service';

@Component({
  selector: 'app-plano',
  templateUrl: './plano.component.html',
  styleUrls: ['./plano.component.scss']
})
export class PlanoComponent implements OnInit{
  formulario: any;
  tituloFormulario: string = 'Planos';
  constructor(private location: Location, private planoService: PlanoService) { }

  ngOnInit(): void {
    this.tituloFormulario = 'Novo ';
    this.formulario = new FormGroup({  
      nome: new FormControl(null), email: new FormControl(null), senha: new FormControl(null) 
    })
  }
}