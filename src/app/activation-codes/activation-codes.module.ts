import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../shared/shared.module';
import { ActivationCodesPageRoutingModule } from './activation-codes-routing.module';
import { ActivationCodesPage } from './activation-codes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ActivationCodesPageRoutingModule,
  ],
  declarations: [ActivationCodesPage],
})
export class ActivationCodesPageModule {}
