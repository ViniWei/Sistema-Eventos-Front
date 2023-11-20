import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/Usuario/usuario.service';

@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.scss']
})



export class LoginUsuarioComponent {  
  constructor(private usuarioService: UsuarioService, private router: Router, private http: HttpClient){}
  apiUrl = 'http://localhost:5000/Usuario';

  async login (usuario: string, senha: string){
    const body = {
      Usuario: usuario,
      Senha: senha
    }

    this.http.post<any>(
      `${this.apiUrl}/Login`,
      body,
      { responseType: 'json' }).subscribe(res => 
        {
          if (res.message == "Logado"){
            this.router.navigateByUrl('home');
          }
        });
  }
}
