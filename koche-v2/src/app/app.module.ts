import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './modules/main/main.component';
import { OnboardingComponent } from './modules/onboarding/onboarding.component';
import { SharedModule } from './modules/shared/shared.module';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectCountryModule } from '@angular-material-extensions/select-country';
import { MatTabsModule } from '@angular/material/tabs'; 
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    OnboardingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatCheckboxModule,
    SharedModule, MatSelectCountryModule,
    NoopAnimationsModule,
    MatTabsModule, MatMenuModule,MatIconModule
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
