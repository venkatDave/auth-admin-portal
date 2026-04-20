import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../shared/shared.module';
import { ConfigurationPageRoutingModule } from './configuration-routing.module';
import { ConfigurationPage } from './configuration.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ConfigurationPageRoutingModule,
  ],
  declarations: [ConfigurationPage],
})
export class ConfigurationPageModule {}
