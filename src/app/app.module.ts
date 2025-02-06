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

import {
  ResumeFormComponent,
  TEST_TOKEN,
  TEST_TOKENFF,
} from './container/resume-form.component';
import { ResumeNameComponent } from './container/on-boarding/resume-name.component';
import { OnBoardingIntroComponent } from './container/on-boarding/on-boarding-intro.component';
import { OnBoardingComponent } from './container/on-boarding/onboarding.component';
import { EducationListComponent } from './components/resume-form/resume-list/education-list.component';
import { EducationCardComponent } from './components/resume-form/resume-card/education-card.component';
import { EducationFormComponent } from './components/resume-form/resume-dialogues/education-form.component';
import { EducationComponent } from './components/resume-form/education.component';
import { EmploymentHistoryListComponent } from './components/resume-form/resume-list/employment-history-list.component';
import { EmploymentHistoryCardComponent } from './components/resume-form/resume-card/employment-history-card.component';
import { EmploymentHistoryFormComponent } from './components/resume-form/resume-dialogues/employment-history-form.component';
import { EmploymentHistoryComponent } from './components/resume-form/employment-history.component';
import { InterestComponent } from './components/resume-form/interest.component';
import { InterestListComponent } from './components/resume-form/resume-list/interest-list.component';
import { InterestCardComponent } from './components/resume-form/resume-card/interest-card.component';
import { InterestFormComponent } from './components/resume-form/resume-dialogues/interest-form.component';
import { SkillFormComponent } from './components/resume-form/resume-dialogues/skill-form.component';
import { SkillCardComponent } from './components/resume-form/resume-card/skill-card.component';
import { SkillListComponent } from './components/resume-form/resume-list/skill-list.component';
import { SkillsComponent } from './components/resume-form/skills.component';
import { LanguageComponent } from './components/resume-form/language.component';
import { LanguageCardComponent } from './components/resume-form/resume-card/language-card.component';
import { LanguageFormComponent } from './components/resume-form/resume-dialogues/language-form.component';
import { LanguageListComponent } from './components/resume-form/resume-list/language-list.component';
import { IndustrialExposureCardComponent } from './components/resume-form/resume-card/industrial-exposure-card.component';
import { IndustrialExposureComponent } from './components/resume-form/industrial-exposure.component';
import { IndustrialExposureFormComponent } from './components/resume-form/resume-dialogues/industrial-exposure-form.component';
import { IndustrialExposureListComponent } from './components/resume-form/resume-list/industrial-exposure-list.component';
import { AwardComponent } from './components/resume-form/award.component';
import { AwardCardComponent } from './components/resume-form/resume-card/award-card.component';
import { AwardFormComponent } from './components/resume-form/resume-dialogues/award-form.component';
import { AwardListComponent } from './components/resume-form/resume-list/award-list.component';
import { ObjectiveComponent } from './components/resume-form/objective.component';
import { ObjectiveCardComponent } from './components/resume-form/resume-card/objective-card.component';
import { ObjectiveFormComponent } from './components/resume-form/resume-dialogues/objective-form.component';
import { ObjectiveListComponent } from './components/resume-form/resume-list/objective-list.component';
import { ReferenceComponent } from './components/resume-form/reference.component';
import { ReferenceCardComponent } from './components/resume-form/resume-card/reference-card.component';
import { ReferenceFormComponent } from './components/resume-form/resume-dialogues/reference-form.component';
import { ReferenceListComponent } from './components/resume-form/resume-list/reference-list.component';
import { ProjectDetailsComponent } from './components/resume-form/project-details.component';
import { ProjectDetailsCardComponent } from './components/resume-form/resume-card/project-details-card.component';
import { ProjectDetailsFormComponent } from './components/resume-form/resume-dialogues/project-details-form.component';
import { ProjectDetailsListComponent } from './components/resume-form/resume-list/project-details-list.component';
import { StrengthComponent } from './components/resume-form/strength.component';
import { StrengthCardComponent } from './components/resume-form/resume-card/strength-card.component';
import { StrengthListComponent } from './components/resume-form/resume-list/strength-list.component';
import { StrengthFormComponent } from './components/resume-form/resume-dialogues/strength-form.component';
import { WeaknessComponent } from './components/resume-form/weakness.component';
import { WeaknessCardComponent } from './components/resume-form/resume-card/weakness-card.component';
import { WeaknessFormComponent } from './components/resume-form/resume-dialogues/weakness-form.component';
import { WeaknessListComponent } from './components/resume-form/resume-list/weakness-list.component';
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
    ContactDetailFormComponent,
    EducationComponent,
    EducationFormComponent,
    EducationCardComponent,
    EducationListComponent,

    EmploymentHistoryComponent,
    EmploymentHistoryListComponent,
    EmploymentHistoryCardComponent,
    EmploymentHistoryFormComponent,

    InterestComponent,
    InterestListComponent,
    InterestCardComponent,
    InterestFormComponent,

    SkillsComponent,
    SkillListComponent,
    SkillCardComponent,
    SkillFormComponent,

    LanguageComponent,
    LanguageCardComponent,
    LanguageFormComponent,
    LanguageListComponent,

    IndustrialExposureComponent,
    IndustrialExposureCardComponent,
    IndustrialExposureFormComponent,
    IndustrialExposureListComponent,

    AwardComponent,
    AwardCardComponent,
    AwardFormComponent,
    AwardListComponent,

    ObjectiveComponent,
    ObjectiveCardComponent,
    ObjectiveFormComponent,
    ObjectiveListComponent,

    ReferenceComponent,
    ReferenceCardComponent,
    ReferenceFormComponent,
    ReferenceListComponent,

    ProjectDetailsComponent,
    ProjectDetailsCardComponent,
    ProjectDetailsFormComponent,
    ProjectDetailsListComponent,

    StrengthComponent,
    StrengthCardComponent,
    StrengthFormComponent,
    StrengthListComponent,

    WeaknessComponent,
    WeaknessCardComponent,
    WeaknessFormComponent,
    WeaknessListComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
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
    OnBoardingComplete,
    ResumeRepository,
    // {provide: TEST_TOKEN,useValue:'hhello test'}],
    { provide: TEST_TOKEN, useFactory: () => 'HELLO FACTORY TEST' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
