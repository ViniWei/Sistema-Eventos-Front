import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { OrganizadorService } from 'src/app/Organizador/organizador.service';
import { Organizador } from 'src/app/Organizador/Organizador';

@Component({
  selector: 'app-organizador',
  templateUrl: './organizador.component.html',
  styleUrls: ['./organizador.component.scss']
})

export class OrganizadorComponent implements OnInit {
  formulario: any;
  tituloFormulario: string = 'Organizadores';
  constructor(private organizadoresService: OrganizadorService) { }

  ngOnInit(): void {
    this.tituloFormulario = 'Novo ';
    this.formulario = new FormGroup({ id: new FormControl(null), nome: new FormControl(null), email: new FormControl(null), senha: new FormControl(null) }
    )
  }

  enviarFormulario(): void {
    const organizador: Organizador = this.formulario.value;
    this.organizadoresService.cadastrar(organizador).subscribe(result => {
      alert('organizador inserido com sucesso.');
    }
    )
  }
}


