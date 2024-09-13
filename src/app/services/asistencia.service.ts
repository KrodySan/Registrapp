// src/app/services/usuarios.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AsistenciaService {
  private apiUrl = 'http://localhost:3000/asistencia'; // Ajusta la URL según la configuración de tu servidor JSON

  constructor(private http: HttpClient) {}

    actualizarAsistencia() {
        // Reemplaza 'ID_DEL_USUARIO' con la información real obtenida del escaneo
        const usuarioId = 'Fernando Marambio';
      
        // Realiza una solicitud HTTP POST al servidor para actualizar la asistencia
        this.http.post('http://localhost:3000/asistencia', { usuarioId }).subscribe(
          (respuesta) => {
            console.log('Asistencia actualizada con éxito', respuesta);
          },
          (error) => {
            console.error('Error al actualizar la asistencia', error);
          }
        );
  }
}
