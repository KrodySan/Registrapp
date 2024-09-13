import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QRAsistenciaPage } from './qrasistencia.page';

const routes: Routes = [
  {
    path: '',
    component: QRAsistenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QRAsistenciaPageRoutingModule {}
