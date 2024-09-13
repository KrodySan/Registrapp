import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registerprofe',
  templateUrl: './registerprofe.page.html',
  styleUrls: ['./registerprofe.page.scss'],
})
export class RegisterprofePage implements OnInit {
  usuarios = {
    nombre: '',
    contrasena: '',
    correo: ''
  };

  constructor(private router: Router, private http: HttpClient) {}

  registrarUsuario() {
    // Realizar la solicitud POST al servidor
    this.http.post('http://localhost:3000/profesores', this.usuarios).subscribe(
      (respuesta) => {
        console.log('Usuario registrado con éxito', respuesta);
        this.router.navigate(['/loginprofesor']);
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
