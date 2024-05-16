import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NzButtonSize} from "ng-zorro-antd/button";
import {AdminService} from "../../admin-services/admin.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrl: './view-products.component.css'
})
export class ViewProductsComponent {
  categoryId: number = this.activatedroute.snapshot.params['categoryId']
  Products:any=[]
  isSpinning:boolean
  constructor(
    private adminService:AdminService,
    private activatedroute: ActivatedRoute) {
  }

  ngOnInit(){
    this.getProductsByCategory();
  }

  getProductsByCategory(){
    this.Products=[];
    this.adminService.getProductsByCategory(this.categoryId).subscribe((res)=>{
      res.forEach(element =>{
        element.processedImg='data:image/jpeg;base64,'+ element.returnedImg;
        this.Products.push(element)
      })
    })
  }
}
