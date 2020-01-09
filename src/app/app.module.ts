import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { ConsultaDirectorComponent } from './consultaDirector/consultaDirector.component';
import { InfoComponent } from './info/info.component';
import { LoginComponent } from './login/login.component';
import { MantenimientoComponent } from './mantenimiento/mantenimiento.component';
import { UpdatePeliculaComponent } from './update-pelicula/update-pelicula.component';
import { CreateMovieComponent } from './create-movie/create-movie.component';
import { RegistrarAdministradorComponent } from './registrar-administrador/registrar-administrador.component';

@NgModule({
  declarations: [
    AppComponent,
    PeliculasComponent,
    ConsultaDirectorComponent,
    InfoComponent,
    LoginComponent,
    MantenimientoComponent,
    UpdatePeliculaComponent,
    CreateMovieComponent,
    RegistrarAdministradorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
