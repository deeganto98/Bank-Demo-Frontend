import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeLoanComponent } from './home-loan/home-loan.component';
import { PaymentComponent } from './payment/payment.component';
import { VehicleLoanComponent } from './vehicle-loan/vehicle-loan.component';
import { WalletComponent } from './wallet/wallet.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    DashboardComponent,
    HomeLoanComponent,
    PaymentComponent,
    VehicleLoanComponent,
    WalletComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule, 
    ReactiveFormsModule, 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
