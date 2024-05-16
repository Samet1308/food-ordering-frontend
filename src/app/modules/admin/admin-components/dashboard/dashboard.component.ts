import { Component } from '@angular/core';
import {AdminService} from "../../admin-services/admin.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NzButtonSize} from "ng-zorro-antd/button";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  categories: any=[];
  validateForm! : FormGroup;
  size: NzButtonSize = 'large';
  isSpinning:boolean
  constructor(
    private adminService:AdminService,
    private formBuilder: FormBuilder) {
  }

  ngOnInit(){
    this.validateForm = this.formBuilder.group({
      title: [null, [Validators.required]]
    });
    this.getAllCategories();
    this.validateForm.get(['title'])!.valueChanges.subscribe(() => {
      this.onSearchInputChange();
    });
  }


  submitForm(){
    this.isSpinning = true
    this.categories=[]
    this.adminService.getAllCategoriesByTitle(this.validateForm.get(['title'])!.value).subscribe((res)=>{
      console.log(res)
      res.forEach(element =>{
        element.processedImg='data:image/jpeg;base64,'+ element.returnedImg;
        this.categories.push(element)
        this.isSpinning=false
      })
    })
  }
  onSearchInputChange() {
    const title = this.validateForm.get(['title'])!.value;
    if (!title) {
      this.getAllCategories();
    }
  }
  getAllCategories(){
    this.categories=[]
    this.adminService.getAllCategories().subscribe((res)=>{
      res.forEach(element =>{
        element.processedImg='data:image/jpeg;base64,'+ element.returnedImg;
        this.categories.push(element)
      })
    })
  }
}
