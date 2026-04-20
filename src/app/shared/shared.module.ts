import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { AccountScopeComponent } from './account-scope/account-scope.component';
import { UserInfoComponent } from './user-info/user-info.component';

@NgModule({
  declarations: [AccountScopeComponent, UserInfoComponent],
  imports: [CommonModule, IonicModule],
  exports: [AccountScopeComponent, UserInfoComponent],
})
export class SharedModule {}
