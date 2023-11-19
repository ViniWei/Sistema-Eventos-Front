import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Evento } from './Evento';
import { Observable } from 'rxjs';
import { Ingresso } from '../Ingresso/Ingresso';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  apiUrl = 'http://localhost:5000/Evento';
  constructor(private http: HttpClient) {  }

  listar(): Observable<Evento[]> {
    const url = `${this.apiUrl}/listar`;
    return this.http.get<Evento[]>(url);
  }

  cadastrar(evento: Evento): Observable<any> {
    const url = `${this.apiUrl}/Inserir`;
    return this.http.post<Evento>(url, evento, httpOptions);
  }

  alterar(evento: Evento): Observable<any> {
    const url = `${this.apiUrl}/alterar`;
    return this.http.put<Evento>(url, evento, httpOptions);
  }

  excluir(id: number): Observable<any> {
    const url = `${this.apiUrl}
    /Excluir/${id}`;
    return this.http.delete<string>(url, httpOptions);
  } 
}
