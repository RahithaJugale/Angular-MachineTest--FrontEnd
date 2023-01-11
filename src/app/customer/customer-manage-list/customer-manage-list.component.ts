import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/shared/customer';
import { CustomerService } from 'src/app/shared/customer.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customer-manage-list',
  templateUrl: './customer-manage-list.component.html',
  styleUrls: ['./customer-manage-list.component.scss']
})
export class CustomerManageListComponent implements OnInit {

  constructor(private router: Router, public customerService:CustomerService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAllCustomers();
  }

  //get list of customers
  getAllCustomers(){
    this.customerService.getAllCustomers().subscribe(
      (result) => {
        console.log(result);
        this.customerService.customers = result as Customer[];
      },
      (error) => {
        console.log(error);
      }
    );
  }

  gotoCustomerEdit(customer:Customer){
    this.customerService.customerData = customer;
    this.router.navigateByUrl('/customer-edit');

  }

  gotoCustomerDelete(customer:Customer){
    this.customerService.customerData = customer;
    
    if(confirm("Do you want to delete this employee?")){
      customer.isActive=false;
      this.customerService.updateCustomer(customer).subscribe(
        (result) => {
          console.log(result);
          this.toastr.success("Customer deleted");
        },
        (error) => {
          console.log(error);
          this.toastr.error("Error");
        }
      );

    }
    

  }
}
