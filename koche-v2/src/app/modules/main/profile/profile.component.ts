import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';

import { DomSanitizer } from '@angular/platform-browser';
// import { Actions, ofType } from '@ngrx/effects';

// import * as moment from 'moment';
import { Observable, Subject, takeUntil } from 'rxjs';
// import { settingsActions, SettingsFacade } from 'src/app/store/settings';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit, OnDestroy {
  errorMessage: any;
  profileForm!: UntypedFormGroup;
  wait = false;
  photo: any = {};
  fileElem: any;
  profilePicture: any;

  // complete$: Observable<any>;
  private unsubscribe: Subject<void> = new Subject();

  constructor(
    private sanitizer: DomSanitizer,
    private fb: UntypedFormBuilder // private actions$: Actions, // private settingsFacade: SettingsFacade
  ) {
    // this.iconRegistry.addSvgIcon(
    //   'calendar',
    //   this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/calendar.svg')
    // );
    // this.complete$ = this.actions$.pipe(
    //   ofType(settingsActions.getMerchantProfileSuccess)
    // );

    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: [''],
    });

    this.profileForm.controls['phoneNumber'].disable();
  }
  Gender: string[] = ['Male', "Female"];
  ngOnInit(): void {
    // this.complete$.pipe(takeUntil(this.unsubscribe)).subscribe((res) => {
    //   const merchantData = res.response.data;
    //   this.initForm(merchantData);
    // });
  }
  openUpload(event: any) {
    if (event.target.value.length === 0) {
      return;
    }
    if (!this.wait) {
      this.setLoading();
      const file: File = event.target.files[0];
      const reader = new FileReader();

      const size = file.size;
      const ext = file.type;

      reader.onload = (e: any) => {
        const dataUrl = e.target.result;

        setTimeout(() => {
          this.setImage(file, dataUrl, size, ext);
        }, 1000);
      };
      reader.readAsDataURL(file);
      this.errorMessage = undefined;
    }
  }

  trigger(input: any) {
    this.fileElem = input;
    input.click();
  }

  setLoading() {
    this.photo = {};
    this.photo.uploading = true;
  }

  setImage(file: File, image: any, size: number, ext: string) {
    this.photo = {
      uploading: false,
      image: image,
      file: file,
      size: size,
      extension: ext,
    };
    // this.uploadImage(file, image, size, ext);
    this.wait = false;
  }
  initForm(merchantData: any) {
    this.profileForm.patchValue({
      firstName: merchantData.firstName,
      lastName: merchantData.lastName,
      email: merchantData.email,
      phoneNumber: merchantData.phoneNumber,
    });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  onSubmit(form: UntypedFormGroup) {
    const data = {
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      email: form.value.email,
      phoneNumber: form.value.phoneNumber,
    };
  }
}
