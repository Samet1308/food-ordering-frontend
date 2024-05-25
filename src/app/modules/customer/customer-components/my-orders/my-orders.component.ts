import { Component } from '@angular/core';
import {CustomerService} from "../../customer-service/customer.service";

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrl: './my-orders.component.css'
})
export class MyOrdersComponent {

  myOrders: any;

  constructor(private customerService: CustomerService){}
  ngOnInit()
  {
    this.getMyOrders();
  }
  getMyOrders () {
    this.customerService.getOrdersByUserId().subscribe(res =>{
      this.myOrders = res;
    })
  }
}
