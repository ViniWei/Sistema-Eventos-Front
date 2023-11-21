import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ingresso } from '../Ingresso/Ingresso';
import { Atuante } from "./Atuante";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AtuantesService {
  apiUrl = 'http://localhost:5000/Atuante';
  constructor(private http: HttpClient) {  }

  listar(): Observable<Atuante[]> {
    const url = `${this.apiUrl}/listar`;
    return this.http.get<Atuante[]>(url);
  }

  cadastrar(atuante: Atuante): Observable<any> {
    const url = `${this.apiUrl}/Inserir`;
    return this.http.post<Atuante>(url, atuante, httpOptions);
  }

  alterar(atuante: Atuante): Observable<any> {
    const url = `${this.apiUrl}/alterar`;
    return this.http.put<Atuante>(url, atuante, httpOptions);
  }

  excluir(id: number): Observable<any> {
    const url = `${this.apiUrl}/Excluir/${id}`;
    return this.http.delete<any>(url, httpOptions);

  } 
}
