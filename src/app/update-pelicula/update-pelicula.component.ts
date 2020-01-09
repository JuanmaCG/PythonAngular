import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../pelicula';
import { PeliculasService } from '../peliculas.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-pelicula',
  templateUrl: './update-pelicula.component.html',
  styleUrls: ['./update-pelicula.component.css']
})
export class UpdatePeliculaComponent implements OnInit {

  titulo: string;
  pelicula: Pelicula;

  constructor(private route: ActivatedRoute, private router: Router, private peliculaService: PeliculasService) { }

  updatePelicula() {
    this.peliculaService.updateMovie(this.pelicula, this.titulo).subscribe();
    // this.pelicula = new Pelicula();
    this.goToMantenimiento();
  }

  goToMantenimiento() {
    this.router.navigate(['mantenimiento']);
  }

  onSubmit() {
    this.updatePelicula();
  }

  ngOnInit() {
    this.pelicula = new Pelicula();

    this.titulo = this.route.snapshot.params['titulo'];

    this.peliculaService.getPeliculaByTitulo(this.titulo).subscribe( data => {
      this.pelicula = data[0];
    });
    
  }

}
