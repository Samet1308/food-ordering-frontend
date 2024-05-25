import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../customer-service/customer.service";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {NzMessageService} from "ng-zorro-antd/message";

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrl: './place-order.component.css'
})
export class PlaceOrderComponent {

  orderForm! : FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private customerService: CustomerService,
    private router: Router,
    private message: NzMessageService,
    private dialog: MatDialog,

  ) {
  }
  ngOnInit(){
    this.orderForm = this.formBuilder.group({
      address : [null, Validators.required],
      orderDescription : [null]
    })
  }

  placeOrder(){
    this.message
      .success(
        `Siparişiniz Başarıyla Alındı.`, {nzDuration: 5000});
    this.router.navigateByUrl("/customer/my-orders")
    this.closeForm()
  }

  closeForm(){
    this.dialog.closeAll()
  }

}
