import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterprofePage } from './registerprofe.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterprofePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterprofePageRoutingModule {}
