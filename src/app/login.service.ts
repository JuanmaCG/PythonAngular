import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './usuario';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url: string;

  constructor(private http: HttpClient) { 
    this.url = 'http://localhost:5000/login';
  }

  crearUsuario(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(`${this.url}`, usuario);
  }

  getUsuario(usuario: string): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.url}/${usuario}`);
  }
}
