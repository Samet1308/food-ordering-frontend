import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './admin-components/dashboard/dashboard.component';
import { AddCategoryComponent } from './admin-components/add-category/add-category.component';
import {NzColDirective, NzRowDirective} from "ng-zorro-antd/grid";
import {NzFormDirective, NzFormItemComponent} from "ng-zorro-antd/form";
import {NzOptionComponent, NzSelectComponent} from "ng-zorro-antd/select";
import {NzInputDirective} from "ng-zorro-antd/input";
import {NzButtonComponent} from "ng-zorro-antd/button";


@NgModule({
  declarations: [
    DashboardComponent,
    AddCategoryComponent
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
    NzRowDirective
  ]
})
export class AdminModule { }
