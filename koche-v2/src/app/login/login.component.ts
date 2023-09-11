
import { Component, OnDestroy, OnInit,Input } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
// import { Actions, ofType } from '@ngrx/effects';
// import { Store } from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { SnackbarService } from '../modules/shared/services/snackbar.service';
import { fadeAnimation } from '../modules/shared/elements/animations/animations.component';
import { CustomValidators } from '../modules/shared/validators/custom-validators/custom-validators.component';
// import { AppState } from '../store/app.state';


// import { AppConfig } from '../app.config';
// import { LoggerService } from '../modules/shared/services/logger.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [fadeAnimation],
})
export class LoginComponent implements OnInit, OnDestroy {
  loading: boolean = false;
  showPassword: boolean = false;
  // isLoading$ = this.authFacade.isLoading$.subscribe((e) => (this.loading = e));
  loginForm!: UntypedFormGroup;
  type: string = 'password';

  // bankName: string = AppConfig.clientName;
  client: string = 'koche';

  // complete$: Observable<any>;
  private unsubscribe: Subject<void> = new Subject();

  images = [
    {
      image: '../assets/images/slide1.png',
      title: 'first slide',
    },
    {
      image: 'assets/images/slide2.png',
      title: 'second slide',
    },
    {
      image: 'assets/images/slide3.png',
      title: 'third slide',
    },
  ];

  constructor(
    private sanitizer: DomSanitizer,
    private fb: UntypedFormBuilder,

    // private store: Store<AppState>,
    private router: Router,
    private snackBar: SnackbarService
  ) // private authFacade: AuthFacade,
  // private logger: LoggerService
  {
    // this.complete$ = this.actions$.pipe(ofType(authActions.loginSuccess));
  }

  ngOnInit(): void {
    // this.complete$.pipe(takeUntil(this.unsubscribe)).subscribe({
    //   next: ({ response }) => {
    //     if (response.additionalInformation.LoginKey) {
    //       this.router.navigate(['/onboard/otp-verification']);
    //     } else if (response.additionalInformation.isDefaultPassword) {
    //       this.router.navigate(['/onboard/change-password']);
    //     } else {
    //       // this.snackBar.openSnackBar('Login Successful', 'success-snackbar');
    //       this.router.navigate(['/app']);
    //     }
    //   },
    //   error: (err) => {
    //     // this.logger.debug(err);
    //   },
    // });

    this.loginForm = this.fb.group({
      email: new UntypedFormControl('', [
        Validators.required,
        Validators.email,
      ]),
      password: new UntypedFormControl('', [Validators.required]),
    });
  }

  onLoginSubmit() {
    this.router.navigate(['/onboard/signup']);
    // if (!this.loginForm.valid) {
    //   // CustomValidator.validateAllFormFields(this.loginForm);
    //   return;
    // }
    // const email = this.loginForm.value.email;
    // const password = this.loginForm.value.password;
    // this.authFacade.login(email, password);
  }

  toggleType() {
    if (this.type == 'password') {
      this.type = 'text';
      return;
    }
    this.type = 'password';
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
