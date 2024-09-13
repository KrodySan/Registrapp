import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QRCodeModule } from 'angularx-qrcode';
import { IonicModule } from '@ionic/angular';

import { QRAsistenciaPageRoutingModule } from './qrasistencia-routing.module';

import { QRAsistenciaPage } from './qrasistencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QRCodeModule,
    QRAsistenciaPageRoutingModule
  ],
  declarations: [QRAsistenciaPage]
})
export class QRAsistenciaPageModule {}
