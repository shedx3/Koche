import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Router } from '@angular/router';

import { fadeAnimation } from '../../shared/elements/animations/animations.component';
import { SnackbarService } from '../../shared/services/snackbar.service';
import { CustomValidators } from '../../shared/validators/custom-validators/custom-validators.component';
import {
  Observable,
  scan,
  Subject,
  takeWhile,
  timer,
  takeUntil,
  of,
  switchMap,
} from 'rxjs';


import { Country } from '@angular-material-extensions/select-country';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  animations: [fadeAnimation],
 
})
export class SignupComponent implements OnInit {

  
  signUpForm!: UntypedFormGroup;
  type = 'password';
  showPasswordHints: boolean = false;
  loading: boolean = false;

  private unsubscribe: Subject<void> = new Subject();
  otpType: string = 'mail';
  consent: boolean = false;
  defaultCountry: Country = {
    alpha2Code: 'NG',
    alpha3Code: 'NGA',
    callingCode: '+234',
    name: 'Nigeria',
    numericCode: '234',
  };

  selectGenderOptions: any = {
    options: ['MALE', 'FEMALE'],
  };
  predefinedCountries: Country[] = [
    {
      alpha2Code: 'NG',
      alpha3Code: 'NGA',
      callingCode: '+234',
      name: 'Nigeria',
      numericCode: '234',
    },
    {
      alpha2Code: 'KE',
      alpha3Code: 'KEN',
      callingCode: '+254',
      name: 'Kenya',
      numericCode: '404',
    },
  ];
  constructor(
    private formBuilder: UntypedFormBuilder,

    private router: Router,

    private snackBar: SnackbarService
  ) {
    this.initForm();
  }

  get passwordControl(): UntypedFormControl {
    return this.signUpForm.get('password') as UntypedFormControl;
  }

  ngOnInit(): void {}

  get passwordCapitalCaseError(): boolean {
    return this.signUpForm.controls['password'].hasError('hasCapitalCase');
  }
  get passwordNumberError(): boolean {
    return this.signUpForm.controls['password'].hasError('hasNumber');
  }
  get passwordLowerCaseError(): boolean {
    return this.signUpForm.controls['password'].hasError('hasLowerCase');
  }
  get passwordSpecialCharactersError(): boolean {
    return this.signUpForm.controls['password'].hasError(
      'hasSpecialCharacters'
    );
  }
  get passwordLengthError() {
    return this.signUpForm.controls['password'].hasError('minlength');
  }
  get passwordRequiredError(): boolean {
    return this.signUpForm.controls['password'].hasError('required');
  }

  patternValidator = Validators.pattern(
    /^(?!.*\b(join|select|alert|script|<|>|=|;|\*|#|\+|$)\b).*$/i
  );
 

  invertedPatternValidator(
    control: FormControl
  ): { [key: string]: any } | null {
    const patternError = this.patternValidator(control);
    return patternError ? null : { patternMatch: { value: control.value } };
  }

  // '^(?!.*join|.*select|.*alert|.*script|.*<|.*>|.*=|.*;|.*\\*|.*#|.*\\+$).*$'

  initForm() {
    this.signUpForm = this.formBuilder.group({
      firstName: [
        '',
        [Validators.required, Validators.pattern("^[a-zA-Z-' ]+$")],
      ],
      lastName: [
        '',
        [Validators.required, Validators.pattern("^[a-zA-Z-' ]+$")],
      ],

      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(
            '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$'
          ),
        ],
      ],
      nationality: ['', Validators.required],
      gender: ['', Validators.required],

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
    });
   
  }

  onSubmit() {
    // if (!this.consent) {
    //   this.snackBar.openSnackBar(
    //     'Terms and condition consent required',
    //     'error-snackbar'
    //   );
    //   return;
    // }
    // if (!this.signUpForm.valid) {
    //   CustomValidators.validateAllFormFields(this.signUpForm);
    //   return;
    // }

    const request = {
      firstName: this.signUpForm.get('firstName')?.value,
      lastName: this.signUpForm.get('lastName')?.value,
      email: this.signUpForm.get('email')?.value,
      gender: this.signUpForm.get('gender')?.value,
      nationality: this.signUpForm.get('nationality')?.value.name,
      phoneNumber: this.signUpForm.get('phone')?.value,
      password: this.signUpForm.get('password')?.value,
    };

this.router.navigate(["onboard/otp"])
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  toggleType() {
    if (this.type == 'password') {
      this.type = 'text';
      return;
    }
    this.type = 'password';
  }
}
