import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/shared/customer.service';
import { Order } from 'src/app/shared/order';
import { OrderService } from 'src/app/shared/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  constructor(public orderService: OrderService) { }

  ngOnInit(): void {
    this.getAllOrders();
  }

  //get all orders
  getAllOrders(){
    this.orderService.getAllOrders().subscribe(
      (result) => {
        console.log(result);
        this.orderService.orders = result as Order[];
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
