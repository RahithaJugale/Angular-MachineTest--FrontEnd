import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Order } from './order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orders: Order[];

  constructor(private httpClient: HttpClient) { }

  //get order list
  getAllOrders(){
    return this.httpClient.get(environment.apiUrlCustomerAndSales+'/api/orders');
  }
}
