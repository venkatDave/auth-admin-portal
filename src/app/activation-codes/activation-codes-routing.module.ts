import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ActivationCodesPage } from './activation-codes.page';

const routes: Routes = [
  {
    path: '',
    component: ActivationCodesPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivationCodesPageRoutingModule {}
