import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-registrar-administrador',
  templateUrl: './registrar-administrador.component.html',
  styleUrls: ['./registrar-administrador.component.css']
})
export class RegistrarAdministradorComponent implements OnInit {

  usuario: Usuario;

  constructor(private loginService: LoginService, private router: Router) { 
    this.usuario = new Usuario();
  }

  onSubmit() {
    this.loginService.crearUsuario(this.usuario).subscribe(() => this.goToLogin())
  }

  goToLogin() {
    this.router.navigate(['login']);
  }
  ngOnInit() {

  }

}
