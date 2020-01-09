import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeliculasService } from '../peliculas.service';

@Component({
  selector: 'app-consulta-director',
  templateUrl: './consultaDirector.component.html',
  styleUrls: ['./consultaDirector.component.css']
})
export class ConsultaDirectorComponent implements OnInit {

  director: string;

  onSubmit(){
    this.router.navigate(['consulta', this.director]);
    
  }
  constructor(private router: Router, private peliculaService: PeliculasService) { }

  registrarPelicula(director: string) {
    this.peliculaService.registrarBusqueda(this.director);
    this.onSubmit();
  }
  ngOnInit() {
  }

}
