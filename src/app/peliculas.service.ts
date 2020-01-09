import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Pelicula } from './pelicula';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  
  registroDirectores: string[] = [];
  url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:5000';
  }

  public registrarBusqueda(director: string): string[] {
    this.registroDirectores.push(director);
    return this.registroDirectores;
  }

  public eliminarRegistro(): void {
    this.registroDirectores = [];
  }

  // CRUD Peliculas

  public findAllByDirector(director: string): Observable<Pelicula[]> {
    return this.http.get<Pelicula[]>(`${this.url}/listadoPeliculas/${director}`);
  }

  public getPeliculaByTitulo(titulo: string): Observable<Pelicula> {
    return this.http.get<Pelicula>(`${this.url}/peliculas/${titulo}`);
  }

  public getAllPeliculas(): Observable<Pelicula[]> {
    return this.http.get<Pelicula[]>(`${this.url}/peliculas`);
  }

  public createNewMovie(pelicula: Pelicula) {
    return this.http.post(`${this.url}/peliculas`, pelicula);
  }

  public updateMovie(pelicula: Pelicula, titulo: string) {
    return this.http.post(`${this.url}/update`, pelicula);
  }

  public deleteMovie(titulo: string) {
    return this.http.delete(`${this.url}/peliculas/${titulo}`);
  }

}
