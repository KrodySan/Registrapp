import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-olvidar',
  templateUrl: './olvidar.page.html',
  styleUrls: ['./olvidar.page.scss'],
})
export class OlvidarPage {
  users: any[] = [];
  correo: string = '';
  contrasena: string = '';
  mostrarMensaje: boolean = false;

  constructor(private alertController: AlertController, private router: Router) {
    // Asigna los valores iniciales en el constructor si es necesario
    this.users = [];
    this.correo = '';
    this.contrasena = '';
  }

  ngOnInit() {
  }

  async recuperar() {
    // Lógica para recuperar la contraseña (agrega tu lógica aquí)

    // Muestra un mensaje de éxito
    const alert = await this.alertController.create({
      header: 'Éxito',
      message: 'Correo para restablecer contraseña enviado con éxito',
      buttons: ['OK']
    });

    await alert.present();

    // Establece la bandera para mostrar el mensaje
    this.mostrarMensaje = true;
  }

  ionViewDidEnter() {
    console.log(this.users);
  }
}
