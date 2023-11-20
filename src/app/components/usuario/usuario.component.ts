import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Usuario } from 'src/app/services/Usuario/Usuario';
import { UsuarioService } from 'src/app/services/Usuario/usuario.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent {
formulario: any;
  tituloFormulario: string = 'Usuarios';
  constructor(private location: Location, private usuariosService: UsuarioService) { }

  ngOnInit(): void {
    this.tituloFormulario = 'Cadastro';
    this.formulario = new FormGroup({  
      nome: new FormControl(null), email: new FormControl(null), senha: new FormControl(null) }
    )
  }

  enviarFormulario(): void {
    const usuario: Usuario = this.formulario.value;
    this.usuariosService.cadastrar(usuario).subscribe(result => {
      alert('usuario inserido com sucesso.');
    }
    )
  }

  voltar(): void {
    this.location.back();
  }
}
