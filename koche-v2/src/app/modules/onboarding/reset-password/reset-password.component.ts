import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';

import { Router } from '@angular/router';
import { fadeAnimation } from '../../shared/elements/animations/animations.component';
import { CustomValidators } from '../../shared/validators/custom-validators/custom-validators.component';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
  animations: [fadeAnimation],
})
export class ResetPasswordComponent implements OnInit, OnDestroy {
  loading: boolean = false;

  changePasswordForm: UntypedFormGroup;
  type: string = 'password';
  showPasswordHints: boolean = false;

  alertType: string = 'success';
  alertTitle: string = 'You did awesome!!';
  alertMessage: string =
    'You can proceed to your account to make and receive transactions now';

  completed = false;
  email!: string;

  isDefaultPassword: boolean = false;

  constructor(private fb: UntypedFormBuilder, private router: Router) {
    this.changePasswordForm = this.fb.group({
      password: [
        null,
        Validators.compose([
          Validators.required,
          CustomValidators.patternValidator(/[0-9]/, { hasNumber: true }),
          CustomValidators.patternValidator(/[A-Z]/, {
            hasCapitalCase: true,
          }),

          CustomValidators.patternValidator(
            /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
            {
              hasSpecialCharacters: true,
            }
          ),
          CustomValidators.patternValidator(/[a-z]/, {
            hasLowerCase: true,
          }),
          Validators.minLength(12),
        ]),
      ],
      confirmPassword: ['', Validators.compose([Validators.required])],
    });

    this.changePasswordForm.setValidators(
      CustomValidators.passwordMatchingValidatior
    );
  }

  ngOnInit(): void {}

  get passwordCapitalCaseError(): boolean {
    return this.changePasswordForm.controls['password'].hasError(
      'hasCapitalCase'
    );
  }
  get passwordNumberError(): boolean {
    return this.changePasswordForm.controls['password'].hasError('hasNumber');
  }
  get passwordLowerCaseError(): boolean {
    return this.changePasswordForm.controls['password'].hasError(
      'hasLowerCase'
    );
  }
  get passwordSpecialCharactersError(): boolean {
    return this.changePasswordForm.controls['password'].hasError(
      'hasSpecialCharacters'
    );
  }
  get passwordLengthError() {
    return this.changePasswordForm.controls['password'].hasError('minlength');
  }
  get passwordRequiredError(): boolean {
    return this.changePasswordForm.controls['password'].hasError('required');
  }

  toggleType() {
    if (this.type == 'password') {
      this.type = 'text';
      return;
    }
    this.type = 'password';
  }
 

  validate() {
    if (
      this.changePasswordForm.controls['password'].value !==
      this.changePasswordForm.controls['confirmPassword'].value
    ) {
      return false;
    }

    return true;
  }

  onFormSubmit() {
    if (!this.changePasswordForm.valid) {
      CustomValidators.validateAllFormFields(this.changePasswordForm);
      return;
    }

    if (!this.validate()) {
      return;
    }
  }

  onProcessCompleted = (): void => {
    this.router.navigate(['/login']);
  };

  ngOnDestroy() {
    // this.unsubscribe.next();
    // this.unsubscribe.complete();
  }
}
