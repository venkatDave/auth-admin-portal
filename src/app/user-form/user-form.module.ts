import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserFormPageRoutingModule } from './user-form-routing.module';
import { UserFormPage } from './user-form.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    SharedModule,
    UserFormPageRoutingModule,
  ],
  declarations: [UserFormPage],
})
export class UserFormPageModule {}
