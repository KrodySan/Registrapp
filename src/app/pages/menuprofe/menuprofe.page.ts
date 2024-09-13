import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menuprofe',
  templateUrl: './menuprofe.page.html',
  styleUrls: ['./menuprofe.page.scss'],
})
export class menuprofePage {
  constructor(private router: Router, private menuCtrl: MenuController) {}

  irHome() {
    this.router.navigate(['/home']);
  }

  irUser() {
    this.router.navigate(['/user']);
  }

  irScanAssis() {
    this.router.navigate(['/qrasistencia']);
  }
  irDispo() {
    this.router.navigate(['/conectar-disp']);
  }


  openNotifications() {
    this.menuCtrl.enable(true, 'notifications-menu');
    this.menuCtrl.open('notifications-menu');
  }

  mostrarImagenYRedirigir() {
    const imagenCamara = document.getElementById('imagenCamara') as HTMLImageElement;

    // Mostrar la imagen
    imagenCamara.style.display = 'block';

    // Esperar 5 segundos antes de redirigir
    setTimeout(() => {
      // Ocultar la imagen
      imagenCamara.style.display = 'none';

      // Redirigir a scan-assis
      this.router.navigate(['/qrasistencia']); // Asegúrate de que esta sea la ruta correcta
    }, 5000); // 5000 milisegundos = 5 segundos
  }
}

