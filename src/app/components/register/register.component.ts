// src/app/components/register/register.component.ts
import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: any = {}; // Define la estructura del usuario según tus necesidades

  constructor(private apiService: ApiService) {}

  onSubmit() {
    this.apiService.register(this.user).subscribe(
      response => {
        console.log('Usuario registrado con éxito', response);
      },
      error => {
        console.error('Error al registrar usuario', error);
      }
    );
  }
}
