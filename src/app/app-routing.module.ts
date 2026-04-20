import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { authGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'users',
    canActivate: [authGuard],
    loadChildren: () => import('./users/users.module').then(m => m.UsersPageModule)
  },
  {
    path: 'users/new',
    canActivate: [authGuard],
    loadChildren: () => import('./user-form/user-form.module').then(m => m.UserFormPageModule)
  },
  {
    path: 'users/:userId/edit',
    canActivate: [authGuard],
    loadChildren: () => import('./user-form/user-form.module').then(m => m.UserFormPageModule)
  },
  {
    path: 'configuration',
    canActivate: [authGuard],
    loadChildren: () => import('./configuration/configuration.module').then(m => m.ConfigurationPageModule)
  },
  {
    path: 'email-templates',
    canActivate: [authGuard],
    loadChildren: () => import('./email-templates/email-templates.module').then(m => m.EmailTemplatesPageModule)
  },
  {
    path: 'activation-codes',
    canActivate: [authGuard],
    loadChildren: () => import('./activation-codes/activation-codes.module').then(m => m.ActivationCodesPageModule)
  },
  {
    path: 'licenses',
    canActivate: [authGuard],
    loadChildren: () => import('./licenses/licenses.module').then(m => m.LicensesPageModule)
  },
  {
    path: 'access-history',
    canActivate: [authGuard],
    loadChildren: () => import('./access-history/access-history.module').then(m => m.AccessHistoryPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
