import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostrarQRPageRoutingModule } from './mostrar-qr-routing.module';

import { MostrarQRPage } from './mostrar-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostrarQRPageRoutingModule
  ],
  declarations: [MostrarQRPage]
})
export class MostrarQRPageModule {}
