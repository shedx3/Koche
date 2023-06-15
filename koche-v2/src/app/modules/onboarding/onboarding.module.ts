import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnboardingRoutingModule } from './onboarding-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from '../shared/shared.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatSelectCountryModule } from '@angular-material-extensions/select-country';
import { OtpVerificationComponent } from './otp-verification/otp-verification.component';
import { NgxOtpInputModule } from 'ngx-otp-input';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
  declarations: [
    SignupComponent,
    OtpVerificationComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
  ],
  imports: [
    CommonModule,
    OnboardingRoutingModule,
    ReactiveFormsModule, MatInputModule,
    MatCheckboxModule,
    SharedModule,
    MatSelectModule,
    MatSelectCountryModule.forRoot('en'),
    NgxOtpInputModule

  ]
})
export class OnboardingModule { }
