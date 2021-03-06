import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {FormsModule} from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { MainComponent } from './main/main.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { DiscountsComponent } from './discounts/discounts.component';
import { AdsComponent } from './ads/ads.component';
import { CartComponent } from './cart/cart.component';
import { UnavbarComponent } from './unavbar/unavbar.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';
import { PrescriptionComponent } from './prescription/prescription.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    AddProductComponent,
    UserDashboardComponent,
    MainComponent,
    SidebarComponent,
    NavbarComponent,
    ProductsComponent,
    DiscountsComponent,
    AdsComponent,
    CartComponent,
    UnavbarComponent,
    ProductdetailsComponent,
    ViewdetailsComponent,
    PrescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
