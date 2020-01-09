import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../peliculas.service';
import { Pelicula } from '../pelicula';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.component.html',
  styleUrls: ['./mantenimiento.component.css']
})
export class MantenimientoComponent implements OnInit {

  listadoPeliculas: Pelicula[];

  constructor(private peliculaService: PeliculasService, private router: Router) { }

  deleteMovie(titulo: string) {
    this.peliculaService.deleteMovie(titulo).subscribe( () => window.location.reload());
  }

  updateMovie(titulo: string) {
    this.router.navigate(['updateMovie', titulo]);
  }

  createMovie() {
    this.router.navigate(['createMovie']);
  }

  ngOnInit() {
    this.peliculaService.getAllPeliculas().subscribe((data) => {
      this.listadoPeliculas = data;
    });
  }

}
