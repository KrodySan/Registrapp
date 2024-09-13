import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { UsuariosService } from '../../services/usuarios.service';
import { ProfesoresService } from '../../services/usuarios.service'; // Ajusta la ruta según la ubicación real de tu servicio
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-loginprofesor',
  templateUrl: './loginprofesor.page.html',
  styleUrls: ['./loginprofesor.page.scss'],
})
export class LoginprofesorPage implements OnInit {
  usuario: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private toastCtrl: ToastController, private alertController: AlertController,
    private UsuariosService: ProfesoresService
     // Ajusta la ruta según la ubicación real de tu servicio
  ) {}

  ngOnInit() {}

  async irMenu() {
    this.UsuariosService.loginProfesor(this.usuario, this.password).subscribe(
      (response) => {
        if (response.length > 0) {    
          console.log('Usuario autenticado correctamente:', response);
          this.router.navigate(['/menuprofe']); 
        } else {
          // Usuario no encontrado o credenciales incorrectas
          this.mostrarToast('Las credenciales son incorrectas');
        }
      },
      
      (error) => {
        console.error('Error al iniciar sesión:', error);
        this.mostrarToast('Error al iniciar sesión. Por favor, inténtalo de nuevo.');
      }
    );
  }

  async mostrarToast(mensaje: string) {
    const toast = await this.toastCtrl.create({
      message: mensaje,
      duration: 3000,
      position: 'middle',
    });
    await toast.present();
  }
  async mostrarMensajeExito() {
    const alert = await this.alertController.create({
      header: 'Éxito',
      message: 'Correo para restablecer contraseña enviado con éxito',
      buttons: ['OK'],
    });0
  
    await alert.present();
  }

  irRegistrar() {
    this.router.navigate(['/olvidar']); // Redirige a la página "registrar"
  }
}
