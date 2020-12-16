import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import {RegisterComponent} from 'src/app/auth/components/register/register.component';
import {reducer} from './store/reducers';
import {AuthService} from './services/auth.service';
import {RegisterEffect} from './store/effects/register.effect';
import {BackendErrorMessagesModule} from '../shared/modules/backandErrorMessages/backendErrorMessages.module';

const routes: Routes = [
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducer),
    EffectsModule.forFeature([RegisterEffect]),
    BackendErrorMessagesModule
  ],
  declarations: [RegisterComponent],
  providers: [AuthService]
})
export class AuthModule {
}
