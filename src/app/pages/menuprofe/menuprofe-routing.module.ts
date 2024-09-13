import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { menuprofePage } from './menuprofe.page';

const routes: Routes = [
  {
    path: '',
    component: menuprofePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuprofeRoutingModule {}
