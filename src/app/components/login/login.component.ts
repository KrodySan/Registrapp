// src/app/components/login/login.component.ts
import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials: any = {}; // Define la estructura de las credenciales según tus necesidades

  constructor(private apiService: ApiService) {}

  onSubmit() {
    this.apiService.login(this.credentials).subscribe(
      response => {
        console.log('Inicio de sesión exitoso', response);
      },
      error => {
        console.error('Error al iniciar sesión', error);
      }
    );
  }
}
