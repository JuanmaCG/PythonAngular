import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { InfoComponent } from './info/info.component';
import { ConsultaDirectorComponent } from './consultaDirector/consultaDirector.component';
import { LoginComponent } from './login/login.component';
import { MantenimientoComponent } from './mantenimiento/mantenimiento.component';
import { UpdatePeliculaComponent } from './update-pelicula/update-pelicula.component';
import { CreateMovieComponent } from './create-movie/create-movie.component';
import { RegistrarAdministradorComponent } from './registrar-administrador/registrar-administrador.component';


const routes: Routes = [
  {path: 'consulta', component: ConsultaDirectorComponent},
  {path: 'mantenimiento', component: MantenimientoComponent},
  {path: 'updateMovie/:titulo', component: UpdatePeliculaComponent},
  {path: 'createMovie', component: CreateMovieComponent},
  {path: 'info', component: InfoComponent},
  {path: 'consulta/:director', component: PeliculasComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registrar', component: RegistrarAdministradorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
