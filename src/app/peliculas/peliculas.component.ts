import { Component, OnInit, Input } from '@angular/core';
import { PeliculasService } from '../peliculas.service';
import { Pelicula } from '../pelicula';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  listadoPeliculas: Pelicula[] = [];
  registroDirectores: string[] = [];

  finalizado: boolean = false;
  director: string;
  constructor(private peliculaService: PeliculasService, private route: ActivatedRoute) { }

  finalizar() {
    this.registroDirectores = this.peliculaService.registroDirectores;
    this.finalizado = true;
    this.peliculaService.eliminarRegistro();
  }

  ngOnInit() {
    this.director = this.route.snapshot.params['director'];
    this.peliculaService.findAllByDirector(this.director).subscribe(data => {
      this.listadoPeliculas = data;
    });
  }

}
