import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerAddComponent } from './customer/customer-add/customer-add.component';
import { LoginComponent } from './login/login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OrderComponent } from './order/order.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerManageListComponent } from './customer/customer-manage-list/customer-manage-list.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { LoginService } from './shared/login.service';
import { OrderAddComponent } from './order/order-add/order-add.component';
import { OrderManageComponent } from './order/order-manage/order-manage.component';
import { OrderListComponent } from './order/order-list/order-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerAddComponent,
    LoginComponent,
    OrderComponent,
    CustomerListComponent,
    CustomerManageListComponent,
    CustomerEditComponent,
    OrderAddComponent,
    OrderManageComponent,
    OrderListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot()
    ],
  providers: [
    LoginService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
