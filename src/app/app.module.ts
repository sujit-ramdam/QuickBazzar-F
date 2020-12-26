import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SellerDashboardComponent } from './Components/seller/seller-dashboard/seller-dashboard.component';
import { AddProductComponent } from './Components/Seller/add-product/add-product.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { SignUpComponent } from './Components/auth/signup/signup.component';
import { LogInComponent } from './Components/auth/login/login.component';
import {AuthInterceptor} from "./auth-interceptor";
import { CartComponent } from './Components/cart/cart.component';
import { UpdateProductComponent } from './Components/Seller/update-product/update-product.component';
import { ProductDetailComponent } from './Components/homepage/product-detail/product-detail.component';
import { NavbarComponent } from './Components/navbar/navbar.component'

@NgModule({
  declarations: [
    AppComponent,
    SellerDashboardComponent,
    AddProductComponent,
    HomepageComponent,
    SignUpComponent,
    LogInComponent,
    CartComponent,
    UpdateProductComponent,
    ProductDetailComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ], 
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
