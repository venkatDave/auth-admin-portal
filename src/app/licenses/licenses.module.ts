import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../shared/shared.module';
import { LicensesPageRoutingModule } from './licenses-routing.module';
import { LicensesPage } from './licenses.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    LicensesPageRoutingModule,
  ],
  declarations: [LicensesPage],
})
export class LicensesPageModule {}
