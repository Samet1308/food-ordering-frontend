import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { DashboardComponent } from './customer-components/dashboard/dashboard.component';
import {NzButtonComponent} from "ng-zorro-antd/button";
import {NzColDirective, NzRowDirective} from "ng-zorro-antd/grid";
import {NzFormDirective} from "ng-zorro-antd/form";
import {NzInputDirective} from "ng-zorro-antd/input";
import {ReactiveFormsModule} from "@angular/forms";
import { ViewProductsCategoryComponent } from './customer-components/view-products-category/view-products-category.component';
import { CartComponent } from './customer-components/cart/cart.component';


@NgModule({
  declarations: [
    ViewProductsCategoryComponent,
    DashboardComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    NzButtonComponent,
    NzColDirective,
    NzRowDirective,
    NzFormDirective,
    NzInputDirective,
    ReactiveFormsModule
  ]
})
export class CustomerModule { }
