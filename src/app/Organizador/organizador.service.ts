import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Organizador } from './Organizador';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class OrganizadorService {
  apiUrl = 'http://localhost:5000/Organizador';
  constructor(private http: HttpClient) { }
  
  listar(): Observable<Organizador[]> {
    const url = `${this.apiUrl}/listar`;
    return this.http.get<Organizador[]>(url);
  }

 // buscar(id: number): Observable<Organizador> {
    //const url = `${this.apiUrl}/buscar/${id}`;
    //return this.http.get<Organizador>(url);
  //}

  cadastrar(organizador: Organizador): Observable<any> {
    const url = `${this.apiUrl}/Inserir`;
    return this.http.post<Organizador>(url, organizador, httpOptions);
  }

  alterar(organizador: Organizador): Observable<any> {
    const url = `${this.apiUrl}/alterar`;
    return this.http.put<Organizador>(url, organizador, httpOptions);
  }

  excluir(id: number): Observable<any> {
    const url = `${this.apiUrl}
    /Excluir/${id}`;
    return this.http.delete<string>(url, httpOptions);
  } 
}

