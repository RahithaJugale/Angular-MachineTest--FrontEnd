import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerAddComponent } from './customer/customer-add/customer-add.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerManageListComponent } from './customer/customer-manage-list/customer-manage-list.component';
import { CustomerComponent } from './customer/customer.component';
import { LoginComponent } from './login/login.component';
import { OrderAddComponent } from './order/order-add/order-add.component';
import { OrderListComponent } from './order/order-list/order-list.component';
import { OrderManageComponent } from './order/order-manage/order-manage.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'customer', component: CustomerComponent},
  { path: 'customer-add', component: CustomerAddComponent},
  { path: 'customer-list', component: CustomerListComponent},
  { path: 'customer-edit', component: CustomerEditComponent},
  { path: 'customer-manage-list', component: CustomerManageListComponent},
  { path: 'login', component: LoginComponent},
  { path: 'order', component: OrderComponent},
  { path: 'order-add', component: OrderAddComponent},
  { path: 'order-list', component: OrderListComponent},
  { path: 'order-manage', component: OrderManageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
