import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { OnboardingComponent } from './onboarding.component';
import { OtpVerificationComponent } from './otp-verification/otp-verification.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {
    path: '',
    component: OnboardingComponent,
    children: [
      { path: '', redirectTo: 'signup', pathMatch: 'full' },
      { path: 'signup', component: SignupComponent },
      { path: 'otp', component: OtpVerificationComponent },
      { path: 'forgot-password', component:ForgotPasswordComponent },
      { path: 'reset-password', component:ResetPasswordComponent },
      // { path: 'terms-of-use', component: TermsOfUseComponent },
      // { path: 'otp-verification', component: OtpVerificationComponent },
      // { path: 'phone-verification', component: SmsOtpVerificationComponent },
      // { path: 'forgot-password', component: ForgotPasswordComponent },
      // { path: 'change-password', component: ChangePasswordComponent },
      // { path: 'privacy-policy', component: PrivacyPolicyComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnboardingRoutingModule { }
