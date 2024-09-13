import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';  // Asegúrate de tener esta importación
import { Observable, from } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  private apiUrl = 'http://localhost:3000/usuarios'; 

  constructor(private http: HttpClient, private storage: Storage) {
    this.init();
  }

  private async init() {
    this.storage = await this.storage.create();
    console.log('Storage inicializado');
  }

  agregarUsuario(usuarios: any): Observable<any> {
    return from(this.storage.set('usuario', usuarios)).pipe(
      switchMap(() => this.http.post<any>(this.apiUrl, usuarios)),
      catchError(error => {
        console.error('Error al agregar usuario:', error);
        return [];
      })
    );
  }

  login(correo: string, contrasena: string): Observable<any> {
    const url = `${this.apiUrl}?correo=${correo}&contrasena=${contrasena}`;
    return this.http.get<any>(url).pipe(
      catchError(error => {
        console.error('Error al realizar login:', error);
        return [];
      })
    );
  }
}

@Injectable({
  providedIn: 'root',
})
export class ProfesoresService {
  private apiUrl = 'http://localhost:3000/profesores'; 
  constructor(private http: HttpClient) {}

  agregarProfesor(profesores: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, profesores).pipe(
      catchError(error => {
        console.error('Error al agregar profesor:', error);
        return [];
      })
    );
  }

  loginProfesor(correo: string, contrasena: string): Observable<any> {
    const url = `${this.apiUrl}?correo=${correo}&contrasena=${contrasena}`;
    return this.http.get<any>(url).pipe(
      catchError(error => {
        console.error('Error al realizar login de profesor:', error);
        return [];
      })
    );
  }
}
