import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';



@Component({
  selector: 'app-conectar-disp',
  templateUrl: './conectar-disp.page.html',
  styleUrls: ['./conectar-disp.page.scss'],
})
export class ConectarDISPPage implements OnInit {

  mostrarDispositivos: boolean = false;
  constructor(private router: Router, private modalController: ModalController) { }

  ngOnInit() {
  }
  mostrarVentanaFlotante() {
    this.mostrarDispositivos = true;
  }

  ocultarVentanaFlotante() {
    this.mostrarDispositivos = false;
  }
  
  irMenu() {
    this.router.navigate(['/menuprofe']); // Redirige a la página "menu"
  }

  irMostrarQr() {
    this.router.navigate(['/qrasistencia']); // Redirige a la página "mostrar-qr"
  }
  
}

