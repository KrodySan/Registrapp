// src/app/pages/register/register.page.ts

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  usuarios = {
    nombre: '',
    contrasena: '',
    correo: ''
  };

  constructor(private router: Router, private http: HttpClient) {}

  registrarUsuario() {
    // Realizar la solicitud POST al servidor
    this.http.post('http://localhost:3000/usuarios', this.usuarios).subscribe(
      (respuesta) => {
        console.log('Usuario registrado con éxito', respuesta);
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Error al registrar el usuario', error);
      }
    );
  }

  register() {
    this.router.navigate(['/home']);
  }

  ngOnInit() {}
}
