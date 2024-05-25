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
import { AboutUsComponent } from './customer-components/about-us/about-us.component';
import { PlaceOrderComponent } from './customer-components/place-order/place-order.component';
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import { MyOrdersComponent } from './customer-components/my-orders/my-orders.component';
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";


@NgModule({
  declarations: [
    ViewProductsCategoryComponent,
    DashboardComponent,
    CartComponent,
    AboutUsComponent,
    PlaceOrderComponent,
    MyOrdersComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    NzButtonComponent,
    NzColDirective,
    NzRowDirective,
    NzFormDirective,
    NzInputDirective,
    ReactiveFormsModule,
    MatCardContent,
    MatCardTitle,
    MatFormField,
    MatCard,
    MatFormFieldModule,
    MatInputModule,
    MatButton,
    MatTable,
    MatHeaderCell,
    MatCell,
    MatColumnDef,
    MatHeaderRow,
    MatRow,
    MatHeaderRowDef,
    MatRowDef,
    MatHeaderCellDef,
    MatCellDef,
  ]
})
export class CustomerModule { }
