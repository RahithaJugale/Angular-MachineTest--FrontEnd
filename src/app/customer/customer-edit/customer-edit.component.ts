import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/shared/customer.service';
import { CustomerManageListComponent } from '../customer-manage-list/customer-manage-list.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit {

  editCustomerForm:FormGroup;
  isSubmitted : boolean = false;

  constructor(private formBuilder: FormBuilder, private customerService: CustomerService, private router:Router, private toastr: ToastrService) { }

  ngOnInit(): void {

    this.editCustomerForm = this.formBuilder.group(
      {

        //customerNo
        customerNo: [this.customerService.customerData.customerNo],

         //customerName 
         customerName: [this.customerService.customerData.customerName, [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],

         // address
         address: [this.customerService.customerData.address, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
 
         //isActive
         isActive: [this.customerService.customerData.isActive]
      }
    );


  }

  get formControls(){
    return this.editCustomerForm.controls;
  }

  submitDetails(): void{
    this.isSubmitted = true;

    if(this.editCustomerForm.invalid){
      return;
    }
    if(this.editCustomerForm.valid){
      this.customerService.updateCustomer(this.editCustomerForm.value).subscribe(
        (result) => {
          console.log(result);
          this.toastr.success("Changes saved");
          this.router.navigateByUrl('/customer-manage-list');
        },
        (error) =>{
          console.log(error);
          this.toastr.error("Error");
        }
      );
    }
  }

}
