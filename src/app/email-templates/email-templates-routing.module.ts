import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmailTemplatesPage } from './email-templates.page';

const routes: Routes = [
  {
    path: '',
    component: EmailTemplatesPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmailTemplatesPageRoutingModule {}
