import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./customer-components/dashboard/dashboard.component";
import {
  ViewProductsCategoryComponent
} from "./customer-components/view-products-category/view-products-category.component";
import {CartComponent} from "./customer-components/cart/cart.component";
import {AboutUsComponent} from "./customer-components/about-us/about-us.component";
import {PlaceOrderComponent} from "./customer-components/place-order/place-order.component";
import {MyOrdersComponent} from "./customer-components/my-orders/my-orders.component";

const routes: Routes = [
  {path: "dashboard", component:DashboardComponent},
  {path: "about", component: AboutUsComponent},
  {path: ":categoryId/products", component:ViewProductsCategoryComponent},
  {path: "cart", component:CartComponent},
  {path: "placeOrder", component:PlaceOrderComponent},
  {path: "myOrders", component:MyOrdersComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
