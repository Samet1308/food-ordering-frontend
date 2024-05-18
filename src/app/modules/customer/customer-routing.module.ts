import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./customer-components/dashboard/dashboard.component";
import {
  ViewProductsCategoryComponent
} from "./customer-components/view-products-category/view-products-category.component";
import {CartComponent} from "./customer-components/cart/cart.component";

const routes: Routes = [
  {path: "dashboard", component:DashboardComponent},
  {path: ":categoryId/products", component:ViewProductsCategoryComponent},
  {path: "cart", component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
