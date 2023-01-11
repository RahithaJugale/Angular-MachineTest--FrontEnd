import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-order-add',
  templateUrl: './order-add.component.html',
  styleUrls: ['./order-add.component.scss']
})
export class OrderAddComponent implements OnInit {

  addOrderForm: FormGroup;
  isSubmitted:boolean = false;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.addOrderForm = this.formBuilder.group(
      {
        customerNo: [''],
        orderDate: ['']
      }
    );
  }

  get formControls(){
    return this.addOrderForm.controls;
  }

  submitDetails(){

  }

}
