import { Component } from '@angular/core';
import {CustomerService} from "../../customer-service/customer.service";
import {FormBuilder} from "@angular/forms";

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

}
