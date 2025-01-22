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

import { ResumeRepository } from './repository/resume-repository';

import { HeaderComponent } from './container/layout/header.component';
import { FooterComponent } from './container/layout/footer.component';
import { UploadComponent } from './container/on-boarding/tabs/upload.componet';
import { UploadFromDiskComponent } from './container/on-boarding/tabs/upload-from-disk.component';
import { LearnComponent } from './container/on-boarding/tabs/lean-ang.component';
import { UploadImageComponent } from './container/on-boarding/tabs/upload-image.component';
import { ContactDetailsComponent } from './components/resume-form/contact-details.component';
import { ContactDetailFormComponent } from './components/resume-form/resume-dialogues/contact-detail-form.component';
import { ImportYoutubeComponent } from './container/on-boarding/tabs/import-youtube.component';

import { ResumeFormComponent } from './container/resume-form.component';
import { ResumeNameComponent } from './container/on-boarding/resume-name.component';
import { OnBoardingIntroComponent } from './container/on-boarding/on-boarding-intro.component';
import { OnBoardingComponent } from './container/on-boarding/onboarding.component';
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
    ResumeNameComponent,
    UploadComponent,
    UploadImageComponent,
    UploadFromDiskComponent,
    ImportYoutubeComponent,
    LearnComponent,
    ResumeFormComponent,
    HeaderComponent,
    FooterComponent,
    ContactDetailsComponent,
    ContactDetailFormComponent
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
    OnBoardingComplete,ResumeRepository],
  bootstrap: [AppComponent]
})
export class AppModule { }
