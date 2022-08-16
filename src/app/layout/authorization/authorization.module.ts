import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ForgetPasswordComponent, LoginComponent, OtpComponent, SignupComponent } from 'src/app/components/authorization/authorization';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthorizationRoutingModule } from './authorization-routing.module';
import { AuthorizationComponent } from './authorization.component';



@NgModule({
  declarations: [
    AuthorizationComponent,
    LoginComponent,
    SignupComponent,
    OtpComponent,
    ForgetPasswordComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AuthorizationRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule  
  ]
})
export class AuthorizationModule { }
