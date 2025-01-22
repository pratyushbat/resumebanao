import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatButtonModule } from '@angular/material/button';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatSlideToggleModule } from '@angular/material/slide-toggle';
// import {MatInputModule} from '@angular/material/input';
// import {MatCardModule} from '@angular/material/card';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './container/login.component';
import { HttpService } from './services/http.service';
import { ApiService } from './services/api.service';
import { AlertService } from './services/alert.service';
import { SignupComponent } from './container/signup.component';
import { RouterModule } from '@angular/router';
import { VerificationComponent } from './container/verification.component';
import { ForgotPasswordComponent } from './container/forgot-password.component';
import { AuthRepository } from './repository/auth-repository';
import { AuthGuard } from './auth-guards/auth-guard.component';
import { AnonGuard } from './auth-guards/anon-guard.component';
import { VerificationComplete } from './auth-guards/verification-completed';
import { VerificationInComplete } from './auth-guards/verification-incompleted';
import { OnBoardingIncomplete } from './auth-guards/onboarding-in-complete';
import { OnBoardingComplete } from './auth-guards/onboarding-complete';
import { LogoutComponent } from './components/logout.component';
import { OnBoardingIntroComponent } from './container/on-boarding-intro.component';
import { OnBoardingComponent } from './container/onboarding.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    LogoutComponent,
    ForgotPasswordComponent,
    VerificationComponent,
    OnBoardingComponent,
    OnBoardingIntroComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule

  ],
  providers: [
    HttpService,
    ApiService,
    AlertService,
    AuthRepository,
    AuthGuard,
    AnonGuard,
    VerificationComplete,
    VerificationInComplete,
    OnBoardingIncomplete,
    OnBoardingComplete,],
  bootstrap: [AppComponent]
})
export class AppModule { }
