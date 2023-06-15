import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { fadeAnimation } from '../../shared/elements/animations/animations.component';
import { Router } from '@angular/router';
import { CustomValidators } from '../../shared/validators/custom-validators/custom-validators.component';
import { SnackbarService } from '../../shared/services/snackbar.service';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  animations: [fadeAnimation],
})
export class ForgotPasswordComponent implements OnInit, OnDestroy {
  loading: boolean = false;
 
  form: UntypedFormGroup;
 

  constructor(
    private fb: UntypedFormBuilder,
    private router: Router,
  
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
    
  }

  ngOnInit(): void {
    
  }

  onSubmit() {
    if (!this.form.valid) {
      CustomValidators.validateAllFormFields(this.form);
      return;
    }
  
  }

  ngOnDestroy() {
    // this.unsubscribe.next();
    // this.unsubscribe.complete();
  }
}
