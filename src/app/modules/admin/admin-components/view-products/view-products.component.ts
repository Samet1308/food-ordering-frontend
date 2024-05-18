import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NzButtonSize} from "ng-zorro-antd/button";
import {AdminService} from "../../admin-services/admin.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NzMessageService} from "ng-zorro-antd/message";

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrl: './view-products.component.css'
})
export class ViewProductsComponent {
  categoryId: number = this.activatedroute.snapshot.params['categoryId']
  Products:any=[]
  validateForm! : FormGroup;
  isSpinning:boolean
  size: NzButtonSize = 'large';
  constructor(
    private adminService:AdminService,
    private activatedroute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private message: NzMessageService,
    private router: Router) {
  }

  ngOnInit(){
    this.validateForm = this.formBuilder.group({
      title: [null, [Validators.required]]
    });
    this.getProductsByCategory();
    this.validateForm.get(['title'])!.valueChanges.subscribe(() => {
      this.onSearchInputChange();
    });
  }
  onSearchInputChange() {
    const title = this.validateForm.get(['title'])!.value;
    if (!title) {
      this.getProductsByCategory();
    }
  }
  submitForm(){
    this.isSpinning = true
    this.Products=[]
    this.adminService.getProductsByCategoryAndTitle(this.categoryId,this.validateForm.get(['title'])!.value).subscribe((res)=>{
      console.log(res)
      res.forEach(element =>{
        element.processedImg='data:image/jpeg;base64,'+ element.returnedImg;
        this.Products.push(element)
        this.isSpinning=false
      })
    })
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

  deleteProduct(productId: any) {
    this.adminService.deleteProduct(productId).subscribe((res) => {
      if (res == null) {
        this.getProductsByCategory()
        this.message
          .success(
            `Ürün Başarıyla Silindi.`, {nzDuration: 5000}
          );
      } else {
        this.message.error(
          `Something went wrong`, {nzDuration: 5000})
      }
    });
  }
}
