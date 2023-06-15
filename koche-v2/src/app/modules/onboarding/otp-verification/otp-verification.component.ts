import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { fadeAnimation } from '../../shared/elements/animations/animations.component';
import { SnackbarService } from '../../shared/services/snackbar.service';
import { takeUntil,takeWhile,scan,timer,Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { NgxOtpInputConfig,NgxOtpInputComponent } from 'ngx-otp-input';
import { Router } from '@angular/router';
@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html',
  styleUrls: ['./otp-verification.component.scss'],
  animations: [fadeAnimation],
})
export class OtpVerificationComponent implements OnInit, OnDestroy {
  loading: boolean = false;
  otpCode!: string;
  completed = false;
  loginKey!: string;
  private destroy$ = new Subject<void>();
  timer$!: Observable<any>;
  otpInputConfig: NgxOtpInputConfig = {
    otpLength: 5,
    autofocus: true,
    classList: {
      input: 'my-super-class',
      inputFilled: 'my-super-filled-class',
      inputDisabled: 'my-super-disable-class',
      inputSuccess: 'my-super-success-class',
      inputError: 'my-super-error-class',
    },
  };
  @ViewChild('otp') otp!: NgxOtpInputComponent;
  alertType: string = 'success';
  alertTitle: string = 'You did awesome!!';
  alertMessage: string =
    'You can proceed to your account to make and receive transactions now';

  // @ViewChild('otp') otp!: NgxOtpInputComponent;
  // otpCode!: string;
  // request: any;
  // user!: merchantOnboardModel;
  // email!: string;
  // loginKey!: string;

  // request!: merchantOnboardModel;

  constructor(private router: Router, private snackBar: SnackbarService) {}

  ngOnInit(): void {
    this.startCountDown(300);
  }
  startCountDown(seconds: number) {
    this.timer$ = timer(0, 1000).pipe(
      scan((acc) => --acc, seconds),
      takeWhile((val) => val >= 0)
    );
  }

  stopCountDown() {
    this.destroy$.next();
  }

  setOTP(otp: string[]) {
    this.otpCode = otp.join('');
  }
  resendOtp() {
    // const email = this.user?.email || this.email;
    // const firstName = this.user?.firstName || '';
    // const request: any = { email: email, firstName: firstName };
    // this.authFacade.resendOtp(request, this.otpType);
  }

  onVerify() {
    // let otp = this.otpCode;
    // if (this.otp?.otpConfig.otpLength !== otp.length) {
    //   return;
    // }
    // this.store.dispatch(setLoadingSpinner({ status: true }));
    // if (this.loginKey) {
    //   const request = {
    //     username: this.email,
    //     otp: otp,
    //     loginKey: this.loginKey,
    //   };
    //   this.authFacade.validate2faOtp(request);
    // } else {
    //   const request: any = { email: this.email, otp: otp };
    //   if (!this.isReset) {
    //     request['firstName'] = this.user.firstName;
    //     request['phoneNumber'] = this.user.phoneNumber;
    //   }
    //   this.authFacade.verifyOtp(request, this.otpType, this.isReset);
    // }
  }

  onProcessCompleted = (): void => {
    this.router.navigate(['/login']);
  };

  ngOnDestroy() {
    // this.unsubscribe.next();
    // this.unsubscribe.complete();
  }
}
