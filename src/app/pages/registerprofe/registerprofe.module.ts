import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterprofePageRoutingModule } from './registerprofe-routing.module';

import { RegisterprofePage } from './registerprofe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterprofePageRoutingModule,
    RegisterprofePageRoutingModule, FormsModule,
  ],
  declarations: [RegisterprofePage]
})
export class RegisterprofePageModule {}