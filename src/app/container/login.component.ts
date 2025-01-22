import { Component, OnInit } from '@angular/core';
// import { AlertService } from '../services/alert.service';
// import { ApiService } from '../services/api.service';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { User, UserRes } from '../models/user';
import { Router } from '@angular/router';

import { ApiService } from '../services/api.service';
import { AlertService } from '../services/alert.service';

@Component({
    selector: 'app-login',
    template: `
    
    <form [formGroup]="loginForm" class="overlay form-flex"   (ngSubmit)="loginForm.valid && login()">
        <!-- <div  > -->
        <img width="25%" src="assets/digiresume-green.png" />
        <mat-card  >
            <h2  >Log In</h2>
            <p>Please fill in this form to create an account.</p>
            <mat-form-field style="margin-top:0.5rem">
            <mat-label>Email</mat-label>
            <input  formControlName="email" type="email" matInput placeholder="Email" />
            <mat-error>Valid Email is required</mat-error>
            </mat-form-field>
            <mat-form-field style="margin-top:0.5rem" >
            <mat-label>Password</mat-label>
            <input formControlName="password" type="password" matInput placeholder="Password" />
            <mat-error>(8-12 digit)Password is required</mat-error>
            </mat-form-field>   
            <div class="row" >
            <a style=" color: brown;
            cursor: pointer;
            margin-top: 2rem;
            font-palette: dark; "  (click)="forgotPwd()">Forgot password</a>   
         
            <mat-spinner *ngIf="loading" diameter="40" color="accent"></mat-spinner> 
            <div class="flex-end">

                <button  type="submit"  class="accent" color="accent"  mat-raised-button>Login</button>
                <button type="button" (click)="signup()" class="primary" color="primary" mat-raised-button >Signup</button>
            </div>
            </div>
        </mat-card>
        <!-- </div> -->
    </form>

`,
    styles: [`
        mat-card {
            display:flex;
            flex-direction: column;
            padding: 10px;
            height: 27rem;
            width: 35rem;
            background-color: darkgrey;
}




.flex-end{
    display:flex;
    align-items:end;
    justify-content:end;
}
        `]
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup=new FormGroup({
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, [Validators.required, Validators.maxLength(12), Validators.minLength(8)]),
    });

   
    loading: boolean = false
    user!: any;
    // user!: User;

    // constructor(private apiService: ApiService, private alertService: AlertService, private router: Router) {
    //     this.loginForm = new FormGroup({
    //         email: new FormControl(null, [Validators.required, Validators.email]),
    //         password: new FormControl(null, [Validators.required, Validators.maxLength(12), Validators.minLength(8)]),
    //     })
    // }
    constructor(private _apiService: ApiService, private router: Router,private alertService: AlertService) {
      
    }

    ngOnInit(): void {
    }

    login() {
        // this._apiService.getUsers();
        this.loading = true;
        const login$ = this._apiService.loginAndSetToken(this.loginForm.value);
        login$.subscribe((data: any) => {
            this.loading = false;
            this.user = data.user;
            console.log(data);
            this.alertService.success('Login Successful');
            this.router.navigate(['verify'])
        }, error => {
            this.loading = false;
            console.log(error)
        });
    }

    signup() {
        this.router.navigate(['signup'])
    }

    forgotPwd() {
        this.router.navigate(['forgot-password'])
    }

}
