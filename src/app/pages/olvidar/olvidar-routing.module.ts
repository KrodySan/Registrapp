import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OlvidarPage } from './olvidar.page'; // Usar el nombre correcto del componente

const routes: Routes = [
  {
    path: '',
    component: OlvidarPage, // Usar el nombre correcto del componente
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OlvidarPageRoutingModule {}