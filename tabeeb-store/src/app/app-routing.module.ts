import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AddProductComponent } from './add-product/add-product.component';
import {MainComponent } from './main/main.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { NgModule, Component, ViewChild } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiscountsComponent } from './discounts/discounts.component';
import { AdsComponent } from './ads/ads.component';
import {ProductsComponent} from './products/products.component';
import { CartComponent } from './cart/cart.component';
import {ProductdetailsComponent} from './productdetails/productdetails.component';
import {ViewdetailsComponent} from './viewdetails/viewdetails.component';


const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent},
    { path: 'main', component: MainComponent,
    children: [
        { path: 'customer', component: DashboardComponent},
        { path: 'productdetail', component: ProductdetailsComponent},
        { path: 'addproduct', component: AddProductComponent},
        { path: 'order', component: LoginComponent},
        { path: 'discount', component: DiscountsComponent},
        { path: 'Ads', component: AdsComponent},
        { path: 'login', component: LoginComponent}
    ]

},
    { path: '', component: UserDashboardComponent},
    { path: 'cart', component: CartComponent},
    { path: 'viewdetails/:id', component:ViewdetailsComponent}

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}