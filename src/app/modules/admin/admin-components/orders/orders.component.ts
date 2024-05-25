import { Component } from '@angular/core';
import {AdminService} from "../../admin-services/admin.service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {
    orders:any
  constructor(
    private adminService : AdminService,
  ) {
  }
  ngOnInit(){
      this.getPlaceOrders()
  }

  getPlaceOrders(){
      this.adminService.getPlaceOrders().subscribe(res =>{
        this.orders=res;
      })
  }
}
