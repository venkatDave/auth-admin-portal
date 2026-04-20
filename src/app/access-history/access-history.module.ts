import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../shared/shared.module';
import { AccessHistoryPageRoutingModule } from './access-history-routing.module';
import { AccessHistoryPage } from './access-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    AccessHistoryPageRoutingModule,
  ],
  declarations: [AccessHistoryPage],
})
export class AccessHistoryPageModule {}
