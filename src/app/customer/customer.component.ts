import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  isDelete:boolean = false;
  isEdit: boolean = false;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  addCustomer(){
    this.router.navigateByUrl('/customer-add');
  }
  listCustomer(){
    this.router.navigateByUrl('/customer-list');
  }
  listdynamicCustomer(){
    this.router.navigateByUrl('/customer-manage-list');
  }

}
