import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Kit } from './Kit';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class KitsService {

  apiUrl = 'http://localhost:5000/Kits';
  constructor(private http: HttpClient) { }

  listar(): Observable<Kit[]> {
    const url = `${this.apiUrl}/listar`;
    return this.http.get<Kit[]>(url);
  }

  cadastrar(kit: Kit): Observable<any> {
    const url = `${this.apiUrl}/Inserir`;
    return this.http.post<Kit>(url, kit, httpOptions);
  }

  alterar(kit: Kit): Observable<any> {
    const url = `${this.apiUrl}/alterar`;
    return this.http.put<Kit>(url, Kit, httpOptions);
  }

  excluir(id: number): Observable<any> {
    const url = `${this.apiUrl}
    /Excluir/${id}`;
    return this.http.delete<string>(url, httpOptions);
  } 
}
