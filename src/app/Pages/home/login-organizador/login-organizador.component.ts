import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-organizador',
  templateUrl: './login-organizador.component.html',
  styleUrls: ['./login-organizador.component.scss']
})
export class LoginOrganizadorComponent {
  constructor(private router: Router, private http: HttpClient){}
  apiUrl = 'http://localhost:5000/Organizador';

  async login (email: string, senha: string){
    const body = {
      Email: email,
      Senha: senha
    }

    this.http.post<any>(
      `${this.apiUrl}/Login`,
      body,
      { responseType: 'json' }).subscribe(res => 
        {
          if (res.message == "Logado"){
            this.router.navigateByUrl('homeOrganizador');
          }
        });
  }
}
