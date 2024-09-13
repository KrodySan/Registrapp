import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage {
  mostrarSecciones: boolean = false;
  seccionSeleccionada: string = '';

  constructor(private router: Router, private menuCtrl: MenuController) {}

  irHome() {
    this.router.navigate(['/home']);
  }

  irUser() {
    this.router.navigate(['/user']);
  }

  openNotifications() {
    this.menuCtrl.enable(true, 'notifications-menu');
    this.menuCtrl.open('notifications-menu');
  }

  irAConectarDisp() {
    this.router.navigate(['/conectar-disp']);
  }

  irAMostrarQR() {
    this.router.navigate(['/scan-assis']);
  }

  mostrarVentanaFlotante() {
    this.mostrarSecciones = true;
  }

  ocultarVentanaFlotante() {
    this.mostrarSecciones = false;
  }

  mostrarInformacion(seccion: string) {
    console.log('Mostrar información de la sección:', seccion);
  }
}
