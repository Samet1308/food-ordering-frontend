import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {DashboardComponent} from './admin-components/dashboard/dashboard.component';
import {NzColDirective, NzRowDirective} from "ng-zorro-antd/grid";
import {NzFormDirective, NzFormItemComponent} from "ng-zorro-antd/form";
import {NzOptionComponent, NzSelectComponent} from "ng-zorro-antd/select";
import {NzInputDirective} from "ng-zorro-antd/input";
import {NzButtonComponent} from "ng-zorro-antd/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {PostProductComponent} from './admin-components/post-product/post-product.component';
import {NzSpinComponent} from "ng-zorro-antd/spin";
import {ViewProductsComponent} from './admin-components/view-products/view-products.component';
import {AddCategoryComponent} from "./admin-components/add-category/add-category.component";
import { OrdersComponent } from './admin-components/orders/orders.component';
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatTable
} from "@angular/material/table";
import {MatMenu, MatMenuTrigger} from "@angular/material/menu";


@NgModule({
  declarations: [
    DashboardComponent,
    PostProductComponent,
    ViewProductsComponent,
    AddCategoryComponent,
    OrdersComponent

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NzColDirective,
    NzFormItemComponent,
    NzSelectComponent,
    NzOptionComponent,
    NzInputDirective,
    NzButtonComponent,
    NzFormDirective,
    NzRowDirective,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NzSpinComponent,
    MatCardContent,
    MatCardTitle,
    MatFormField,
    MatCard,
    MatFormFieldModule,
    MatInputModule,
    MatButton,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatHeaderCellDef,
    MatCellDef,
    MatMenu,
    MatMenuTrigger,
    MatHeaderRow,

  ]
})
export class AdminModule { }
