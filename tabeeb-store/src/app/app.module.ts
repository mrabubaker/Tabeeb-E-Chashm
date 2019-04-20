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
import { MeasurePDComponent } from './measure-pd/measure-pd.component';
import { PdComponent } from './pd/pd.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TestComponent } from './test/test.component';
import { BlogComponent } from './blog/blog.component';
import { FooterComponent } from './footer/footer.component';
import { OrderComponent } from './order/order.component';
import { OrdermanagementComponent } from './ordermanagement/ordermanagement.component';
import { OpencameraComponent } from './opencamera/opencamera.component';

import {WebcamModule} from 'ngx-webcam';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CategoryproductComponent } from './categoryproduct/categoryproduct.component';
import { CategoriesproductsComponent } from './categoriesproducts/categoriesproducts.component';
import { AddressdetailsComponent } from './addressdetails/addressdetails.component';
import { OrdersummaaryComponent } from './ordersummaary/ordersummaary.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';

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
    PrescriptionComponent,
    MeasurePDComponent,
    PdComponent,
    TestComponent,
    BlogComponent,
    FooterComponent,
    OrderComponent,
    OrdermanagementComponent,
    OpencameraComponent,
    WishlistComponent,
    CategoryproductComponent,
    CategoriesproductsComponent,
    AddressdetailsComponent,
    OrdersummaaryComponent,
    OrderdetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    WebcamModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
