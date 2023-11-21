import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Ingresso } from 'src/app/services/Ingresso/Ingresso';
import { Kit } from 'src/app/services/Kit/Kit';
import { KitsService } from 'src/app/services/Kit/kits.service';
import { Produto } from 'src/app/services/Produto/Produto';
import { Location } from '@angular/common';

@Component({
  selector: 'app-kits',
  templateUrl: './kits.component.html',
  styleUrls: ['./kits.component.scss']
})
export class KitsComponent implements OnInit{
  formulario: any;
  tituloFormulario: string = 'kits';
  constructor(private location: Location, private kitsService: KitsService) { }


  ngOnInit(): void {
    this.tituloFormulario = 'Criar Kit';
    this.formulario = new FormGroup({  
      nome: new FormControl(null, Validators.required),
      descricao: new FormControl(null, Validators.required),
      preco: new FormControl(null, Validators.required),
      produtos: new FormControl(null, Validators.required),
      organizadorId: new FormControl(localStorage.getItem("idOrganizador"), Validators.required),
    }
    )
  }

  enviarFormulario(): void {
    const kit: Kit = this.formulario.value;

    console.log(kit);
    this.kitsService.cadastrar(kit).subscribe(result => {
      alert('Kit criado com sucesso.');
    }
    )
  }


}
