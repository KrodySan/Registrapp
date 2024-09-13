import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-qrasistencia',
  templateUrl: './qrasistencia.page.html',
  styleUrls: ['./qrasistencia.page.scss'],
})
export class QRAsistenciaPage implements OnInit {
  public qrData: string="Fernando";
  constructor(private router: Router) { }

  ngOnInit() {
  }
  irVolver() {
    this.router.navigate(['/menuprofe']);
  }

}
