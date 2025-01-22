import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './container/signup.component';
import { LoginComponent } from './container/login.component';
import { VerificationComponent } from './container/verification.component';
import { ForgotPasswordComponent } from './container/forgot-password.component';
import { AnonGuard } from './auth-guards/anon-guard.component';
import { AuthGuard } from './auth-guards/auth-guard.component';
import { VerificationInComplete } from './auth-guards/verification-incompleted';
import { LogoutComponent } from './components/logout.component';
import { VerificationComplete } from './auth-guards/verification-completed';
import { OnBoardingIncomplete } from './auth-guards/onboarding-in-complete';
import { OnBoardingComplete } from './auth-guards/onboarding-complete';
import { OnBoardingIntroComponent } from './container/on-boarding/on-boarding-intro.component';
import { OnBoardingComponent } from './container/on-boarding/onboarding.component';
import { DashboardComponent } from './container/dashboard.component';

const routes: Routes = [
  {
    path: '',
     canActivate: [AnonGuard],
    children: [
      { path: 'signup', component: SignupComponent },
      { path: '', component: LoginComponent },
      { path: 'forgot-password', component: ForgotPasswordComponent }
    ]
  },
  // ,
  {
    path: '', canActivate: [AuthGuard,VerificationInComplete], children: [
      { path: 'verify', component: VerificationComponent  },
    ]  
  },
  {
    path: '', canActivate: [AuthGuard], children: [
      { path: 'logout', component: LogoutComponent  },
    ]  
  },
  {
    path: '', canActivate:[AuthGuard,VerificationComplete,OnBoardingIncomplete] ,children: [
      { path: 'on-boarding', component: OnBoardingIntroComponent } ,   
      { path: 'on-boarding/add', component: OnBoardingComponent } ,   
    ]  
  },
  {
    path: '',canActivate:[AuthGuard ,VerificationComplete,OnBoardingComplete], children: [    
      { path: 'dashboard', component: DashboardComponent },
    ]  
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
