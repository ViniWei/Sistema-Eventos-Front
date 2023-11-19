import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ingresso } from './Ingresso';
import { Observable } from 'rxjs';
import { Organizador } from '../Organizador/Organizador';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class IngressoService {
  apiUrl = 'http://localhost:5000/Ingresso';
  constructor(private http: HttpClient) { }

  listar(): Observable<Ingresso[]> {
    const url = `${this.apiUrl}/listar`;
    return this.http.get<Ingresso[]>(url);
  }

  cadastrar(ingresso: Ingresso): Observable<any> {
    const url = `${this.apiUrl}/Inserir`;
    return this.http.post<Ingresso>(url, ingresso, httpOptions);
  }

  alterar(ingresso: Ingresso): Observable<any> {
    const url = `${this.apiUrl}/alterar`;
    return this.http.put<Ingresso>(url, Ingresso, httpOptions);
  }

  excluir(id: number): Observable<any> {
    const url = `${this.apiUrl}
    /Excluir/${id}`;
    return this.http.delete<string>(url, httpOptions);
  } 
}
