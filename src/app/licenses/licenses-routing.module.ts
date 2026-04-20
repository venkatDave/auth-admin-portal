import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LicensesPage } from './licenses.page';

const routes: Routes = [
  {
    path: '',
    component: LicensesPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LicensesPageRoutingModule {}
