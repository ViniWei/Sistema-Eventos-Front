import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from './Produto';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class ProdutoService {
  apiUrl = 'http://localhost:5000/Produto';
  constructor(private http: HttpClient) {  }

  listar(): Observable<Produto[]> {
    const url = `${this.apiUrl}/listar`;
    return this.http.get<Produto[]>(url);
  }

  cadastrar(produto: Produto): Observable<any> {
    const url = `${this.apiUrl}/Inserir`;
    return this.http.post<Produto>(url, produto, httpOptions);
  }

  alterar(produto: Produto): Observable<any> {
    const url = `${this.apiUrl}/alterar`;
    return this.http.put<Produto>(url, Produto, httpOptions);
  }

  excluir(id: number): Observable<any> {
    const url = `${this.apiUrl}
    /Excluir/${id}`;
    return this.http.delete<string>(url, httpOptions);
  } 
}