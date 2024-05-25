import { Component } from '@angular/core';
import {CustomerService} from "../../customer-service/customer.service";
import {FormBuilder} from "@angular/forms";
import {PlaceOrderComponent} from "../place-order/place-order.component";

import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartItems: any[] = []
  order:any

  constructor(
    private customerService : CustomerService,
    private formBuilder: FormBuilder,
    private dialog : MatDialog
  ) {}


  ngOnInit(){
    this.getCart()
  }

  getCart(){
    this.cartItems = []
    this.customerService.getCartByUserId().subscribe((res)=>{
      this.order = res
      res.cartItems.forEach(element =>{
        element.processedImg='data:image/jpeg;base64,'+ element.returnedImg;
        this.cartItems.push(element)
      })
    })
  }
    placeOrder(){
    this.dialog.open(PlaceOrderComponent)
    }

}
