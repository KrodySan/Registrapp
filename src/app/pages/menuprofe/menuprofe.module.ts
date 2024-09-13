import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuprofeRoutingModule } from './menuprofe-routing.module';

import { menuprofePage } from './menuprofe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuprofeRoutingModule
  ],
  declarations: [menuprofePage]
})
export class MenuprofePageModule {}
