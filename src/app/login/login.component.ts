import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from '../login.service';
import { Usuario } from '../usuario';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: string;
  password: string;
  usuarioLogeado: Usuario;
  loginCorrecto: boolean;

  usuarioBBDD: Usuario;

  constructor(private loginService: LoginService, private router: Router) {}

  async validarLogin() {
    this.loginCorrecto = false;
    this.usuarioLogeado.usuario = this.usuario;
    this.usuarioLogeado.password = this.password;
    await this.loginService.getUsuario(this.usuario).toPromise().then((data) => this.usuarioBBDD = data)
    if (this.usuarioBBDD[0].usuario === this.usuarioLogeado.usuario && this.usuarioBBDD[0].password === this.usuarioLogeado.password){
      this.loginCorrecto = true;
      
    } else {
      this.loginCorrecto = false;
    }
  }

  usuarioValidado(): boolean {
    return this.loginCorrecto;
  }

  ngOnInit() {
    this.usuarioLogeado = new Usuario();
    this.usuarioBBDD = new Usuario();
  }

  toIndex() {
    this.router.navigate(['']);
  }

  toMantenimiento() {
    this.router.navigate(['mantenimiento']);
  }

}
