import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

import { IonicModule } from '@ionic/angular';

import { LoginprofesorPageRoutingModule } from './loginprofesor-routing.module';

import { LoginprofesorPage } from './loginprofesor.page';

import { ModuloMaterialModule } from 'src/app/modulos/modulo-material/modulo-material.module';
import { AppComponentesComponent } from 'src/app/app-componentes/app-componentes.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginprofesorPageRoutingModule,
    ModuloMaterialModule, FormsModule,
  ],
  declarations: [LoginprofesorPage]
})
export class LoginprofesorPageModule {}
