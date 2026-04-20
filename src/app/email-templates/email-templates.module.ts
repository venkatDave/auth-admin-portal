import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../shared/shared.module';
import { EmailTemplatesPageRoutingModule } from './email-templates-routing.module';
import { EmailTemplatesPage } from './email-templates.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    EmailTemplatesPageRoutingModule,
  ],
  declarations: [EmailTemplatesPage],
})
export class EmailTemplatesPageModule {}
