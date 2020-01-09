import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../pelicula';
import { PeliculasService } from '../peliculas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {

  pelicula: Pelicula;

  constructor(private peliculaService: PeliculasService, private router: Router) { 
    this.pelicula = new Pelicula();
  }

  onSubmit(){
    this.peliculaService.createNewMovie(this.pelicula).subscribe( () => this.goToMantenimiento());
  }

  goToMantenimiento() {
    this.router.navigate(['mantenimiento']);
  }
  
  ngOnInit() {
  }

}
